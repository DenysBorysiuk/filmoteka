import axios from 'axios';

const API_KEY = 'b60c32a6f6f2663f6a35c755ff35b4cc';
const BASE_URL = 'https://api.themoviedb.org/3/search/';

export default class ApiService {
  constructor() {
    this.keyWord = '';
    this.page = 1;
  }

  async getFilms() {
    const url = `${BASE_URL}${this.keyWord}?api_key=${API_KEY}`;
    return await axios.get(url);
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.keyWord;
  }

  set query(newQuery) {
    this.keyWord = newQuery;
  }
}
