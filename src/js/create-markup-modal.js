import parkingPage from '../images/parking-page.jpg';
import { watchedArr, queueArr } from './storage-service';

export function createMarkupModal({
  original_title,
  poster_path,
  vote_count,
  vote_average,
  genres,
  popularity,
  overview,
  id,
}) {
  // if (!data) {
  //   refs.modalRef.innerHTML =
  //     '<div class="modal__empty">Sorry, info is unavailable</div>';
  //   status = false;
  //   return;
  // }
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : parkingPage;
  const watchedText = watchedArr.includes(id.toString())
    ? 'in watched'
    : 'add to watched';
  const watchedCl = watchedArr.includes(id.toString()) ? 'btn--current' : '';
  const queueText = queueArr.includes(id.toString())
    ? 'in queue'
    : 'add to queue';
  const queueCl = queueArr.includes(id.toString()) ? 'btn--current' : '';

  return ` 
      <div class="modal__thumb">
        <img src="${poster}" alt="" />
      </div>
      <div class="modal__content-wrap"> 
      <h2 class="modal__title">${original_title}</h2>
      <div class="modal__film-info">
        <ul class="modal__list">
          <li class="modal__item-title">Vote&nbsp;/&nbsp;Votes</li>
          <li class="modal__item-title">Popularity</li>
          <li class="modal__item-title">Original&nbsp;Title</li>
          <li class="modal__item-title">Genre</li>
        </ul>
        <ul class="modal__list">
          <li class="modal__item-value">${vote_average} / ${vote_count}</li>
          <li class="modal__item-value">${popularity}</li>
          <li class="modal__item-value">${original_title}</li>
          <li class="modal__item-value">${genres[0].name}</li>
        </ul>
    </div>
    <h3 class="modal__subtitle">about</h3>
    <p class="modal__text">${overview}</p>
    <div class="modal__btn-wrap">
      <button class="btn modal__watched-btn ${watchedCl}" type="button">${watchedText}</button>
      <button class="btn modal__queue-btn ${queueCl}" type="button">${queueText}</button>
    </div>
  </div>`;
}
