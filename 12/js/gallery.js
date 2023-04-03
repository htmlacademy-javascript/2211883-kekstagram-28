import { showBigPicture } from './big-picture.js';
import { renderMiniatures } from './miniatures.js';

const container = document.querySelector('.pictures');

let pictures = [];

const onContainerClick = (evt) => {
  const miniatures = evt.target.closest('[data-miniatures-id]');
  if (!miniatures) {
    return;
  }

  evt.preventDefault();
  const picture = pictures.find(
    (item) => item.id === +miniatures.dataset.miniaturesId
  );
  showBigPicture(picture);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderMiniatures(pictures, container);
  container.addEventListener('click', onContainerClick);
};


export { renderGallery };
