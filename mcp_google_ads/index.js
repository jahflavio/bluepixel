import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { GoogleAdsApi } from "google-ads-api";

// Configuración del cliente de Google Ads usando variables de entorno
const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});

const server = new Server(
  {
    name: "bluepixel-ads-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Definir la herramienta (Tool) que exponemos al Agente (Antigravity/Gemini)
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "upload_offline_conversion",
        description: "Inyecta una conversión de alto valor (Bucle Cerrado) en Google Ads usando GCLID o Hashed Email.",
        inputSchema: {
          type: "object",
          properties: {
            customerId: {
              type: "string",
              description: "ID de la cuenta de Google Ads (formato XXXXXXXXXX)",
            },
            conversionActionId: {
              type: "string",
              description: "El ID numérico de la 'Acción de Conversión' creada en Google Ads.",
            },
            gclid: {
              type: "string",
              description: "Google Click Identifier capturado en el CRM (opcional si se usa hashedEmail).",
            },
            hashedEmail: {
              type: "string",
              description: "Correo del cliente encriptado en SHA-256 (opcional si se usa gclid).",
            },
            conversionValue: {
              type: "number",
              description: "El monto cerrado de la venta (ej. 500000).",
            },
          },
          required: ["customerId", "conversionActionId", "conversionValue"],
        },
      },
    ],
  };
});

// Ejecutar la herramienta cuando el agente la llame
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "upload_offline_conversion") {
    const { customerId, conversionActionId, gclid, hashedEmail, conversionValue } = request.params.arguments;
    
    try {
      const customer = client.Customer({
        customer_id: customerId,
        refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
      });

      // Estructura de la conversión
      const conversionData = {
        conversion_action: `customers/${customerId}/conversionActions/${conversionActionId}`,
        conversion_value: conversionValue,
        conversion_date_time: new Date().toISOString().replace('T', ' ').substring(0, 19) + 'America/Mexico_City',
        currency_code: 'MXN'
      };

      if (gclid) {
        conversionData.gclid = gclid;
      } else if (hashedEmail) {
        // En un entorno real se enviaría como user_identifiers
        conversionData.user_identifiers = [{ hashed_email: hashedEmail }];
      } else {
        throw new Error("Se requiere enviar gclid o hashedEmail para hacer el match.");
      }

      // Enviar a la API de Google Ads
      const response = await customer.conversionUploads.uploadClickConversions([conversionData]);
      
      return {
        content: [
          {
            type: "text",
            text: `Éxito. Conversión de $${conversionValue} inyectada al bucle cerrado. Res: ${JSON.stringify(response)}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error al subir conversión: ${error.message}`,
          },
        ],
        isError: true,
      };
    }
  }
  throw new Error(`Tool no encontrada: ${request.params.name}`);
});

// Inicializar Servidor MCP por entrada estándar (stdio)
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("BluePixel Ads MCP Server iniciado correctamente en stdio.");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
