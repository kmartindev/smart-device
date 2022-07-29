import imask from 'imask';

const telInput = document.querySelector('[data-el="input-tel"]');
const telInput2 = document.querySelector('[data-el="input-tel-2"]');

const telSettings = {
  mask: '+{7} (000) 000-00-00',
};

imask(telInput, telSettings);
imask(telInput2, telSettings);
