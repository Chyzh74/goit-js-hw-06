const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector('#ingredients');

ingredients.forEach((element) => {
    const liItem = document.createElement('li');
    liItem.textContent = `${element}`;
    liItem.classList.add('item');
    ulList.append(liItem);
})

console.log(ulList);