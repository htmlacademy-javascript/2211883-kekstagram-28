import { getPostList } from './data.js';
import { renderMiniatures } from './miniatures.js';
import { renderGallery } from './gallery.js';
import './form.js';


const postList = getPostList(25);
renderMiniatures(postList);
renderGallery(postList);
