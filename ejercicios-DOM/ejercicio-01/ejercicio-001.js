


//querySelector para mostrar el botón con la clase .
const button = document.querySelector('.showme');
console.log(button);

// querySelector para mostrar  el h1 con el id #
const h1Pillado = document.querySelector('#pillado');
console.log(h1Pillado);

// querySelectorAll para mostrar todos los p
const allPs = document.querySelectorAll('p');
console.log(allPs);

// querySelectorAll para mostrar los elementos con la clase .
const allPokemons = document.querySelectorAll('.pokemon');
console.log(allPokemons);

// querySelectorAll para mostrar los elementos con el atributo data-function="testMe"
const allTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(allTestMe);

const thirdChar = document.querySelector('[data-function="testMe"]:nth-of-type(3)');
console.log(thirdChar);