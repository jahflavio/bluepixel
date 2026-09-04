const messagesContainer = document.getElementById('chat-messages');
const optionsContainer = document.getElementById('chat-options');
let chatOpen = false;
let isFirstOpen = true;

const typingIndicatorHTML = `
    <div id="typing" class="flex w-max max-w-[75%] items-end space-x-2 mb-4">
        <div class="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs">
            <i class="fa-solid fa-robot"></i>
        </div>
        <div class="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 text-sm typing-indicator">
            <span></span><span></span><span></span>
        </div>
    </div>
`;

function closeTooltip() {
    document.getElementById('onboarding-tooltip').classList.add('hidden');
}

function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    closeTooltip();
    
    if (chatOpen) {
        chatWindow.classList.add('hidden');
        chatOpen = false;
    } else {
        chatWindow.classList.remove('hidden');
        chatOpen = true;
        
        if (isFirstOpen) {
            isFirstOpen = false;
            startConversation();
        }
    }
}

function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex w-max max-w-[85%] items-end space-x-2 mb-4 ${isUser ? 'ml-auto flex-row-reverse space-x-reverse' : ''}`;
    
    let avatar = isUser ? '' : `
        <div class="w-8 h-8 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs">
            <i class="fa-solid fa-robot"></i>
        </div>
    `;
    
    let bubbleClass = isUser ? 
        'bg-blue-600 text-white rounded-2xl rounded-br-none shadow-sm text-sm p-3' : 
        'bg-white text-slate-700 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 text-sm p-3';
        
    msgDiv.innerHTML = `
        ${avatar}
        <div class="${bubbleClass}">
            ${text}
        </div>
    `;
    
    messagesContainer.appendChild(msgDiv);
    scrollToBottom();
}

function showTyping() {
    messagesContainer.insertAdjacentHTML('beforeend', typingIndicatorHTML);
    scrollToBottom();
}

function hideTyping() {
    const typing = document.getElementById('typing');
    if (typing) {
        typing.remove();
    }
}

function setOptions(options) {
    optionsContainer.innerHTML = '';
    if (options.length === 0) {
        optionsContainer.classList.add('hidden');
        return;
    }
    
    optionsContainer.classList.remove('hidden');
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "bg-white border border-blue-200 text-blue-600 px-3 py-1.5 rounded-full text-xs font-medium hover:bg-blue-50 transition";
        btn.innerText = opt.text;
        btn.onclick = () => {
            addMessage(opt.text, true);
            setOptions([]); // Clear options immediately
            setTimeout(opt.action, 500);
        };
        optionsContainer.appendChild(btn);
    });
}

// Conversation Flow
function startConversation() {
    showTyping();
    setTimeout(() => {
        hideTyping();
        addMessage("¡Hola! Soy el Agente IA de Acme Logistics. He notado que estás navegando desde una IP corporativa.");
        
        setTimeout(() => {
            showTyping();
            setTimeout(() => {
                hideTyping();
                addMessage("Para ahorrarte tiempo, ¿qué necesitas resolver hoy?");
                setOptions([
                    { text: "Cotizar un envío de carga", action: flowCotizar },
                    { text: "Hablar con Ventas B2B", action: flowVentas },
                    { text: "Solo estoy mirando", action: flowMirando }
                ]);
            }, 1000);
        }, 500);
    }, 1200);
}

function flowVentas() {
    showTyping();
    setTimeout(() => {
        hideTyping();
        addMessage("Perfecto. Para pasarte con el equipo de Enterprise, ¿cuál es tu volumen de envíos mensuales aproximado?");
        setOptions([
            { text: "Menos de 1,000", action: flowSmall },
            { text: "Entre 1,000 y 10,000", action: flowEnterprise },
            { text: "Más de 10,000", action: flowEnterprise }
        ]);
    }, 1000);
}

function flowSmall() {
    showTyping();
    setTimeout(() => {
        hideTyping();
        addMessage("Entendido. Para ese volumen, nuestra plataforma de Auto-Servicio es ideal. Puedes crear tu cuenta aquí mismo.");
        addMessage("<a href='#' class='text-blue-600 underline font-bold'>Crear Cuenta Gratis</a>");
    }, 1500);
}

function flowEnterprise() {
    showTyping();
    setTimeout(() => {
        hideTyping();
        addMessage("¡Excelente! Ese volumen califica para nuestras tarifas VIP y atención ejecutiva.");
        
        setTimeout(() => {
            showTyping();
            setTimeout(() => {
                hideTyping();
                addMessage("Nuestro Director Comercial tiene disponibilidad mañana. Elige el horario que mejor te quede:");
                
                // Generar calendario falso
                const calHTML = `
                    <div class="mt-2 border border-slate-200 rounded overflow-hidden">
                        <div class="bg-slate-100 p-2 text-center font-semibold text-xs border-b border-slate-200">Mañana</div>
                        <div class="grid grid-cols-2 gap-px bg-slate-200">
                            <button onclick="confirmBooking('09:00 AM')" class="bg-white p-2 text-center text-sm text-blue-600 hover:bg-blue-50 font-medium">09:00 AM</button>
                            <button onclick="confirmBooking('11:30 AM')" class="bg-white p-2 text-center text-sm text-blue-600 hover:bg-blue-50 font-medium">11:30 AM</button>
                            <button onclick="confirmBooking('02:00 PM')" class="bg-white p-2 text-center text-sm text-blue-600 hover:bg-blue-50 font-medium">02:00 PM</button>
                            <button onclick="confirmBooking('04:30 PM')" class="bg-white p-2 text-center text-sm text-blue-600 hover:bg-blue-50 font-medium">04:30 PM</button>
                        </div>
                    </div>
                `;
                addMessage(calHTML);
            }, 1200);
        }, 800);
    }, 1200);
}

// Attach to window so buttons inside innerHTML can access it
window.confirmBooking = function(time) {
    addMessage(`Quiero la cita a las ${time}`, true);
    showTyping();
    setTimeout(() => {
        hideTyping();
        addMessage(`✅ ¡Agendado a las ${time}! Te he enviado la invitación a tu calendario corporativo. ¡Hablamos pronto!`);
    }, 1500);
}

function flowCotizar() {
    addMessage("Enseguida, te redirigiré a nuestro cotizador inteligente...", false);
}

function flowMirando() {
    addMessage("¡Sin problema! Si necesitas algo, aquí estaré.", false);
}
