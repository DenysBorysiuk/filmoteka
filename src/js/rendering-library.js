import refs from './refs';
import ApiService from './api-service';
import { createMarkupLibrary } from './create-markup-library';
import { watchedArr, queueArr } from './storage-service';
import { onLoader, offLoader } from './loader';

const apiService = new ApiService();

refs.watchedLibBtn.addEventListener('click', onClickWatched);
refs.queueLibBtn.addEventListener('click', onClickQueue);

renderingWatchedFilms(watchedArr);

function onClickWatched(e) {
  renderingWatchedFilms(watchedArr);
}

function onClickQueue(e) {
  renderingQueueFilms(queueArr);
}

function renderingWatchedFilms(idsArr) {
  onLoader();
  getFilmsArr(idsArr).then(film => {
    offLoader();
    refs.galleryLib.innerHTML = createMarkupLibrary(film);
    refs.watchedLibBtn.classList.add('btn--current');
    refs.queueLibBtn.classList.remove('btn--current');
  });
}

function renderingQueueFilms(idsArr) {
  onLoader();
  getFilmsArr(idsArr).then(film => {
    offLoader();
    refs.galleryLib.innerHTML = createMarkupLibrary(film);
    refs.queueLibBtn.classList.add('btn--current');
    refs.watchedLibBtn.classList.remove('btn--current');
  });
}

async function getFilmsArr(idsArr) {
  const filmData = idsArr.map(async id => {
    apiService.id = id;
    return apiService
      .getFilmsDetails()
      .then(resp => {
        return resp.data;
      })
      .catch(error => console.log(error));
  });
  return await Promise.all(filmData);
}
