const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';
export const watchedArr = JSON.parse(localStorage.getItem(WATCHED_KEY)) || [];
export const queueArr = JSON.parse(localStorage.getItem(QUEUE_KEY)) || [];

export function addToWatched(arr) {
  localStorage.setItem(WATCHED_KEY, JSON.stringify(arr));
}

export function addToQueue(arr) {
  localStorage.setItem(QUEUE_KEY, JSON.stringify(arr));
}
