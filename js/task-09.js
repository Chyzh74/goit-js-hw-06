const buttonEl = document.querySelector(`.change-color`);
const spanEl = document.querySelector(`.color`);
const bodyEl = document.querySelector(`body`);

buttonEl.addEventListener(`click`, onChangeBackgroundColor);

function onChangeBackgroundColor() {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}