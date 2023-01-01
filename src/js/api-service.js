import axios from 'axios';

const API_KEY = 'b60c32a6f6f2663f6a35c755ff35b4cc';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class ApiService {
  constructor() {
    this.keyWord = '';
    this.page = 1;
    this.id = '';
  }

  async getFilmsByReiting() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`;
    return await axios.get(url);
  }

  async getFilmsByKeyword() {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${this.keyWord}&page=${this.page}`;
    return await axios.get(url);
  }

  async getFilmsByGeneres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    return await axios.get(url);
  }

  async getFilmsDetails() {
    const url = `${BASE_URL}/movie/${this.id}?api_key=${API_KEY}&language=en-US`;
    return await axios.get(url);
  }

  get query() {
    return this.keyWord;
  }

  set query(newQuery) {
    this.keyWord = newQuery;
  }

  // get id() {
  //   return this.id;
  // }

  // set id(newId) {
  //   this.id = newId;
  // }
}
