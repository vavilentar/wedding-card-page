const mainCard = document.getElementById('mainCard');
const detailCard = document.getElementById('detailsCard');

mainCard.addEventListener('click', e => {
	e.preventDefault();
	mainCard.classList.add('card-up');
	detailCard.classList.add('details-down')
})
