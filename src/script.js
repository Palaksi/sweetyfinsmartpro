// Section Switching Logic
function showSection(sectionId) {
    document.getElementById('dashboard').style.display = sectionId === 'dashboard' ? 'block' : 'none';
    document.querySelector('.viz-section').style.display = sectionId === 'dashboard' ? 'grid' : 'none';
    document.getElementById('cma-corner').style.display = sectionId === 'cma-corner' ? 'block' : 'none';
}

// GST Calculation Logic
function calculateGST() {
    const price = parseFloat(document.getElementById('basePrice').value);
    const gstRate = parseInt(document.getElementById('gstPercent').value);
    const gstResult = document.getElementById('gstResult');

    if (price > 0) {
        const gstAmount = (price * gstRate) / 100;
        const total = price + gstAmount;
        gstResult.innerHTML = `
            <div style="color: #2c3e50;">GST Amount: ₹${gstAmount.toFixed(2)}</div>
            <div style="color: #27ae60; font-size: 18px;">Total Price: ₹${total.toFixed(2)}</div>
        `;
    } else {
        alert("Enter base price!");
    }
}

// CMA Study Concepts
function newStudyTip() {
    const concepts = [
        "Marginal Costing: Focus on contribution per unit.",
        "Standard Costing: Variance analysis is key.",
        "Direct Tax: Remember the latest slab rates!",
        "Audit: Independence is the soul of auditing.",
        "Financial Management: Time value of money is everything."
    ];
    const random = concepts[Math.floor(Math.random() * concepts.length)];
    document.getElementById('studyTip').innerText = `"${random}"`;
}
