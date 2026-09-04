function closeTooltip() {
    document.getElementById('onboarding-tooltip').classList.add('hidden');
}

// Formatter for currency
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

function updateCalculator() {
    closeTooltip();
    
    const slider = document.getElementById('spend-slider');
    const currentSpend = parseInt(slider.value);
    
    // Update Slider UI Value
    document.getElementById('slider-val').innerText = formatter.format(currentSpend);
    
    // Calculate Serverless Savings (Assume 50% savings on average for monolithic to serverless B2B)
    const savingsRatio = 0.50; 
    const newCost = currentSpend * (1 - savingsRatio);
    const monthlySavings = currentSpend - newCost;
    const annualSavings = monthlySavings * 12;
    
    // Update Results
    document.getElementById('new-cost').innerText = formatter.format(newCost);
    document.getElementById('annual-savings').innerText = formatter.format(annualSavings);
}

// Initial calculation
updateCalculator();
