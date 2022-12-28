import refs from './refs';

export default class Pagination {
  constructor() {
    this.totalPages = 1;
    this.page = 1;
    // this.lastQuery = '';
  }

  createMarkup() {
    const totalPages = this.totalPages;
    const page = this.page;
    const firstPage = `<li class="pagination__item first-page">1</li>`;
    const lastPage = `<li class="pagination__item last-page">${totalPages}</li>`;
    const prevDots = `<li class="pagination__item prev-dots">...</li>`;
    const nextDots = `<li class="pagination__item next-dots">...</li>`;
    const prevBtn = `<li class="prev-btn pagination__item"></li>`;

    let markup = '';
    let beforePages = page - 2;
    let afterPages = page + 2;

    if (totalPages === 1) {
      return (markup = `<li class="pagination__item first-page current">1</li>`);
    }

    if (page > 1) {
      markup += prevBtn;
    }

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        markup += `<li class="pagination__item${
          i === page ? ' current' : ''
        }">${i}</li>`;
      }
    }

    if (totalPages > 6) {
      for (let i = 1; i <= 5; i++) {
        markup += `<li class="pagination__item${
          i === page ? ' current' : ''
        }">${i}</li>`;
      }
      markup = markup + nextDots + lastPage;
    }

    if (totalPages > 6 && page > totalPages - 4 && page > 3) {
      markup = prevBtn + firstPage + prevDots;
      for (let i = totalPages - 4; i <= totalPages; i++) {
        markup += `<li class="pagination__item${
          i === page ? ' current' : ''
        }">${i}</li>`;
      }
    }

    if (totalPages > 6 && page <= totalPages - 4 && page > 3) {
      markup = prevBtn + firstPage + prevDots;
      for (let i = beforePages; i <= afterPages; i++) {
        markup += `<li class="pagination__item${
          i === page ? ' current' : ''
        }">${i}</li>`;
      }
      markup = markup + nextDots + lastPage;
    }

    if (page < totalPages) {
      markup += `<li class="next-btn pagination__item"></li>`;
    }

    return markup;
  }

  renderMarkup() {
    refs.pagination.innerHTML = this.createMarkup();
  }

  removeMarkup() {
    refs.pagination.innerHTML = '';
  }

  // incrementPage() {
  //   this.page += 1;
  // }

  // decrementPage() {
  //   this.page -= 1;
  // }

  // incrementPageOnThree() {
  //   this.page += 3;
  // }

  // decrementPageOnThree() {
  //   this.page -= 3;
  // }

  // resetPage() {
  //   this.page = 1;
  // }
}
