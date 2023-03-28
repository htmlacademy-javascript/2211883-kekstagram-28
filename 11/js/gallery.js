import { showBigPicture } from './big-picture.js';
import { renderMiniatures } from './miniatures.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const miniatures = evt.target.closest('[data-miniatures-id]');
    if (!miniatures) {
      return;
    }
    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +miniatures.dataset.miniaturesId
    );
    showBigPicture(picture);
  });

  renderMiniatures(pictures, container);
};


export { renderGallery };
