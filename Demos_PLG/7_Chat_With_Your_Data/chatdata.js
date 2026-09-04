const history = document.getElementById('chat-history');

const typingIndicatorHTML = `
    <div id="typing" class="flex items-start space-x-2">
        <div class="w-8 h-8 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-robot text-xs"></i>
        </div>
        <div class="bg-white p-3 rounded-lg border border-slate-200 text-sm text-slate-700 shadow-sm typing-indicator">
            <span></span><span></span><span></span>
        </div>
    </div>
`;

function closeTooltip() {
    const tooltip = document.getElementById('onboarding-tooltip');
    if(tooltip) tooltip.classList.add('hidden');
}

function scrollToBottom() {
    history.scrollTop = history.scrollHeight;
}

function askQuestion(questionText) {
    closeTooltip();
    
    // Disable suggestion buttons to avoid double clicking
    const btns = document.querySelectorAll('button.bg-slate-100');
    btns.forEach(b => b.classList.add('hidden'));

    // User Message
    const userMsg = document.createElement('div');
    userMsg.className = "flex items-start space-x-2 flex-row-reverse space-x-reverse";
    userMsg.innerHTML = `
        <div class="w-8 h-8 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-user text-xs"></i>
        </div>
        <div class="bg-sky-600 text-white p-3 rounded-lg shadow-sm text-sm">
            ${questionText}
        </div>
    `;
    history.appendChild(userMsg);
    scrollToBottom();

    // Show Typing
    setTimeout(() => {
        history.insertAdjacentHTML('beforeend', typingIndicatorHTML);
        scrollToBottom();
        
        // AI Response
        setTimeout(() => {
            document.getElementById('typing').remove();
            
            const aiMsg = document.createElement('div');
            aiMsg.className = "flex items-start space-x-2";
            
            let answer = "";
            if(questionText.includes("Q3")) {
                answer = "<b>Causa Raíz Identificada:</b><br><br>1. El <b>Churn Rate subió a 4.2%</b> debido a la pérdida de 3 cuentas Enterprise en el sector Retail.<br>2. El MRR bajó un 8.4% porque las nuevas ventas de Q3 fueron de tickets promedio más bajos.<br><br><b>Sugerencia:</b> Lanzar una campaña de reactivación enfocada en cuentas Retail.";
            } else {
                answer = "Basado en el pipeline actual de HubSpot, se proyecta cerrar Q4 con <b>$180k USD</b>, superando el Q2.";
            }

            aiMsg.innerHTML = `
                <div class="w-8 h-8 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-robot text-xs"></i>
                </div>
                <div class="bg-white p-3 rounded-lg border border-slate-200 text-sm text-slate-700 shadow-sm leading-relaxed">
                    ${answer}
                </div>
            `;
            history.appendChild(aiMsg);
            scrollToBottom();
            
        }, 2000);
    }, 500);
}
