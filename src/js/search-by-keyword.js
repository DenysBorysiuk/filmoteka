import ApiService from './api-service';
import Pagination from './pagination';
import refs from './refs';
import { insertMarkup } from './rendering-markup';
import debounce from 'lodash.debounce';
import { onChahgePage } from './change-page';
import { scrollOnTop } from './scroll-on-top';

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

  apiService
    .getFilmsByKeyword()
    .then(resp => {
      if (resp.data.total_results === 0) {
        apiService.searchQuery = '';
        return console.log('Sorry, please try again.');
      }
      insertMarkup(resp.data.results);
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
  apiService
    .getFilmsByReiting()
    .then(resp => {
      insertMarkup(resp.data.results);
      pagination.totalPages = resp.data.total_pages;
      pagination.renderMarkup();
      scrollOnTop();
      refs.pagination.addEventListener('click', onTrandingPgn);
    })
    .catch(error => console.log(error));
}

function onTrandingPgn(e) {
  onChahgePage(e, searchTranding);
}

function onKeywordPgn(e) {
  onChahgePage(e, onSearchByKeyword);
}
