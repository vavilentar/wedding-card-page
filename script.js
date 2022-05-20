const mainCard = document.getElementById('mainCard');
const detailCard = document.getElementById('detailsCard');
const beeFly = document.querySelector('.bee-img');

mainCard.addEventListener('click', e => {
	e.preventDefault();
	mainCard.classList.add('card-up');
	detailCard.classList.add('details-down')
	beeFly.classList.add('bee-active')
})
