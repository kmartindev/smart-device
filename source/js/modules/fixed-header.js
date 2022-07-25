const PRELOADED_CLASS = 'is-preloaded';
const FIXED_CLASS = 'is-fixed';
const ACTIVE_CLASS = 'is-active';
const header = document.querySelector('[data-el="header"]');
const firstBlock = document.querySelector('[data-el="first-block"]');

const referenceHeights = {
  headerHeight: header.offsetHeight,
  firstBlockHeight: firstBlock.offsetHeight,
};

const headerResizeHandler = () => {
  referenceHeights.headerHeight = header.offsetHeight;
  referenceHeights.firstBlockHeight = firstBlock.offsetHeight;
};

window.addEventListener('resize', headerResizeHandler);

const headerScrollHandler = () => {
  const scrollTop = window.pageYOffset;

  if (scrollTop >= referenceHeights.headerHeight) {
    header.classList.add(FIXED_CLASS);
  } else {
    header.classList.remove(FIXED_CLASS);
    header.classList.add(PRELOADED_CLASS);
  }

  if (scrollTop >= referenceHeights.firstBlockHeight) {
    header.classList.remove(PRELOADED_CLASS);
    header.classList.add(ACTIVE_CLASS);
  } else {
    header.classList.remove(ACTIVE_CLASS);
  }
};

window.addEventListener('scroll', headerScrollHandler);
