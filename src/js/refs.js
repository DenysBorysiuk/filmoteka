const refs = {
  input: document.querySelector('.form__input'),
  inputNotice: document.querySelector('.form__notice'),
  gallery: document.querySelector('.gallery__list'),
  card: document.querySelectorAll('.card'),
  pagination: document.querySelector('.pagination__list'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  modalContent: document.querySelector('.modal__wrap'),
  body: document.querySelector('[data-page]'),
  backdrop: document.querySelector('.backdrop'),
  galleryLib: document.querySelector('.library'),
  watchedLibBtn: document.querySelector('[data-btn-watched]'),
  queueLibBtn: document.querySelector('[data-btn-queue]'),
};

export default refs;
