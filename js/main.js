import { renderGallery } from './gallery.js';
import { setOnFormSubmit, hideModal } from'./form.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { showLoader, hideLoader } from './loader.js';

setOnFormSubmit(async (data) => {
  try {
    showLoader();
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  } finally {
    hideLoader();
  }
});

try {
  const postList = await getData();
  renderGallery(postList);
} catch (err) {
  showAlert(err.message);
}
