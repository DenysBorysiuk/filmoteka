import ApiService from './api-service';
import refs from './refs';
import { insertMarkup } from './rendering-markup';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const apiService = new ApiService();

refs.input.addEventListener(
  'input',
  debounce(onSearchByKeyword, DEBOUNCE_DELAY)
);

function onSearchByKeyword(e) {
  e.preventDefault();
  apiService.resetPage();
  apiService.query = refs.input.value.trim();

  apiService
    .getFilmsByKeyword()
    .then(resp => {
      if (resp.data.total_results === 0) {
        apiService.searchQuery = '';
        return console.log('Sorry, please try again.');
      }
      insertMarkup(resp.data.results);
    })
    .catch(error => console.log(error));
}
