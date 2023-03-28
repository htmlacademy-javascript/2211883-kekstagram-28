const loaderTemplate = document.querySelector('#messages').content.querySelector('.img-upload__message');
const body = document.querySelector('body');

const LOADER_TEXT = 'Загружаем...';

let loader;

const showLoader = () => {
  loader = loaderTemplate.cloneNode(true);

  loader.textContent = LOADER_TEXT;

  body.append(loader);
};

const hideLoader = () => {
  loader.remove();
};

export {showLoader, hideLoader};
