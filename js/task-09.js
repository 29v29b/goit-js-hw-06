function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color')
const span = document.querySelector('.color')
const bodyBg = document.body;

button.addEventListener('click', () => {
  let color = getRandomHexColor();
  span.textContent = color;
  bodyBg.setAttribute('style', `background-color: ${color}`)
})

// document.querySelector('.change-color').addEventListener('click', () => {
//   let color = getRandomHexColor();
//   document.querySelector('.color').textContent = color;
//   document.body.setAttribute('style', `background-color: ${color}`);
// })