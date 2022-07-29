const MOBILE_WIDTH = '(max-width: 767px)';
const isMobileWidth = window.matchMedia(MOBILE_WIDTH);
const mainScreenLink = document.querySelector('[data-el="main-screen-link"]');

const mainScreenLinkHandler = () => {
  if (isMobileWidth.matches) {
    mainScreenLink.textContent = mainScreenLink.dataset.textShort;
  } else {
    mainScreenLink.textContent = mainScreenLink.dataset.textLong;
  }
};

mainScreenLinkHandler();

window.addEventListener('resize', mainScreenLinkHandler);
