// cosas importantes aqui
// createElement = lo obvio
// appendChild = básico para colocar donde va el elemento
// los loops para crear varios con for
// creamos arrays y borramos en base a .forEach
// insertBefore para colocar antes

const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

const divWithP = document.createElement('div');
const pInsideDiv = document.createElement('p');
divWithP.appendChild(pInsideDiv);
document.body.appendChild(divWithP);

const divWithSixP = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const p = document.createElement('p');
    divWithSixP.appendChild(p);
}
document.body.appendChild(divWithSixP);

const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

const h2ToInsert = document.querySelector('h2.fn-insert-here');
h2ToInsert.textContent = 'Wubba Lubba dub dub';

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
});
document.body.appendChild(ul);

const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(el => el.remove());

const midP = document.createElement('p');
midP.textContent = 'Voy en medio!';
const allDivs = document.querySelectorAll('div');
document.body.insertBefore(midP, allDivs[1]);

const insertHereDivs = document.querySelectorAll('div.fn-insert-here');
insertHereDivs.forEach(div => {
    const pInside = document.createElement('p');
    pInside.textContent = 'Voy dentro!';
    div.appendChild(pInside);
});