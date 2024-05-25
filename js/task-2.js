document.addEventListener('DOMContentLoaded', () => {
  function getShippingMessage(country, price, deliveryFee) {
      const totalPrice = price + deliveryFee;
      return `Shipping to ${country} will cost ${totalPrice} credits`;
  }

  const shippingResults = document.getElementById('shipping-results');

  const messages = [
      getShippingMessage("Australia", 120, 50),
      getShippingMessage("Germany", 80, 20),
      getShippingMessage("Sweden", 100, 20)
  ];

  messages.forEach(message => {
      const p = document.createElement('p');
      p.textContent = message;
      shippingResults.appendChild(p);
  });
});
