function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').innerText = total;
}
updateCartCount();
