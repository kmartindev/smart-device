const NOJS_CLASS = 'nojs';
const accordeon = document.querySelector('[data-el="accordeon"]');
const accordeonTitles = accordeon.querySelectorAll('[data-el="accordeon-title"]');

document.body.classList.remove(NOJS_CLASS);

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener('click', function () {
    const activeTitle = accordeon.querySelector('.is-active');
    const activeDescr = accordeon.querySelector('.is-visible');
    const clickedDescr = accordeonTitle.parentElement.querySelector('[data-el="accordeon-description"]');

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
