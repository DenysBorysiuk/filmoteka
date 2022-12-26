import { getGeneresName } from './get-geners-from-id';
import parkingPage from '../images/parking-page.jpg';

export function createMarkup(arr) {
  let genresName;
  return arr
    .map(({ genre_ids, poster_path, original_title, release_date }) => {
      const poster = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : parkingPage;
      return `
    <li class="card-set__item">
     <a class="card" href="">
      <div class="card__thumb">
       <img class="card__image" src="${poster}" alt="${original_title}" loading="lazy" />
      </div>
      <div class="card__info">
       <h2 class="card__title">${original_title}</h2>
       <div class="card__wrap">
        <p class="card__item">${getGeneresName(genre_ids)} |</p>
        <p class="card__item">${release_date.slice(0, 4)}</p>
       </div>
      </div>
     </a>
    </li>`;
    })
    .join('');
}
