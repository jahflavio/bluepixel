const leads = [
    { name: "Juan Pérez", role: "CTO", company: "Bimbo", size: "+10,000", intent: "Agendó llamada", score: 100 },
    { name: "María López", role: "Directora de TI", company: "Kavak", size: "+1,000", intent: "Visitó Casos de Éxito", score: 92 },
    { name: "Carlos Slim Jr.", role: "CEO", company: "Grupo Carso", size: "Enterprise", intent: "Visitó Precios", score: 90 },
    { name: "Ana Silva", role: "Gerente de Marketing", company: "Agencia XYZ", size: "50-100", intent: "Descargó PDF", score: 65 },
    { name: "Luis Gómez", role: "Estudiante", company: "UNAM", size: "1", intent: "Visitó Home", score: 10 }
];

function closeTooltip(id) {
    document.getElementById(`tooltip-${id}`).classList.add('hidden');
}

function simulateUpload() {
    closeTooltip(1);
    
    // Show file ready state
    document.getElementById('file-ready').classList.remove('hidden');
    
    // Enable process button
    const btn = document.getElementById('btn-process');
    btn.disabled = false;
    btn.classList.remove('bg-slate-300', 'text-slate-500', 'cursor-not-allowed');
    btn.classList.add('bg-blue-600', 'text-white', 'hover:bg-blue-700', 'shadow-md');
    
    // Show Tooltip 2
    document.getElementById('tooltip-2').classList.remove('hidden');
}

function processData() {
    closeTooltip(2);
    
    // Hide upload section, show loading
    document.getElementById('upload-section').classList.add('hidden');
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('hidden');
    loadingScreen.classList.add('flex');
    
    // Simulate AI loading steps
    setTimeout(() => {
        document.getElementById('loading-text').innerText = "Cruzando datos con Clearbit...";
    }, 1000);
    
    setTimeout(() => {
        document.getElementById('loading-text').innerText = "Aplicando Matriz de Scoring B2B...";
    }, 2000);

    setTimeout(() => {
        loadingScreen.classList.remove('flex');
        loadingScreen.classList.add('hidden');
        showResults();
    }, 3000);
}

function showResults() {
    const resultsScreen = document.getElementById('results-screen');
    resultsScreen.classList.remove('hidden');
    
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = '';
    
    leads.forEach(lead => {
        let scoreBadgeClass = "";
        let rowClass = "";
        let actionBadge = "";
        
        if(lead.score >= 90) {
            scoreBadgeClass = "bg-emerald-100 text-emerald-700 font-bold px-2 py-1 rounded";
            rowClass = "bg-emerald-50/30 border-b border-slate-100";
            actionBadge = "<span class='text-emerald-600 font-semibold'><i class='fa-brands fa-slack mr-1'></i> Alerta a Ventas</span>";
        } else if (lead.score >= 50) {
            scoreBadgeClass = "bg-amber-100 text-amber-700 font-bold px-2 py-1 rounded";
            rowClass = "border-b border-slate-100";
            actionBadge = "<span class='text-slate-500'><i class='fa-solid fa-envelope mr-1'></i> Nurturing Automático</span>";
        } else {
            scoreBadgeClass = "bg-rose-100 text-rose-700 font-bold px-2 py-1 rounded";
            rowClass = "border-b border-slate-100 opacity-60";
            actionBadge = "<span class='text-slate-400'><i class='fa-solid fa-trash mr-1'></i> Descartar</span>";
        }

        const tr = document.createElement('tr');
        tr.className = rowClass;
        tr.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap"><span class="${scoreBadgeClass}">${lead.score} pts</span></td>
            <td class="px-6 py-4 whitespace-nowrap font-medium text-slate-800">${lead.name}</td>
            <td class="px-6 py-4 whitespace-nowrap">${lead.role}</td>
            <td class="px-6 py-4 whitespace-nowrap">${lead.company} <span class="text-xs text-slate-400 ml-1">(${lead.size})</span></td>
            <td class="px-6 py-4 whitespace-nowrap"><span class="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">${lead.intent}</span></td>
            <td class="px-6 py-4 whitespace-nowrap">${actionBadge}</td>
        `;
        tbody.appendChild(tr);
    });
}
