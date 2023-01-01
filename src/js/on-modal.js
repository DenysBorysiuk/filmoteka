import refs from './refs';
import ApiService from './api-service';
import { createMarkupModal } from './create-markup-modal';
import { onLoader, offLoader } from './loader';
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

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onModalClose();
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
      // watchedArr.splice(watchedArr.indexOf(apiService.id), 1);
      // e.target.classList.remove('modal__watched-btn--current');
      return console.log('єто инклуд');
    }
    watchedArr.push(apiService.id);
    addToWatched(watchedArr);
    e.target.classList.add('modal__watched-btn--current');
    return;
  }

  if (e.target.classList.contains('modal__queue-btn')) {
    if (queueArr.includes(apiService.id)) {
      return console.log('єто инклуд');
    }
    queueArr.push(apiService.id);
    addToQueue(queueArr);
    return;
  }
}
