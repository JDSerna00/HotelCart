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
  function printRecipe() {
    let totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    let recipe = `Total: $${totalPrice}\n\nItems:\n`;
    cart.forEach(item => {
      recipe += `${item.name} - $${item.price}\n`;
    });
    console.log(recipe);
  }
  function checkout() {
    let totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    let recipe = `Total: $${totalPrice}\n\nItems:\n`;
    cart.forEach(item => {
      recipe += `${item.name} - $${item.price}\n`;
    });

    printRecipe();
    const message = encodeURIComponent(recipe);
  const whatsappNumber = '573243707220';
  const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;

  window.open(url, '_blank');

  }