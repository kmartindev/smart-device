const SPEED = 0.05;
const cards = document.querySelectorAll('[data-el="card"]');

const onCardMove = (evt) => {
  const cardBox = evt.currentTarget.querySelector('[data-el="card-box"]');

  const a = -(evt.offsetY - cardBox.offsetHeight / 2) * SPEED;
  const b = (evt.offsetX - cardBox.offsetWidth / 2) * SPEED;

  cardBox.setAttribute('style', `transform: rotateX(${a}deg) rotateY(${b}deg)`);
};

const onCardOut = (evt) => {
  const cardBox = evt.currentTarget.querySelector('[data-el="card-box"]');

  cardBox.removeAttribute('style');
};

cards.forEach((card) => {
  card.addEventListener('mousemove', onCardMove);
  card.addEventListener('mouseout', onCardOut);
});
