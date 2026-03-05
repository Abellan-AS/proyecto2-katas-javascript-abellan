const pointsList = [32, 54, 21, 64, 75, 43];

// Creamos la copia
const pointsListCopy = [...pointsList];

console.log(pointsListCopy); 



const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

// Creamos la copia, aqui con llaves que es objeto
const toyCopy = { ...toy };

console.log(toyCopy);



const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

// Unimos ambos
const mixPoints = [...pointsList, ...pointsList2];

console.log(mixPoints); 



const juguete = {nombre: 'Bus laiyiar', fecha: '20-30-1995', color: 'multicolor'};
const jugueteUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

// Unimos
const mixJuguete = { ...juguete, ...jugueteUpdate };

console.log(mixJuguete);



const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

// copiamos del índice 0 al 2 (no incluido) y del 3 en adelante
const colorsWithoutYellow = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(colorsWithoutYellow); 
console.log(colors);