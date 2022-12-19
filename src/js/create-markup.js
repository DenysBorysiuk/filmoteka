import cardTpl from '../templates/card.hbs';

export function createMarkup(arr) {
  return arr.map(cardTpl).join('');
}
