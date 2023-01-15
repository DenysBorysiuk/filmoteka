import refs from './refs';
import ApiService from './api-service';
import { createMarkupModal } from './create-markup-modal';
import { onLoader, offLoader } from './loader';
import { getTrailer } from './get-trailer';
import {
  watchedArr,
  queueArr,
  addToWatched,
  addToQueue,
} from './storage-service';

const apiService = new ApiService();

refs.gallery.addEventListener('click', onModalOpen);
refs.closeModalBtn.addEventListener('click', onModalClose);

function onModalOpen(e) {
  e.preventDefault();
  refs.modalContent.innerHTML = '';
  if (e.target.nodeName === 'UL' || e.target.classList.contains('container')) {
    return;
  }

  apiService.id = e.target.closest('.card').id;
  getFilmsDetails();
  refs.modal.classList.remove('backdrop--is-hidden');
  refs.body.classList.add('no-scroll');
  refs.modalContent.addEventListener('click', onClickBtn);
  refs.backdrop.addEventListener('click', onClickBackdrop);
  window.addEventListener('keydown', onEscKeyPress);
}

function onModalClose() {
  refs.modal.classList.add('backdrop--is-hidden');
  refs.body.classList.remove('no-scroll');
  refs.modalContent.removeEventListener('click', onClickBtn);
  refs.backdrop.removeEventListener('click', onClickBackdrop);
  window.removeEventListener('keydown', onEscKeyPress);
  // refs.modalContent.innerHTML = '';
}

function onClickBackdrop(e) {
  if (e.target.classList.contains('backdrop')) {
    onModalClose();
  }
}

function onClickTrailerBackdrop(e) {
  if (e.target.classList.contains('trailer-backdrop')) {
    refs.trailerBackdrop.classList.add('trailer-backdrop--is-hidden');
    refs.trailerWrap.innerHTML = '';
  }
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    if (
      !refs.trailerBackdrop.classList.contains('trailer-backdrop--is-hidden')
    ) {
      refs.trailerBackdrop.classList.add('trailer-backdrop--is-hidden');
      refs.trailerWrap.innerHTML = '';
    } else {
      onModalClose();
    }
  }
}

function getFilmsDetails() {
  onLoader();
  apiService
    .getFilmsDetails()
    .then(resp => {
      refs.modalContent.innerHTML = createMarkupModal(resp.data);
      offLoader();
    })
    .catch(error => console.log(error));
}

function onClickBtn(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return console.log('return');
  }

  if (e.target.classList.contains('modal__watched-btn')) {
    if (watchedArr.includes(apiService.id)) {
      const current = watchedArr.indexOf(apiService.id);
      watchedArr.splice(current, 1);
      addToWatched(watchedArr);
      e.target.classList.remove('btn--current');
      e.target.textContent = 'add to watched';
      return;
    }
    watchedArr.push(apiService.id);
    addToWatched(watchedArr);
    e.target.textContent = 'in watched';
    e.target.classList.add('btn--current');
    return;
  }

  if (e.target.classList.contains('modal__queue-btn')) {
    if (queueArr.includes(apiService.id)) {
      const current = queueArr.indexOf(apiService.id);
      queueArr.splice(current, 1);
      addToQueue(queueArr);
      e.target.textContent = 'add to queue';
      e.target.classList.remove('btn--current');
      return;
    }
    queueArr.push(apiService.id);
    addToQueue(queueArr);
    e.target.textContent = 'in queue';
    e.target.classList.add('btn--current');
    return;
  }

  if (e.target.classList.contains('modal__trailer-btn')) {
    getTrailer(apiService.id);
    refs.trailerBackdrop.addEventListener('click', onClickTrailerBackdrop);
  }
}
