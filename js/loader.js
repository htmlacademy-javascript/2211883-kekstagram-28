const loaderTemplateElement = document.querySelector('#messages').content.querySelector('.img-upload__message');
const bodyElement = document.querySelector('body');

const LOADER_TEXT = 'Загружаем...';

let loader;

const showLoader = () => {
  loader = loaderTemplateElement.cloneNode(true);

  loader.textContent = LOADER_TEXT;

  bodyElement.append(loader);
};

const hideLoader = () => {
  loader.remove();
};

export {showLoader, hideLoader};
