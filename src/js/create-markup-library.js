import parkingPage from '../images/parking-page.jpg';
import { getGeneresName } from './get-geners-from-id';

export function createMarkupLibrary(arr) {
  // console.log(arr);
  return arr
    .map(
      ({
        id,
        genres,
        poster_path,
        original_title,
        release_date,
        vote_average,
      }) => {
        const poster = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : parkingPage;
        const genreIds = genres.map(genre => genre.id);
        return `
    <li class="card-set__item">
     <a class="card" href="" id="${id}">
      <div class="card__thumb">
       <img class="card__image" src="${poster}" alt="${original_title}" loading="lazy" />
      </div>
      <div class="card__info">
       <h2 class="card__title">${original_title}</h2>
       <div class="card__wrap">
        <p class="card__item">${getGeneresName(genreIds)} |</p>
        <p class="card__item">${release_date.slice(0, 4)}</p>
        <p class="card__vote">${vote_average.toFixed(1)}</p>
       </div>
      </div>
     </a>
    </li>`;
      }
    )
    .join('');
}
