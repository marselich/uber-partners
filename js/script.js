window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.main-nav'),
		menuItem = document.querySelectorAll('.main-nav__item'),
		hamburger = document.querySelector('.burger-menu');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('burger-menu_active');
		menu.classList.toggle('main-nav_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('burger-menu_active');
			menu.classList.toggle('main-nav_active');
		})
	})
})