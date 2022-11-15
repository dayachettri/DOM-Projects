const btnEl = document.getElementById('click');
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('span');

const init = function () {
  spanEl.textContent = '#F1F5F8';
  bodyEl.style.background = '#f1f5f8';
};
init();

const hexColorChanger = function () {
  let hexColorCode = '#';

  for (let i = 1; i <= 6; i++) {
    const random = Math.trunc(Math.random() * hexValues.length - 1) + 1;
    hexColorCode += hexValues[random];
  }
  bodyEl.style.background = hexColorCode;
  spanEl.textContent = hexColorCode;
};

btnEl.addEventListener('click', hexColorChanger);
