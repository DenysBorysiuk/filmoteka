import genresList from './geners-list';

export function getGeneresName(genresIds) {
  newArr = [];
  genresIds.map(genreId => {
    newArr.push(genresList.find(genre => genre.id === genreId));
  });

  return newArr
    .map(genre => genre.name)
    .splice(0, 2)
    .join(', ');
}
