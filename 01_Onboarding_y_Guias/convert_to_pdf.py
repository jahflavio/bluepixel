import markdown
from weasyprint import HTML
import os

md_file = r"c:\Users\fabia\OneDrive\Escritorio\Blue Pixel\01_Onboarding_y_Guias\MASTER_GUIA_DIA_1.md"
pdf_file = r"c:\Users\fabia\OneDrive\Escritorio\Blue Pixel\01_Onboarding_y_Guias\MASTER_GUIA_DIA_1.pdf"

with open(md_file, "r", encoding="utf-8") as f:
    text = f.read()

# Convert markdown to HTML
html_text = markdown.markdown(text)

# Add some basic styling
styled_html = f"""
<html>
<head>
<style>
    body {{ font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }}
    h1, h2, h3 {{ color: #333; }}
    code {{ background: #f4f4f4; padding: 2px 5px; border-radius: 3px; font-family: monospace; }}
    pre {{ background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; }}
</style>
</head>
<body>
{html_text}
</body>
</html>
"""

# Generate PDF
HTML(string=styled_html).write_pdf(pdf_file)
print(f"PDF generado exitosamente en: {pdf_file}")
