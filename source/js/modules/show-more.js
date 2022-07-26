const aboutContent = document.querySelector('[data-el="about-content"]');
const aboutButton = document.querySelector('[data-el="about-btn"]');

const onAboutButtonClick = () => {
  aboutContent.classList.toggle('is-open');

  if (aboutContent.classList.contains('is-open')) {
    aboutButton.textContent = 'Свернуть';
  } else {
    aboutButton.textContent = 'Подробнее';
  }
};

aboutButton.addEventListener('click', onAboutButtonClick);
