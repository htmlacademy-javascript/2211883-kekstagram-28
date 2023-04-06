import { resetScale } from './scale.js';
import { resetEffects } from './effect.js';

const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Неправильно заполнены хэштеги';
const COMMENT_MAX_LENGHT = 140;
const COMMENT_ERROR_TEXT = 'Комментарий не может быть длиннее 140 символов';
const SubmitButtonText = {
  SUBMITTING: 'Публикация поста...',
  IDLE: 'Опубликовать',
};

const formElement = document.querySelector('.img-upload__form');
const overlayElement = document.querySelector('.img-upload__overlay');
const bodyElement = document.querySelector('body');
const cancelButtonElement = document.querySelector('#upload-cancel');
const fileFieldElement = document.querySelector('#upload-file');
const hashtagFieldElement = document.querySelector('.text__hashtags');
const commentFieldElement = document.querySelector('.text__description');
const submitButtonElement = document.querySelector('.img-upload__submit');

let isMessageShowed = false;

const pristine = new Pristine(formElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const showModal = () => {
  overlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  formElement.reset();
  resetScale ();
  resetEffects();
  pristine.reset();
  overlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFiledFocused = () =>
  document.activeElement === hashtagFieldElement ||
  document.activeElement === commentFieldElement;

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape' && !isTextFiledFocused() && !isMessageShowed) {
    evt.preventDefault();
    hideModal();
  }
}

const setIsMessageShowed = (value) => {
  isMessageShowed = !!value;
};

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChange = () => {
  showModal();
};

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

const validateComment = (value) => value.length <= COMMENT_MAX_LENGHT;

pristine.addValidator(
  hashtagFieldElement,
  validateTags,
  TAG_ERROR_TEXT
);

pristine.addValidator(
  commentFieldElement,
  validateComment,
  COMMENT_ERROR_TEXT
);

const onFormSubmit = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = SubmitButtonText.SUBMITTING;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = SubmitButtonText.IDLE;
};

const setOnFormSubmit = (callback) => {
  formElement.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      await callback(new FormData(formElement));
      unblockSubmitButton();
    }
  });
};

fileFieldElement.addEventListener('change', onFileInputChange);
cancelButtonElement.addEventListener('click', onCancelButtonClick);
submitButtonElement.addEventListener('click', onFormSubmit);

export { setOnFormSubmit, hideModal, setIsMessageShowed };
