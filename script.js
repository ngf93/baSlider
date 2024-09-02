

const container = document.querySelectorAll('.ba-slider');
container.forEach((cont) => {
	cont.querySelector('.slider').addEventListener('input', (e) => {
		cont.style.setProperty('--position', `${e.target.value}%`);
	  })
  })


const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});