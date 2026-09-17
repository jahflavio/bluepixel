import os
import json
import asyncio
from typing import Any, List, Dict
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent
from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

# Inicializar servidor MCP
app = Server("bluepixel-marketing-audit")

# Configurar credenciales desde variables de entorno
# Rocketing debe proveer el google-ads.yaml o estas variables.
# En este caso, usaremos diccionarios para inicializar el cliente si existen las variables
def get_google_ads_client():
    try:
        credentials = {
            "developer_token": os.environ.get("GOOGLE_ADS_DEVELOPER_TOKEN", ""),
            "refresh_token": os.environ.get("GOOGLE_ADS_REFRESH_TOKEN", ""),
            "client_id": os.environ.get("GOOGLE_ADS_CLIENT_ID", ""),
            "client_secret": os.environ.get("GOOGLE_ADS_CLIENT_SECRET", ""),
            "login_customer_id": os.environ.get("GOOGLE_ADS_LOGIN_CUSTOMER_ID", ""),
            "use_proto_plus": True
        }
        return GoogleAdsClient.load_from_dict(credentials)
    except Exception as e:
        return None

CUSTOMER_ID = os.environ.get("GOOGLE_ADS_CUSTOMER_ID", "")

@app.list_tools()
async def list_tools() -> List[Tool]:
    """Lista las herramientas de auditoría de Google Ads disponibles para Antigravity."""
    return [
        Tool(
            name="get_campaign_performance",
            description="Obtiene las métricas principales (clics, impresiones, costo, conversiones) de todas las campañas activas en los últimos 30 días.",
            inputSchema={
                "type": "object",
                "properties": {},
                "required": []
            }
        ),
        Tool(
            name="get_search_terms",
            description="Obtiene los términos de búsqueda reales que los usuarios teclearon antes de hacer clic en los anuncios para identificar tráfico basura.",
            inputSchema={
                "type": "object",
                "properties": {
                    "limit": {
                        "type": "integer",
                        "description": "Número máximo de términos a devolver (ej. 50)"
                    }
                },
                "required": ["limit"]
            }
        )
    ]

@app.call_tool()
async def call_tool(name: str, arguments: dict) -> List[TextContent]:
    """Maneja la ejecución de las herramientas."""
    if not CUSTOMER_ID:
        return [TextContent(type="text", text="Error: Falta la variable GOOGLE_ADS_CUSTOMER_ID en el entorno.")]
        
    client = get_google_ads_client()
    if not client:
        return [TextContent(type="text", text="Error: No se pudo inicializar el cliente de Google Ads. Revisa las credenciales de entorno.")]

    if name == "get_campaign_performance":
        try:
            ga_service = client.get_service("GoogleAdsService")
            query = """
                SELECT
                  campaign.id,
                  campaign.name,
                  metrics.clicks,
                  metrics.impressions,
                  metrics.cost_micros,
                  metrics.conversions
                FROM campaign
                WHERE campaign.status = 'ENABLED'
                AND segments.date DURING LAST_30_DAYS
                ORDER BY metrics.cost_micros DESC
            """
            
            response = ga_service.search(customer_id=CUSTOMER_ID, query=query)
            
            results = []
            for row in response:
                cost_mxn = row.metrics.cost_micros / 1000000
                results.append({
                    "id": row.campaign.id,
                    "name": row.campaign.name,
                    "clicks": row.metrics.clicks,
                    "impressions": row.metrics.impressions,
                    "cost_mxn": cost_mxn,
                    "conversions": row.metrics.conversions
                })
                
            return [TextContent(type="text", text=json.dumps(results, indent=2))]
            
        except GoogleAdsException as ex:
            return [TextContent(type="text", text=f"Error API Google Ads: {ex}")]

    elif name == "get_search_terms":
        limit = arguments.get("limit", 50)
        try:
            ga_service = client.get_service("GoogleAdsService")
            query = f"""
                SELECT
                  search_term_view.search_term,
                  metrics.clicks,
                  metrics.cost_micros,
                  campaign.name
                FROM search_term_view
                WHERE segments.date DURING LAST_30_DAYS
                ORDER BY metrics.cost_micros DESC
                LIMIT {limit}
            """
            response = ga_service.search(customer_id=CUSTOMER_ID, query=query)
            
            results = []
            for row in response:
                cost_mxn = row.metrics.cost_micros / 1000000
                results.append({
                    "search_term": row.search_term_view.search_term,
                    "campaign": row.campaign.name,
                    "clicks": row.metrics.clicks,
                    "cost_mxn": cost_mxn
                })
                
            return [TextContent(type="text", text=json.dumps(results, indent=2))]
            
        except GoogleAdsException as ex:
            return [TextContent(type="text", text=f"Error API Google Ads: {ex}")]

    return [TextContent(type="text", text=f"Herramienta '{name}' no encontrada.")]

async def main():
    async with stdio_server() as (read_stream, write_stream):
        await app.run(read_stream, write_stream, app.create_initialization_options())

if __name__ == "__main__":
    asyncio.run(main())
