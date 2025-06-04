function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  container.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const card = document.createElement('div');
    card.className = 'cart-card';
    card.innerHTML = `
      <img src="${item.image}" />
      <h3>${item.name}</h3>
      <p>Price: ₹${item.price}</p>
      <p>Total: ₹${itemTotal}</p>
      <button onclick="updateQty(${item.id}, -1)">-</button>
      ${item.quantity}
      <button onclick="updateQty(${item.id}, 1)">+</button>
      <button onclick="removeItem(${item.id})">Delete</button>
    `;
    container.appendChild(card);
  });

  document.getElementById('cart-total').innerText = total;
}
renderCart();

function updateQty(id, change) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function removeItem(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart = cart.filter(i => i.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  renderCart();
}
