document.addEventListener('DOMContentLoaded', () => {
    function makeTransaction(quantity, pricePerDroid) {
        const totalPrice = quantity * pricePerDroid;
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }

    const task1Results = document.getElementById('task-1-results');

    const results1 = [
        makeTransaction(5, 3000),
        makeTransaction(3, 1000),
        makeTransaction(10, 500)
    ];

    results1.forEach(result => {
        const p = document.createElement('p');
        p.textContent = result;
        task1Results.appendChild(p);
    });
});
