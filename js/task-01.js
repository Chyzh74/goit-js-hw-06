const categoriesList = document.querySelector('#categories');
const itemsList = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${itemsList.length}`);

itemsList.forEach(item => {
const categoryName = item.querySelector('h2').textContent;
const itemsCount = item.querySelectorAll('ul > li').length;
    console.log(`Category: ${categoryName}
Elements: ${itemsCount}`);
});