const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



// const imageList = document.querySelector('.gallery')

// images.forEach(function(image) {
// const imageItem = document.createElement('li');
// imageItem.classList.add('gallery-item')

// const imageEl = document.createElement('img')

// imageEl.src = image.url
// imageEl.alt = image.alt
// imageEl.width = 300

// imageItem.append(imageEl)

// imageList.setAttribute('style', 'list-style-type:none; display: flex; flex-direction: row; justify-content: space-between');
// imageList.append(imageItem)
// })

// console.log(imageList)


const imageList = document.querySelector('.gallery')
const galleryMarkup = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}" width = 300></li>`)
  .join("");

imageList.setAttribute('style', 'list-style-type: none; display: flex; flex-direction: row; justify-content: space-between');
imageList.insertAdjacentHTML("afterbegin", galleryMarkup);

console.log(imageList)
