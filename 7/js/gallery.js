import { showBigPicture } from './big-picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const miniatures = evt.target.closest('[data-miniatures-id]');
    if (!miniatures) {
      return;
    }

    const picture = pictures.find(
      (item) => item.id === +miniatures.dataset.miniaturesId
    );
    showBigPicture(picture);
  });
};

export { renderGallery };
