import ApiService from './api-service';
import { insertMarkup } from './rendering-markup';

const apiService = new ApiService();

(function searchTranding() {
  apiService
    .getFilmsByReiting()
    .then(resp => {
      insertMarkup(resp.data.results);
    })
    .catch(error => console.log(error));
})();
