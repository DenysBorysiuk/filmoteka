import ApiService from './api-service';
import refs from './refs';
import { onLoader, offLoader } from './loader';

const apiService = new ApiService();

export function getTrailer(id) {
  onLoader();
  refs.trailerBackdrop.classList.remove('trailer-backdrop--is-hidden');
  apiService.id = id;
  apiService
    .getFilmsTrailer()
    .then(resp => {
      offLoader();
      if (!resp.data.results) {
        return console.log('No video');
      }
      refs.trailerWrap.innerHTML = renderingTrailer(
        resp.data.results.find(el => el.type === 'Trailer')
      );
    })
    .catch(error => console.log(error));
}

function renderingTrailer(obj) {
  return `    <iframe
      id="Youtube"
      class="trailer"
      src="https://www.youtube.com/embed/${obj.key}"
      frameborder="0"
      allow="autoplay; encrypted-media"
    ></iframe
    >;`;
}
