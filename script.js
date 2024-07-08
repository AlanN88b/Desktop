let cart = [];

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

function refreshPage() {
    window.scrollTo(0, 0);
    location.reload();
}

function openWhatsApp(productName) {
    const phoneNumber = '50495600051';
    const message = `Hola, estoy interesado en el ${productName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function addToCart(productName) {
    cart.push(productName);
    updateCartCount();
    updateCartItems();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

function updateCartItems() {
    const cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item}</span>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItemsList.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartItems();
}

function clearCart() {
    cart = [];
    updateCartCount();
    updateCartItems();
}

function toggleCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.classList.toggle('show');
}

function checkout() {
    const phoneNumber = '50495600051';
    const message = `Hola, estos son los productos que quiero comprar: ${cart.join(', ')}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
