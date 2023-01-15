import ApiService from './api-service';
import Pagination from './pagination';
import refs from './refs';
import { createMarkup } from './create-markup-gallery';
import debounce from 'lodash.debounce';
import { onChahgePage } from './change-page';
import { scrollOnTop } from './scroll-on-top';
import { onLoader, offLoader } from './loader';

const DEBOUNCE_DELAY = 300;
const apiService = new ApiService();
const pagination = new Pagination();
let page = 1;

searchTranding(1);

refs.input.addEventListener('input', debounce(onInputKeyword, DEBOUNCE_DELAY));

function onInputKeyword() {
  if (!refs.input.value) {
    apiService.searchQuery = '';
    searchTranding(1);
    return console.log('Sorry, please try again.');
  }
  apiService.query = refs.input.value.trim();
  onSearchByKeyword(page);
}

function onSearchByKeyword(page) {
  refs.pagination.removeEventListener('click', onTrandingPgn);
  pagination.page = page;
  apiService.page = page;
  onLoader();

  apiService
    .getFilmsByKeyword()
    .then(resp => {
      offLoader();
      if (!resp.data.total_results) {
        apiService.searchQuery = '';
        refs.gallery.innerHTML = '';
        pagination.removeMarkup();
        setTimeout(() => {
          refs.inputNotice.classList.add('form__notice--hidden');
        }, 3000);
        refs.inputNotice.classList.remove('form__notice--hidden');
        refs.inputNotice.textContent =
          'Search result not successful. Enter the correct movie name';
        return;
      }
      refs.gallery.innerHTML = createMarkup(resp.data.results);
      pagination.totalPages = resp.data.total_pages;
      pagination.renderMarkup();
      scrollOnTop();
      refs.pagination.addEventListener('click', onKeywordPgn);
    })
    .catch(error => console.log(error));
}

function searchTranding(page) {
  refs.pagination.removeEventListener('click', onKeywordPgn);
  pagination.page = page;
  apiService.page = page;
  onLoader();
  apiService
    .getFilmsByReiting()
    .then(resp => {
      refs.gallery.innerHTML = createMarkup(resp.data.results);
      pagination.totalPages = resp.data.total_pages;
      pagination.renderMarkup();
      scrollOnTop();
      refs.pagination.addEventListener('click', onTrandingPgn);
      offLoader();
    })
    .catch(error => console.log(error));
}

function onTrandingPgn(e) {
  onChahgePage(e, searchTranding);
}

function onKeywordPgn(e) {
  onChahgePage(e, onSearchByKeyword);
}
