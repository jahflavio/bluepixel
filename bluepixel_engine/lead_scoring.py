def calculate_lead_score(lead_data: dict, firmographic_data: dict) -> dict:
    """
    Calcula el Lead Score basado en la matriz de 100 puntos definida en la estrategia.
    """
    score = 0
    breakdown = []
    
    # 1. Firmográfico (Máximo 40 pts)
    company_size = firmographic_data.get("company_size", 0)
    if company_size >= 1000:
        score += 40
        breakdown.append("+40 pts: Empresa Enterprise (1000+ emp)")
    elif company_size >= 100:
        score += 20
        breakdown.append("+20 pts: Empresa Mid-Market (100+ emp)")
    else:
        breakdown.append("+0 pts: PyME o tamaño desconocido")

    # 2. Cargo del Contacto (Máximo 30 pts)
    role = lead_data.get("role", "").lower()
    c_level_titles = ["cto", "ceo", "cfo", "director", "vp", "founder"]
    if any(title in role for title in c_level_titles):
        score += 30
        breakdown.append(f"+30 pts: Rol C-Level/Director ({lead_data.get('role')})")
    elif "manager" in role or "gerente" in role:
        score += 10
        breakdown.append(f"+10 pts: Mando medio ({lead_data.get('role')})")
    elif "estudiante" in role or "analista" in role:
        score += 0
        breakdown.append(f"+0 pts: Rol sin poder de decisión ({lead_data.get('role')})")

    # 3. Nivel de Intención (Máximo 30 pts)
    intent = lead_data.get("intent_action", "")
    if intent == "Hablar con Ventas" or intent == "Agendar Demo":
        score += 30
        breakdown.append("+30 pts: Alta intención (Pidió hablar con Ventas)")
    elif intent == "Descargar PDF":
        score += 10
        breakdown.append("+10 pts: Baja intención (Solo descargó contenido)")
        
    # Decisión comercial
    decision = "ENVIAR A VENTAS (SLACK/WHATSAPP)" if score >= 90 else "MANDAR A NURTURING AUTOMATICO"

    return {
        "final_score": score,
        "decision": decision,
        "breakdown": breakdown
    }
