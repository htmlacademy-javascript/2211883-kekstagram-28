import { getPostList } from './data.js';

getPostList(25);

import { renderMiniatures} from './miniatures.js';

renderMiniatures(getPostList());
