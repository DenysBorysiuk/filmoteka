import refs from './refs';
import ApiService from './api-service';
import { createMarkupModal } from './create-markup-modal';

const apiService = new ApiService();

refs.gallery.addEventListener('click', onModalOpen);
refs.closeModalBtn.addEventListener('click', onModalClose);

function onModalOpen(e) {
  e.preventDefault();
  apiService.id = e.target.closest('.card').id;
  refs.modal.classList.remove('backdrop--is-hidden');
  // refs.body.classList.toggle('no-scroll');
  getFilmsDetails();
  //  window.addEventListener('keydown', onEscKeyPress);
}

function onModalClose() {
  refs.modal.classList.add('backdrop--is-hidden');
  // refs.body.classList.toggle('no-scroll');
  refs.modalContent.innerHTML = '';
}

function getFilmsDetails() {
  apiService
    .getFilmsDetails()
    .then(resp => {
      // console.log(resp);
      refs.modalContent.innerHTML = createMarkupModal(resp.data);
    })
    .catch(error => console.log(error));
}

//  const getParentalEl = event.target.closest('.movie__card');
//  if (!getParentalEl) {
//    return;
//  }

//  const movieId = getParentalEl.dataset.movie;

//  loadIntoModal(movieId);

//  document.body.classList.add('show-modal');
//  window.addEventListener('keydown', onEscKeyPress);
