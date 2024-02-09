// Свайпер 
const swiper = new Swiper('.swiper', {
	//Параметры
	direction: 'horizontal',
	loop: true,
	slidesPerView: "auto",
	spaceBetween: 16,

	breakpoints: {
		768: {
			enabled: false,
		},
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,

		dynamicBullets: true,
		dynamicMainBullets: 9,
	}
});


const brends = document.querySelector(".brends"); // Псевдомассив брендов

const srcLogo = "./img/" // Путь для логотипов
const Logos = ["Apple.png", "Samsung.png", "HP.png", "Bosch.png", "Viewsonic.png", "Sony.png", "Acer.png", "Lenovo.png"] // Имена логотипов

// Добавляем шаблоны в контейнер
for (let j = 0; j < 2; j++) {

	for (let i = 0; i < Logos.length; i++) {
		brends.appendChild(makeElem(srcLogo + Logos[i]));
	}
}

// Кнопка Показать все
const buttonMore = document.querySelector(".button");

buttonMore.addEventListener('change', function (evt) {
	evt.preventDefault();

	buttonMore.classList.toggle("button--more");
	buttonMore.classList.toggle("button--less");
	brends.classList.toggle("brends--height");
});

// Функции
function makeElem(logoSrc) { // Функция, создающая шаблоны

	const brenElem = document.createElement("li");
	brenElem.classList.add("swiper-slide");
	brenElem.classList.add("brends__item");
	brenElem.classList.add("brends__item--style");
	brenElem.classList.add("brends__item--hidden");

	const brenLogo = document.createElement("img");
	brenLogo.classList.add("brends__logo");
	brenLogo.src = logoSrc;
	brenElem.appendChild(brenLogo);

	const brenArrow = document.querySelector(".brends__arrow").cloneNode(true);
	brenElem.appendChild(brenArrow);

	return brenElem;
}

