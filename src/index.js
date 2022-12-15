import ApiService from './js/apiService';
import refs from './js/refs';
import cardTpl from './templates/card.hbs';

const apiService = new ApiService();

refs.form.addEventListener('submit', onSearchByKeyword);

function onSearchByKeyword(e) {
  e.preventDefault();
  apiService.query = e.target.searchQuery.value;

  apiService
    .getFilms()
    .then(resp => {
      //   if (total_results === 0) {
      //     apiService.searchQuery = '';
      //     return console.log('Sorry, please try again.');
      //   }
      console.log(resp);
      refs.gallery.insertAdjacentHTML(
        'beforeend',
        createMarkup(resp.data.results)
      );
    })
    .catch(error => console.log(error));
}

function createMarkup(arr) {
  return arr.map(cardTpl).join('');
}
