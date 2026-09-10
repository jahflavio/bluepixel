const terminal = document.getElementById('terminal-output');
const inputField = document.getElementById('prompt-input');

function clearText() {
    inputField.value = '';
}

function fillExample(type) {
    if (type === 'marketplace') {
        inputField.value = "Quiero construir un marketplace B2B donde contratistas puedan rentar maquinaria pesada a constructoras. Necesitamos que procese pagos, tenga geolocalización de las grúas, y un panel de control para que el dueño apruebe las rentas.";
    } else {
        inputField.value = "Necesitamos un SaaS de finanzas para pymes. Que se conecte a las APIs del SAT para descargar facturas automáticamente, genere reportes en PDF y cobre una suscripción mensual a los usuarios mediante tarjeta de crédito.";
    }
}

function appendToTerminal(htmlString, delay = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            const div = document.createElement('div');
            div.className = "mb-2 fade-in";
            div.innerHTML = htmlString;
            terminal.appendChild(div);
            terminal.scrollTop = terminal.scrollHeight;
            resolve();
        }, delay);
    });
}

async function generateArchitecture() {
    const prompt = inputField.value.toLowerCase().trim();
    if (!prompt) return;

    const btn = document.getElementById('btn-generate');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    
    // Reset terminal
    terminal.innerHTML = '';
    
    // ----------------------------------------------------
    // RULE-BASED NLP ENGINE
    // ----------------------------------------------------
    
    // Detect Architecture
    let techStack = "React (Next.js) + Node.js + PostgreSQL"; // default
    let features = [];
    let months = 3;
    let costType = "Medium";

    if (prompt.includes("pago") || prompt.includes("tarjeta") || prompt.includes("suscripción") || prompt.includes("renta")) {
        techStack += " + <span class='text-purple-400'>Stripe Connect (Pagos)</span>";
        features.push("Integración de pasarela de pagos segura (Stripe)");
        months += 1;
    }
    
    if (prompt.includes("geo") || prompt.includes("mapa") || prompt.includes("ubicación") || prompt.includes("rutas")) {
        techStack += " + <span class='text-emerald-400'>Google Maps API</span>";
        features.push("Módulo de geolocalización en tiempo real");
        months += 1;
    }

    if (prompt.includes("panel") || prompt.includes("dashboard") || prompt.includes("reporte")) {
        features.push("Dashboard administrativo con métricas clave");
    }

    if (prompt.includes("api") || prompt.includes("sat") || prompt.includes("conectar")) {
        techStack += " + <span class='text-amber-400'>Serverless Functions (APIs 3ros)</span>";
        features.push("Desarrollo de Webhooks e integraciones con APIs externas");
        months += 1;
    }

    if (prompt.includes("marketplace") || prompt.includes("usuarios") || prompt.includes("b2b")) {
        features.push("Gestión de roles múltiples (Admin, Proveedor, Cliente)");
        features.push("Sistema de registro y autenticación (Supabase Auth)");
    }
    
    if(features.length === 0) {
        features.push("Autenticación de usuarios segura");
        features.push("Base de datos relacional para entidades principales");
        features.push("Interfaz web responsiva");
    }

    // ----------------------------------------------------
    // SIMULATED TERMINAL OUTPUT
    // ----------------------------------------------------
    await appendToTerminal(`<span class="text-blue-400">> Analizando requerimientos de negocio...</span>`);
    await appendToTerminal(`<span class="text-slate-400">Extrayendo entidades: [${features.length} módulos detectados]</span>`, 800);
    
    await appendToTerminal(`<br><span class="text-white font-bold">--- ARQUITECTURA TECNOLÓGICA PROPUESTA ---</span>`, 800);
    await appendToTerminal(`<span class="text-emerald-400">> STACK RECOMENDADO:</span> ${techStack}`, 500);
    
    await appendToTerminal(`<br><span class="text-white font-bold">--- BACKLOG DEL MVP (FASE 1) ---</span>`, 1000);
    
    for (let i = 0; i < features.length; i++) {
        await appendToTerminal(`<span class="text-amber-400">EPIC 0${i+1}:</span> ${features[i]}`, 400);
    }
    
    await appendToTerminal(`<br><span class="text-white font-bold">--- CRONOGRAMA Y ESFUERZO ---</span>`, 800);
    await appendToTerminal(`<span class="text-purple-400">> TIEMPO ESTIMADO (Go-To-Market):</span> ${months} meses (Sprints de 2 semanas)`, 500);
    await appendToTerminal(`<span class="text-blue-400">> TAMAÑO DEL EQUIPO SUGERIDO:</span> 1 Tech Lead, 2 Fullstack Devs, 1 QA`, 500);
    
    await appendToTerminal(`<br><span class="text-emerald-500 font-bold">[!] Discovery Workshop completado. Blueprint generado exitosamente.</span>`, 1000);

    // Reset button
    btn.disabled = false;
    btn.innerHTML = '<span>Arquitectar</span><i class="fa-solid fa-wand-magic-sparkles"></i>';
}
