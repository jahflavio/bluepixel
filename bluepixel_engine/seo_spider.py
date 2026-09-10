import requests
from bs4 import BeautifulSoup
import csv
from urllib.parse import urljoin, urlparse
import time

def scrape_seo_data(start_url):
    print(f"[START] Iniciando el Web Scraper de SEO en: {start_url}")
    
    # Configuramos los headers para que no nos bloqueen
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    
    visited = set()
    to_visit = [start_url]
    base_domain = urlparse(start_url).netloc
    
    results = []
    
    # Limitamos a 20 páginas para no tardar mucho en la demostración
    limit = 20
    count = 0
    
    while to_visit and count < limit:
        url = to_visit.pop(0)
        
        if url in visited:
            continue
            
        visited.add(url)
        count += 1
        
        try:
            print(f"[{count}/{limit}] Escaneando: {url}...")
            response = requests.get(url, headers=headers, timeout=10)
            status_code = response.status_code
            
            # Solo procesamos si es HTML
            if 'text/html' not in response.headers.get('Content-Type', ''):
                continue
                
            soup = BeautifulSoup(response.text, 'lxml')
            
            # Extraer Título
            title = soup.title.string.strip() if soup.title and soup.title.string else "SIN TITULO"
            
            # Extraer Meta Description
            meta_desc = soup.find('meta', attrs={'name': 'description'})
            description = meta_desc['content'].strip() if meta_desc and meta_desc.get('content') else "SIN DESCRIPCION"
            
            # Extraer H1 (solo tomamos el primero si hay varios)
            h1_tag = soup.find('h1')
            h1_text = h1_tag.text.strip() if h1_tag else "FALTA H1"
            
            # Guardamos los resultados
            results.append({
                'URL': url,
                'Status': status_code,
                'Title (Meta)': title,
                'H1': h1_text,
                'Meta Description': description
            })
            
            # Encontrar más links internos para seguir crawleando
            for link in soup.find_all('a', href=True):
                next_url = urljoin(start_url, link['href'])
                # Solo seguir links internos y que no sean anclas o emails
                if urlparse(next_url).netloc == base_domain and next_url not in visited and not next_url.startswith('mailto:') and '#' not in next_url:
                    to_visit.append(next_url)
                    
            time.sleep(0.5) # Respetar el servidor
            
        except Exception as e:
            print(f"[ERROR] Error escaneando {url}: {e}")
            results.append({
                'URL': url,
                'Status': 'ERROR',
                'Title (Meta)': '',
                'H1': '',
                'Meta Description': ''
            })

    # Guardar en CSV
    csv_file = "seo_audit_bluepixel.csv"
    with open(csv_file, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.DictWriter(file, fieldnames=['URL', 'Status', 'Title (Meta)', 'H1', 'Meta Description'])
        writer.writeheader()
        for row in results:
            writer.writerow(row)
            
    print(f"\n[OK] Scraping terminado! Se escanearon {len(results)} paginas.")
    print(f"[SAVE] Reporte guardado en: {csv_file}")

if __name__ == "__main__":
    scrape_seo_data("https://bluepixel.mx")
