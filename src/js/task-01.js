const listCategories = document.querySelectorAll('.item') 
console.log(`Number of categories: ${listCategories.length}`);

listCategories.forEach(element => console.log(
    'Category:', element.firstElementChild.textContent,
    '\nElement:', element.lastElementChild.children.length));
