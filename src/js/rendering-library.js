import refs from './refs';
import ApiService from './api-service';
import { createMarkupLibrary } from './create-markup-library';
import { watchedArr, queueArr } from './storage-service';

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
  getFilmsArr(idsArr).then(film => {
    refs.galleryLib.innerHTML = createMarkupLibrary(film);
  });
}

function renderingQueueFilms(idsArr) {
  getFilmsArr(idsArr).then(film => {
    refs.galleryLib.innerHTML = createMarkupLibrary(film);
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
