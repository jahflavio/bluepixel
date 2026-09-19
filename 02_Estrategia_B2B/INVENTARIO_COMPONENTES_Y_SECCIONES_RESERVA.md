# 📦 INVENTARIO DE SECCIONES Y COMPONENTES EN RESERVA
## Catálogo de Activos UI & Copy B2B Listos para Reutilización

> **Propósito:** Este documento registra componentes de alta fidelidad técnica y visual que han sido retirados temporalmente del Home principal para simplificar el flujo visual, pero que están 100% programados, testeados y disponibles para reutilizarse en landings verticales, páginas de servicio o futuras iteraciones del sitio web.

---

### 🛡️ 1. TechnicalSovereignty.jsx (Soberanía Técnica & Cero Lock-in)

* **Ubicación en Código:** [`03_Prototipos_y_Codigo/Componentes_Nueva_Web/bluepixel-app/src/components/sections/TechnicalSovereignty.jsx`](file:///c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/Componentes_Nueva_Web/bluepixel-app/src/components/sections/TechnicalSovereignty.jsx)
* **Kicker:** `CERO LOCK-IN · SOBERANÍA ABSOLUTA`
* **Headline Principal:**  
  *«Tu infraestructura. Tus datos. Tu código fuente.»*
* **Subtítulo / Propuesta de Valor:**  
  *«Construimos agentes de IA bajo un principio fundacional innegociable: tú eres el dueño absoluto de la tecnología. No vendemos "cajas negras" ni cobramos licencias abusivas por usuario.»*

#### 📐 Estructura y Elementos del Bento Grid:
1. **Card Principal: Despliegue nativo en tu VPC (AWS, Azure o Google Cloud)**
   * *Copy:* Toda la arquitectura agentica se despliega de forma nativa dentro de tu propia nube privada. Tus datos nunca salen de tu perímetro de seguridad empresarial, asegurando cumplimiento total (SOC2, HIPAA).
   * *Widget Interactivo:* Terminal visual `VPC_DEPLOYMENT_STATUS` con indicadores en vivo:
     - `ec2_cluster_nodes` -> `ACTIVE`
     - `rds_vector_db` -> `SYNCED`
     - `iam_zero_trust` -> `ENFORCED`
2. **Card Secundaria: Propiedad del Código**
   * *Copy:* Al finalizar la fase de desarrollo (Build), te entregamos el 100% de los derechos intelectuales y el código fuente. Eres completamente libre de mantenerlo in-house con tu equipo de ingeniería o contratar nuestra póliza de Mantenimiento.
3. **Card Terciaria: Modelos Blindados (Zero Data Retention)**
   * *Copy:* Utilizamos instancias empresariales de LLMs con políticas estrictas de privacidad (Zero Data Retention). Ninguna conversación confidencial o dato de tus clientes se usará jamás para entrenar modelos públicos.

#### 🎯 Destinos y Casos de Uso Recomendados para esta Sección:
* **Landing de Seguridad y Confiabilidad:** `/servicio/security` o `/data-privacy`.
* **Landing de Automatización:** `/automatizacion` (para directores de IT escépticos de SaaS de terceros).
* **Propuestas y One-Pagers Enterprise:** Para responder a cuestionarios de seguridad de procurement y comités de compliance bancario/médico.

---

### 📑 2. HomeDirectorySection.jsx (Estructura Técnica y Comercial)
* **Ubicación en Código:** [`03_Prototipos_y_Codigo/Componentes_Nueva_Web/bluepixel-app/src/components/sections/HomeDirectorySection.jsx`](file:///c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/Componentes_Nueva_Web/bluepixel-app/src/components/sections/HomeDirectorySection.jsx)
* **Headline Principal:** *«Estructura Técnica y Comercial»*
* **Propósito:** Directorio visual con accesos directos a `/pilares`, `/servicios` y `/como-trabajamos`.
* **Estado:** Retirado del Home al consolidarse los **4 Pilares de Servicio** (`ThreeWaysToWork.jsx`) directamente en la página de inicio.

---

### 📊 3. ImpathFrictionSection.jsx (Fricción Operativa, Mixpanel & Vault)
* **Ubicación en Código:** [`03_Prototipos_y_Codigo/Componentes_Nueva_Web/bluepixel-app/src/components/sections/ImpathFrictionSection.jsx`](file:///c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/Componentes_Nueva_Web/bluepixel-app/src/components/sections/ImpathFrictionSection.jsx)
* **Headline Principal:**  
  *«Descubre qué fricción le cuesta más dinero a tu plataforma con IMPATH y Mixpanel.»*
* **Propósito:**  
  Mapea 7 dimensiones de comportamiento de usuarios con simulación de Personas (Power User vs Casual User), monitoreo de telemetría con Mixpanel Platform Health (UX Health Score) y cuantificación de riesgo financiero en pesos con Vault.
* **Destinos Recomendados:**  
  * Landing de Consultoría Tecnológica (`/consultoria-tecnologica`).
  * Propuestas de Auditoría y Diagnóstico FutureProof (Pilar 01).
* **Estado:** Retirado del Home principal para mantener la página ágil y directa; activo y visible en el **Showroom de Componentes (`#/componentes`)**.

---

### 🏛️ 4. Showroom & Galería Maestra de Componentes (`#/componentes`)
* **Ubicación en Código:** [`03_Prototipos_y_Codigo/Componentes_Nueva_Web/bluepixel-app/src/components/landings/ComponentShowcasePage.jsx`](file:///c:/Users/usarioBP/.gemini/antigravity-ide/scratch/bluepixel/03_Prototipos_y_Codigo/Componentes_Nueva_Web/bluepixel-app/src/components/landings/ComponentShowcasePage.jsx)
* **Acceso Directo:** Navegar a `#/componentes` o dar clic en el botón `Showroom` del Navbar.
* **Propósito:** Muestra los **18 componentes del sistema** renderizados en vivo de manera interactiva con sus metadatos (ruta de archivo, estado, caso de uso y quick-jump index).
