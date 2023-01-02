import ApiService from './api-service';
import refs from './refs';

const apiService = new ApiService();

export function getTrailer(id) {
  apiService.id = id;
  apiService
    .getFilmsTrailer()
    .then(resp => {
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
      class="trailer"
      src="https://www.youtube.com/embed/${obj.key}"
      frameborder="0"
      allow="autoplay; encrypted-media"
    ></iframe
    >;`;
}
