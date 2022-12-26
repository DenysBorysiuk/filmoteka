// import ApiService from './api-service';
// import Pagination from './pagination';
// import { insertMarkup } from './rendering-markup';
// // import refs from './refs';
// // import { onChahgePage } from './change-page';
// import { scrollOnTop } from './scroll-on-top';

// const apiService = new ApiService();
// const pagination = new Pagination();
// let page;
// searchTranding();

// export function searchTranding(page = 1) {
//   pagination.page = page;
//   apiService.page = page;
//   apiService
//     .getFilmsByReiting()
//     .then(resp => {
//       insertMarkup(resp.data.results);
//       pagination.totalPages = resp.data.total_pages;
//       pagination.renderMarkup();
//       scrollOnTop();
//       console.log(resp);
//     })
//     .catch(error => console.log(error));
// }

// refs.pagination.addEventListener('click', onClick);

// function onClick(e) {
//   onChahgePage(e, searchTranding);
// }
// function onChahgePageTranding(e) {
//   if (e.target.nodeName !== 'LI') {
//     return;
//   }

//   if (e.target.classList.contains('next-btn')) {
//     pagination.incrementPage();
//     apiService.incrementPage();
//     searchTranding();
//     return;
//   }

//   if (e.target.classList.contains('prev-btn')) {
//     pagination.decrementPage();
//     apiService.decrementPage();
//     searchTranding();
//     return;
//   }

//   if (e.target.classList.contains('next-dots')) {
//     pagination.incrementPageOnThree();
//     apiService.incrementPageOnThree();
//     searchTranding();
//     return;
//   }

//   if (e.target.classList.contains('prev-dots')) {
//     pagination.decrementPageOnThree();
//     apiService.decrementPageOnThree();
//     searchTranding();
//     return;
//   }

//   pagination.page = Number(e.target.textContent);
//   apiService.page = Number(e.target.textContent);
//   searchTranding();
// }
