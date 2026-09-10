from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
from apollo_enrichment import enrich_lead_mock
from lead_scoring import calculate_lead_score
import json

app = FastAPI(title="Blue Pixel RevOps Engine", version="1.0")

class LeadData(BaseModel):
    name: str
    email: str
    role: str
    intent_action: str
    company_name: Optional[str] = None

@app.post("/webhook/nuevo_lead")
async def process_new_lead(lead: LeadData):
    print("\n" + "="*50)
    print(f"[NUEVO LEAD RECIBIDO DE WEBFLOW]: {lead.email}")
    print("="*50)

    # 1. Enriquecimiento de Datos (Mock Apollo)
    print(f"[Consultando API de Apollo.io para el dominio de]: {lead.email}...")
    firmographic_data = enrich_lead_mock(lead.email)
    print(f"[Datos de empresa obtenidos]: {firmographic_data}")
    
    # 2. Lead Scoring
    print("[Ejecutando Matriz de Lead Scoring...]")
    lead_dict = lead.model_dump()
    scoring_result = calculate_lead_score(lead_dict, firmographic_data)
    
    print(f"\n[SCORE FINAL]: {scoring_result['final_score']} / 100")
    for breakdown_item in scoring_result["breakdown"]:
        print(f"   {breakdown_item}")
        
    print(f"\n[DECISION COMERCIAL]: {scoring_result['decision']}")
    
    # 3. Simulación de Alerta (Handoff)
    if scoring_result["final_score"] >= 90:
        print("\n[ALERTA] Disparando Webhook hacia Slack/WhatsApp de Ventas...")
        print(f"Mensaje simulado: '[NUEVO LEAD ENTERPRISE]: {lead.name} de {lead.email}. Score: {scoring_result['final_score']}. Llamar en menos de 5 min!'")
    else:
        print("\n[NURTURING] El lead fue enviado a la campana de goteo en HubSpot. No se molestara a Ventas.")
        
    print("="*50 + "\n")
    
    return {
        "status": "success",
        "email": lead.email,
        "score": scoring_result["final_score"],
        "action": scoring_result["decision"]
    }

@app.get("/")
def read_root():
    return {"message": "Motor RevOps de Blue Pixel en linea. Esperando leads..."}
