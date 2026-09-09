import requests
import json

url = "http://127.0.0.1:8080/webhook/nuevo_lead"

# 1. Lead Enterprise
lead_1 = {
    "name": "Juan Perez",
    "email": "juan@kavak.com",
    "role": "Soy el CTO",
    "intent_action": "Hablar con Ventas"
}

# 2. Lead Basura (PyME sin rol directivo)
lead_2 = {
    "name": "Maria Lopez",
    "email": "maria@mi-tiendita.com",
    "role": "Estudiante de diseño",
    "intent_action": "Descargar PDF"
}

print(f"Probando Lead 1 (Enterprise): {lead_1['email']}")
r1 = requests.post(url, json=lead_1)
print(json.dumps(r1.json(), indent=2))

print("\n--------------------------\n")

print(f"Probando Lead 2 (Basura): {lead_2['email']}")
r2 = requests.post(url, json=lead_2)
print(json.dumps(r2.json(), indent=2))

