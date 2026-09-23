document.addEventListener('DOMContentLoaded', () => {
    // Navigation Logic
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            
            // Update active states
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            views.forEach(view => {
                view.classList.remove('active');
                if(view.id === targetId) {
                    view.classList.add('active');
                }
            });
            
            // Initialize chart if dashboard is active
            if(targetId === 'dashboard' && !window.chartInitialized) {
                initChart();
                window.chartInitialized = true;
            }
        });
    });

    // Chat Logic (Quote Agent Simulation)
    const sendBtn = document.getElementById('send-brief-btn');
    const briefInput = document.getElementById('brief-input');
    const chatHistory = document.getElementById('chat-history');
    const confidenceVal = document.getElementById('confidence-val');
    const confidenceProgress = document.getElementById('confidence-progress');

    sendBtn.addEventListener('click', handleSend);
    briefInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });

    function handleSend() {
        const text = briefInput.value.trim();
        if(!text) return;

        // 1. Add User Message
        appendMessage('user', text);
        briefInput.value = '';

        // 2. Show system typing
        const typingId = 'typing-' + Date.now();
        const typingHtml = `
            <div class="message system" id="${typingId}">
                <div class="avatar"><i class="ri-robot-2-fill"></i></div>
                <div class="bubble">
                    <div class="typing-indicator">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </div>
        `;
        chatHistory.insertAdjacentHTML('beforeend', typingHtml);
        chatHistory.scrollTop = chatHistory.scrollHeight;

        // 3. Simulate RAG processing
        setTimeout(() => {
            document.getElementById(typingId).remove();
            
            // Update confidence
            confidenceVal.textContent = '94%';
            confidenceProgress.style.width = '94%';

            // Add response
            const responseHtml = `
                <div class="message system fade-in">
                    <div class="avatar"><i class="ri-robot-2-fill"></i></div>
                    <div class="bubble">
                        <p><strong>Cotización generada exitosamente.</strong> Basado en el histórico de 2025 para "Activaciones BTL con botarga", he calculado los costos óptimos:</p>
                        <table class="quote-table">
                            <thead>
                                <tr>
                                    <th>Concepto</th>
                                    <th>Costo Prov.</th>
                                    <th>Precio Cliente</th>
                                    <th>Margen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Personal (5 Promotores)</td>
                                    <td>$7,500</td>
                                    <td>$12,000</td>
                                    <td class="success">37.5%</td>
                                </tr>
                                <tr>
                                    <td>Botarga Especial</td>
                                    <td>$2,200</td>
                                    <td>$4,500</td>
                                    <td class="success">51.1%</td>
                                </tr>
                                <tr>
                                    <td>Logística y Viáticos</td>
                                    <td>$1,500</td>
                                    <td>$2,500</td>
                                    <td class="success">40.0%</td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="mt-4 flex-between">
                            <strong>Total Sugerido: $19,000 MXN</strong>
                            <button class="primary-btn" style="padding: 6px 12px; font-size: 0.8rem;">Generar PDF</button>
                        </div>
                    </div>
                </div>
            `;
            chatHistory.insertAdjacentHTML('beforeend', responseHtml);
            chatHistory.scrollTop = chatHistory.scrollHeight;

        }, 2000);
    }

    // Chart.js Initialization
    function initChart() {
        const ctx = document.getElementById('revenueChart').getContext('2d');
        
        Chart.defaults.color = '#8b8d98';
        Chart.defaults.font.family = "'Outfit', sans-serif";
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
                datasets: [{
                    label: 'Media Digital',
                    data: [120, 190, 150, 220, 180, 240],
                    backgroundColor: '#f20232',
                    borderRadius: 4
                },
                {
                    label: 'Promotoría',
                    data: [80, 120, 100, 140, 110, 160],
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(255,255,255,0.05)' },
                        border: { display: false }
                    },
                    x: {
                        grid: { display: false },
                        border: { display: false }
                    }
                },
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }

    function appendMessage(sender, text) {
        const html = `
            <div class="message ${sender} fade-in">
                <div class="avatar">
                    ${sender === 'user' 
                        ? '<img src="https://ui-avatars.com/api/?name=Priscilla+Ahuja&background=f20232&color=fff" style="width:100%; border-radius:8px;">' 
                        : '<i class="ri-robot-2-fill"></i>'}
                </div>
                <div class="bubble">
                    <p>${text}</p>
                </div>
            </div>
        `;
        chatHistory.insertAdjacentHTML('beforeend', html);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }
});
