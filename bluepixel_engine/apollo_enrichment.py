import re

def extract_domain(email: str) -> str:
    """Extrae el dominio de un correo electrónico."""
    match = re.search(r"@[\w.]+", email)
    return match.group()[1:] if match else ""

def enrich_lead_mock(email: str) -> dict:
    """
    Mock API para simular el comportamiento de Apollo.io.
    En la vida real, aquí haríamos un requests.get a la API de Apollo.
    """
    domain = extract_domain(email).lower()
    
    # Base de datos simulada (Mock)
    mock_db = {
        "kavak.com": {
            "company_size": 1500,
            "industry": "Automotive / E-commerce",
            "annual_revenue": "$100M+"
        },
        "bancoazteca.com.mx": {
            "company_size": 10000,
            "industry": "Banking / Finance",
            "annual_revenue": "$1B+"
        },
        "mi-tiendita.com": {
            "company_size": 5,
            "industry": "Retail",
            "annual_revenue": "$50K"
        }
    }
    
    # Si el dominio está en nuestra base de datos falsa, regresamos esos datos
    if domain in mock_db:
        return mock_db[domain]
    
    # Si no, asumimos que es una PyME o correo genérico (gmail.com, etc)
    return {
        "company_size": 1,
        "industry": "Unknown",
        "annual_revenue": "Unknown"
    }
