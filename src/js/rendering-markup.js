import { createMarkup } from './create-markup';
import refs from './refs';

export function insertMarkup(params) {
  refs.gallery.innerHTML = createMarkup(params);
}
