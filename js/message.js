import { setIsMessageShowed } from './form.js';

const successMessageTemplateElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplateElement = document.querySelector('#error').content.querySelector('.error');
const bodyElement = document.querySelector('body');

const errorMessageTexts = {
  TITLE: 'Ошибка загрузки файла',
  BUTTON: 'Попробовать ещё раз',
};
const successMessageTexts = {
  TITLE: 'Изображение успешно загружено',
  BUTTON: 'Круто!',
};

let currentMessage;

const createSuccessMessage = () => {
  const successMessage = successMessageTemplateElement.cloneNode(true);

  successMessage.querySelector('.success__title').textContent = successMessageTexts.TITLE;
  successMessage.querySelector('.success__button').textContent = successMessageTexts.BUTTON;

  return successMessage;
};

const createErrorMessage = () => {
  const successMessage = errorMessageTemplateElement.cloneNode(true);

  successMessage.querySelector('.error__title').textContent = errorMessageTexts.TITLE;
  successMessage.querySelector('.error__button').textContent = errorMessageTexts.BUTTON;

  return successMessage;
};

const closeMessage = (message) => {
  message.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onDocumentClick);
  setIsMessageShowed(false);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeMessage(currentMessage);
  }
}

function onDocumentClick(event) {
  if(event.target.nodeName === 'SECTION') {
    closeMessage(currentMessage);
  }
}

const showMessage = (message) => {
  currentMessage = message;
  bodyElement.append(currentMessage);
  setIsMessageShowed(true);
  currentMessage.querySelector('button').addEventListener('click', () => closeMessage(currentMessage));
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onDocumentClick, {capture: false});
};

const showSuccessMessage = () => {
  const successMessage = createSuccessMessage();
  showMessage(successMessage);
};

const showErrorMessage = () => {
  const errorMessage = createErrorMessage();
  showMessage(errorMessage);
};

export { showSuccessMessage, showErrorMessage };
