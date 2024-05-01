let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCartDisplay();
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartDisplay();
  }

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = () => removeItem(index);
      li.appendChild(removeButton);
      cartItemsElement.appendChild(li);
    });
  }