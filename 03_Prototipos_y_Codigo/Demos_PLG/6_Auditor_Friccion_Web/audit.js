function closeTooltip() {
    document.getElementById('onboarding-tooltip').classList.add('hidden');
}

function startAudit() {
    closeTooltip();
    
    const input = document.getElementById('url-input').value;
    const url = input.trim() === "" ? "www.tuempresa.com" : input;
    
    // UI Transitions
    document.getElementById('search-view').classList.add('hidden');
    
    const scannerView = document.getElementById('scanner-view');
    scannerView.classList.remove('hidden');
    
    document.getElementById('scan-title').innerText = `Analizando: ${url}`;
    const log = document.getElementById('scan-log');
    
    // Simulate Scan Sequence
    setTimeout(() => { log.innerText = "Midiendo Largest Contentful Paint (LCP)..."; }, 1000);
    setTimeout(() => { log.innerText = "Evaluando carga de scripts de terceros (GTM, Meta)..."; }, 2000);
    setTimeout(() => { log.innerText = "Calculando Índice de Fricción..."; }, 3000);
    
    // Show Results
    setTimeout(() => {
        scannerView.classList.add('hidden');
        document.getElementById('report-view').classList.remove('hidden');
    }, 4000);
}

// Allow Enter key to submit
document.getElementById('url-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        startAudit();
    }
});
