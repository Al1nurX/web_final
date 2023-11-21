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

const cart = [];

function addToCart(item, event) {
  cart.push(item);
  updateCart();
  event.stopPropagation(); 
}
function removeFromCart(itemToRemove) {
  const indexToRemove = cart.findIndex(item => item.name === itemToRemove.name);

  if (indexToRemove !== -1) {
      cart.splice(indexToRemove, 1);
      updateCart();
  }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            
        `;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
}м


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


