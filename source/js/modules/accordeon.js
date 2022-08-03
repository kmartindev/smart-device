const NOJS_CLASS = 'nojs';
const MOBILE_WIDTH = '(max-width: 767px)';
const isMobileWidth = window.matchMedia(MOBILE_WIDTH);
const accordeon = document.querySelector('[data-el="accordeon"]');
const accordeonTitles = accordeon.querySelectorAll('[data-el="accordeon-title"]');
const accordeonButtons = accordeon.querySelectorAll('[data-el="accordeon-title"] button');
const accordeonDescrs = accordeon.querySelectorAll('[data-el="accordeon-description"]');
const accordeonLinks = accordeon.querySelectorAll('[data-el="accordeon-description"] a');

document.body.classList.remove(NOJS_CLASS);

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener('click', function () {
    const activeTitle = accordeon.querySelector('.is-active');
    const activeDescr = accordeon.querySelector('.is-visible');
    const clickedDescr = accordeonTitle.parentElement.querySelector('[data-el="accordeon-description"]');
    const clickedDescrLinks = clickedDescr.querySelectorAll('a');

    accordeonLinks.forEach((accordeonLink) => {
      accordeonLink.setAttribute('tabindex', -1);
    });

    clickedDescrLinks.forEach((clickedDescrLink) => {
      clickedDescrLink.removeAttribute('tabindex');
    });

    if (activeTitle) {
      activeTitle.classList.remove('is-active');
    }

    accordeonTitle.classList.toggle('is-active');

    if (activeDescr) {
      activeDescr.classList.remove('is-visible');
      activeDescr.style.maxHeight = null;
    }

    clickedDescr.classList.toggle('is-visible');
    clickedDescr.style.maxHeight = clickedDescr.scrollHeight + 'px';
  });
});

const accordeonFocusHandler = () => {
  if (isMobileWidth.matches) {
    accordeonButtons.forEach((accordeonButton) => {
      accordeonButton.removeAttribute('tabindex');
    });

    accordeonLinks.forEach((accordeonLink) => {
      accordeonLink.setAttribute('tabindex', -1);
    });
  } else {
    accordeonTitles.forEach((accordeonTitle) => {
      accordeonTitle.classList.remove('is-active');
    });

    accordeonDescrs.forEach((accordeonDescr) => {
      accordeonDescr.classList.remove('is-visible');
      accordeonDescr.style.maxHeight = null;
    });

    accordeonButtons.forEach((accordeonButton) => {
      accordeonButton.setAttribute('tabindex', -1);
    });

    accordeonLinks.forEach((accordeonLink) => {
      accordeonLink.removeAttribute('tabindex');
    });
  }
};

accordeonFocusHandler();

window.addEventListener('resize', accordeonFocusHandler);
