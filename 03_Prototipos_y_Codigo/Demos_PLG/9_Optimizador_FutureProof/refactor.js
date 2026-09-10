function closeTooltip(e) {
    if(e) e.stopPropagation();
    const tooltip = document.getElementById('onboarding-tooltip');
    if(tooltip) tooltip.classList.add('hidden');
}

const futureCodeString = `import { db } from '@/lib/db';
import { verifyPassword, generateTokenAsync } from '@/lib/auth';

/**
 * Modern Async/Await Auth (FutureProof Architecture)
 * - Prevents SQL Injection (Parameterized queries)
 * - Non-blocking token generation
 * - Strongly typed with TypeScript
 */
export async function authenticateUser(username: string, password: string): Promise<string> {
    try {
        // Parameterized query avoids SQL Injection
        const user = await db.query('SELECT * FROM users WHERE username = $1', [username]);
        
        if (!user) throw new Error('User not found');
        
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error('Invalid credentials');
        
        // Async token generation prevents event loop blocking
        const token = await generateTokenAsync(user);
        return token;
        
    } catch (error) {
        console.error('[Auth Error]:', error);
        throw new Error('Authentication failed');
    }
}`;

function refactorCode() {
    closeTooltip();
    
    const btn = document.getElementById('btn-refactor');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Analizando AST...';
    btn.classList.replace('bg-emerald-600', 'bg-slate-600');
    btn.classList.replace('hover:bg-emerald-500', 'hover:bg-slate-500');

    // Show scanner
    const scanner = document.getElementById('scanner');
    scanner.classList.remove('hidden');

    const futureCodeEl = document.getElementById('future-code');
    
    // Simulate AST Analysis Steps
    setTimeout(() => {
        futureCodeEl.innerText = "// Detectando vulnerabilidad: SQL Injection Line 3...";
        Prism.highlightElement(futureCodeEl);
    }, 500);

    setTimeout(() => {
        futureCodeEl.innerText = "// Detectando Callback Hell. Refactorizando a Promesas (async/await)...";
        Prism.highlightElement(futureCodeEl);
    }, 1500);

    setTimeout(() => {
        futureCodeEl.innerText = "// Generando Tipado Estricto (TypeScript)...";
        Prism.highlightElement(futureCodeEl);
    }, 2500);

    // Final output
    setTimeout(() => {
        scanner.classList.add('hidden');
        
        // Inject final code
        futureCodeEl.textContent = futureCodeString;
        
        // Tell Prism to re-highlight the injected code
        Prism.highlightElement(futureCodeEl);
        
        // Show perf badge
        document.getElementById('perf-badge').classList.remove('hidden');

        // Reset button
        btn.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Código Optimizado';
        btn.classList.replace('bg-slate-600', 'bg-emerald-600');
    }, 3500);
}
