import refs from './refs';

export function onLoader() {
  refs.loader.classList.remove('loader-backdrop--is-hidden');
}

export function offLoader() {
  refs.loader.classList.add('loader-backdrop--is-hidden');
}
