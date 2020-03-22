const sumEl = 1;
let currentIt = 1;
const totalIt = 100;
const delay = 500;

const list = document.getElementById('list');

function iteration(sumEl) {
  for (let i = 1; currentIt <= totalIt; currentIt += 1, i += 1) {
    if (i > sumEl) {
      console.log('********** breath **********');
      break;
    }
    const listItem = document.createElement('li');
    listItem.textContent = currentIt;
    list.append(listItem);

  }
}

function sepLoop(sumEl) {
  let timer;
  if (currentIt < totalIt) {
    timer = setTimeout(() => {
      iteration(sumEl);
      sepLoop(sumEl);
    }, delay);
  } else {
    clearTimeout(timer);
  }
}

sepLoop(sumEl);