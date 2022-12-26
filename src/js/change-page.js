let page = 1;

export function onChahgePage(e, callback) {
  if (e.target.nodeName !== 'LI') {
    return;
  }

  if (e.target.classList.contains('next-btn')) {
    page += 1;
    callback(page);
    return;
  }

  if (e.target.classList.contains('prev-btn')) {
    page -= 1;
    callback(page);
    return;
  }

  if (e.target.classList.contains('next-dots')) {
    page += 3;
    callback(page);
    return;
  }

  if (e.target.classList.contains('prev-dots')) {
    page -= 3;
    callback(page);
    return;
  }

  page = Number(e.target.textContent);
  callback(page);
}
