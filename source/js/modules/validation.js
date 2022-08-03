import imask from 'imask';

const callbackForm = document.querySelector('[data-el="callback-form"]');
const callbackTelField = callbackForm.querySelector('[data-el="tel-field"]');
const callbackTelInput = callbackTelField.querySelector('[data-el="input-tel"]');
const feedbackForm = document.querySelector('[data-el="feedback-form"]');
const feedbackTelField = feedbackForm.querySelector('[data-el="tel-field"]');
const feedbackTelInput = feedbackTelField.querySelector('[data-el="input-tel-2"]');

const telMask = {
  mask: '+{7} (000) 000-00-00',
};

const callbackMask = imask(callbackTelInput, telMask);
const feedbackMask = imask(feedbackTelInput, telMask);

callbackForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const telLength = callbackMask.unmaskedValue.length;
  const isTelValid = telLength === 11;

  if (!isTelValid) {
    callbackTelField.classList.add('is-invalid');
  } else {
    callbackTelField.classList.remove('is-invalid');
    callbackForm.submit();
  }
});

feedbackForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const telLength = feedbackMask.unmaskedValue.length;
  const isTelValid = telLength === 11;

  if (!isTelValid) {
    feedbackTelField.classList.add('is-invalid');
  } else {
    feedbackTelField.classList.remove('is-invalid');
    feedbackForm.submit();
  }
});
