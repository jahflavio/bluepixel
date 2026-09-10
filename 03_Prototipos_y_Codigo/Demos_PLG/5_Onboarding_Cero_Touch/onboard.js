function closeTooltip() {
    document.getElementById('onboarding-tooltip').classList.add('hidden');
}

function triggerOnboarding() {
    closeTooltip();
    
    const btn = document.getElementById('btn-hire');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Ejecutando Webhooks...';
    btn.classList.replace('bg-purple-600', 'bg-slate-400');
    btn.classList.replace('hover:bg-purple-700', 'hover:bg-slate-400');

    // Start Animation Sequence
    
    // 1. Trigger Start Node
    const startNode = document.getElementById('node-start');
    startNode.classList.remove('bg-slate-800', 'border-slate-600', 'text-slate-400');
    startNode.classList.add('bg-emerald-900', 'border-emerald-500', 'text-emerald-400', 'node-pulse');

    // 2. Animate GWS
    setTimeout(() => activateNode('gws', 'Google Workspace'), 800);
    
    // 3. Animate Slack
    setTimeout(() => activateNode('slack', 'Slack Enterprise'), 1600);
    
    // 4. Animate Jira
    setTimeout(() => activateNode('jira', 'Jira Software'), 2400);

    // 5. Complete
    setTimeout(() => {
        document.getElementById('success-message').classList.remove('hidden');
        btn.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Alta Completada';
        btn.classList.replace('bg-slate-400', 'bg-emerald-600');
        startNode.classList.remove('node-pulse');
    }, 3200);
}

function activateNode(id, name) {
    const node = document.getElementById(`node-${id}`);
    const text = document.getElementById(`text-${id}`);
    
    node.classList.remove('bg-slate-800', 'border-slate-600', 'text-slate-400');
    node.classList.add('bg-blue-900', 'border-blue-500', 'text-blue-400', 'node-pulse');
    
    text.innerText = `Creando ${name}...`;
    text.classList.add('text-blue-400');

    setTimeout(() => {
        node.classList.remove('bg-blue-900', 'border-blue-500', 'text-blue-400', 'node-pulse');
        node.classList.add('bg-emerald-900', 'border-emerald-500', 'text-emerald-400');
        
        text.innerText = `${name} OK`;
        text.classList.remove('text-blue-400');
        text.classList.add('text-emerald-400');
    }, 800);
}
