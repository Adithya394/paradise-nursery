const products = [
  { id: 1, name: "Lavender", category: "aromatic", price: 100, image: "assets/images/lavender.jpg", desc: "Soothing aroma." },
  { id: 2, name: "Mint", category: "aromatic", price: 50, image: "assets/images/mint.jpg", desc: "Fresh and minty." },
  { id: 3, name: "Tulsi", category: "medicinal", price: 70, image: "assets/images/tulsi.jpg", desc: "Holy medicinal herb." }
];

function renderProducts() {
  const aromatic = document.getElementById('aromatic-products');
  const medicinal = document.getElementById('medicinal-products');

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    if (product.category === "aromatic") aromatic.appendChild(card);
    else medicinal.appendChild(card);
  });
}
renderProducts();

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === id);
  const existing = cart.find(p => p.id === id);
  if (existing) existing.quantity++;
  else cart.push({ ...product, quantity: 1 });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}
