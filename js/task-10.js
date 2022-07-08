function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
let boxContainer = document.querySelector('#boxes')

function createBoxes(amount){
  
  for(let i = 0; i < amount; i += 1) {
  let boxItem = document.createElement('div');
  let divSize = 30 + i * 10;
  boxItem.setAttribute('style', `background-color: ${getRandomHexColor()}; width: ${divSize}px; height: ${divSize}px`)
  boxContainer.append(boxItem)
  }
};

createBtn.addEventListener('click', function()
    {
      createBoxes(document.getElementById('controls').firstElementChild.value)
    });


function destroyBoxes(){
  boxContainer.innerHTML = "";
};
destroyBtn.addEventListener('click', function(){
  destroyBoxes()
});