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



