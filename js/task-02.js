const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(function(ingredient){
let listItem = document.createElement('li');
listItem.classList.add('item');
listItem.textContent = ingredient;

ingredientsList.append(listItem)
})




