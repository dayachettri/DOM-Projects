const btnPlusEl = document.querySelector('.plus');
const btnMinusEl = document.querySelector('.minus');
const btnResetEl = document.querySelector('.reset');
const pEl = document.querySelector('h2');
let count = 0;

// Default state
const init = function () {
  count = 0;
  pEl.textContent = count;
  pEl.style.color = '#000';
};
init();

// Color fn
const color = function () {
  if (count === 0) {
    pEl.style.color = 'black';
  } else if (count > 0) {
    pEl.style.color = 'green';
  } else if (count < 0) {
    pEl.style.color = 'red';
  }
};

// Increase fn
const increase = function () {
  count++;
  pEl.textContent = count;
  color();
};

// Decreae fn
const decrease = function () {
  count--;
  pEl.textContent = count;
  color();
};

btnPlusEl.addEventListener('click', increase);
btnMinusEl.addEventListener('click', decrease);
btnResetEl.addEventListener('click', init);
