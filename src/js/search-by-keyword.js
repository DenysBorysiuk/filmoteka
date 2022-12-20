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
  console.log(e);
  apiService.query = refs.input.value.trim();
  console.log(apiService.getFilmsGeneres().then(resp => console.log(resp)));
  apiService
    .getFilmsByKeyword()
    .then(resp => {
      if (resp.data.total_results === 0) {
        apiService.searchQuery = '';
        return console.log('Sorry, please try again.');
      }
      console.log(resp);
      insertMarkup(resp.data.results);
    })
    .catch(error => console.log(error));
}
