function closeTooltip() {
    document.getElementById('onboarding-tooltip').classList.add('hidden');
}

// User-triggered update
function updateStock(itemId, amount) {
    const el = document.getElementById(itemId);
    let currentVal = parseInt(el.innerText);
    let newVal = currentVal + amount;
    
    if (newVal < 0) newVal = 0;
    
    el.innerText = newVal;
    
    // Flash animation
    el.classList.remove('flash-update', 'flash-decrease');
    void el.offsetWidth; // trigger reflow
    el.classList.add(amount > 0 ? 'flash-update' : 'flash-decrease');
}

// Ghost User Simulation (WebSockets Fake)
function simulateRemoteUpdates() {
    const items = ['item-1', 'item-2', 'item-3'];
    
    setInterval(() => {
        // Randomly pick an item
        const randomItem = items[Math.floor(Math.random() * items.length)];
        // Randomly pick +1 or -1
        const amount = Math.random() > 0.5 ? 1 : -1;
        
        // Update it programmatically
        updateStock(randomItem, amount);
        
    }, 4000); // Every 4 seconds, a random item updates
}

// Start simulation after 2 seconds
setTimeout(() => {
    simulateRemoteUpdates();
}, 2000);
