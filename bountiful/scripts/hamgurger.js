const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const darkModeButton = document.querySelector('#dark-mode');

darkModeButton.addEventListener('click', () => {
	document.body.classList.toggle('darkMode');
	darkModeButton.classList.toggle('whenDark');
});