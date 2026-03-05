const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);



const toRemove = document.querySelector('.fn-remove-me');
if (toRemove) toRemove.remove();



const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
});
printHereDiv.appendChild(ulCars);



const countryObjects = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countryObjects.forEach(country => {
    const div = document.createElement('div');
    div.classList.add('country-item');
    
    const h4 = document.createElement('h4');
    h4.textContent = country.title;
    
    const img = document.createElement('img');
    img.src = country.imgUrl;
    
    const btnRemoveSelf = document.createElement('button');
    btnRemoveSelf.textContent = 'Eliminar este elemento';
    btnRemoveSelf.addEventListener('click', () => div.remove());

    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(btnRemoveSelf);
    document.body.appendChild(div);
});

const btnRemoveLast = document.createElement('button');
btnRemoveLast.textContent = 'Eliminar el último';
btnRemoveLast.addEventListener('click', () => {
    const allDivs = document.querySelectorAll('.country-item');
    if (allDivs.length > 0) {
        allDivs[allDivs.length - 1].remove();
    }
});
document.body.appendChild(btnRemoveLast);