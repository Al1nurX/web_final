const handleImageChange = (carouselIndex, offset) => {
	const activeSlide = document.querySelector(`#carousel${carouselIndex} [data-active]`);
	const slides = [...document.querySelectorAll(`#carousel${carouselIndex} .slide`)];
	const currentIndex = slides.indexOf(activeSlide);
	let newIndex = currentIndex + offset;

	if (newIndex < 0) newIndex = slides.length - 1;
	if (newIndex >= slides.length) newIndex = 0;

	slides[newIndex].dataset.active = true;
	delete activeSlide.dataset.active;
}

const onNext = (carouselIndex, event) => {
    handleImageChange(carouselIndex, 1);
    event.preventDefault(); 
}

const onPrev = (carouselIndex, event) => {
    handleImageChange(carouselIndex, -1);
    event.preventDefault(); 
}

function closeCart() {
  var x = document.getElementById("myDIV");
  x.style.display = "none";
}

const closeCartButton = document.getElementById('btn-close');
if (closeCartButton) {
  closeCartButton.addEventListener('click', closeCart);
}

const cart = [];
function addToCart(item, event) {
  const existingItem = cart.find(cartItem => cartItem.name === item.name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  updateCart();
  event.stopPropagation(); 
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  let total = 0;
  cartItems.innerHTML = '';
  const placeholderImage = './pics/gallery_medium.jpg';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="cart-item">
        <img src="${item.image || placeholderImage}" alt="${item.name}" class="cart-item-image">
        <div>
          <p>${item.name} (${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <div>
        <button class="remove-from-cart-button" onclick="removeFromCart('${item.name}')">
        x
      </button>      
        </div>
      </div>
    `;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });
  cartTotal.textContent = `Total Price: $${total.toFixed(2)}`;
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const productImage = document.getElementById('product-image');
const imageModal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');

productImage.addEventListener('click', () => {
    modalImage.src = productImage.src;
    imageModal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

function removeFromCart(itemToRemove) {
  const indexToRemove = cart.findIndex(item => item.name === itemToRemove.name);

  if (indexToRemove !== -1) {
    if (cart[indexToRemove].quantity > 1) {
      cart[indexToRemove].quantity -= 1;
    } else {
      cart.splice(indexToRemove, 1);
    }
    updateCart();
  }
}

function removeFromCart(itemToRemove) {
  const indexToRemove = cart.findIndex(item => item.name === itemToRemove);

  if (indexToRemove !== -1) {
    if (cart[indexToRemove].quantity > 1) {
      cart[indexToRemove].quantity -= 1;
    } else {
      cart.splice(indexToRemove, 1);
    }
    updateCart();
  }
}
