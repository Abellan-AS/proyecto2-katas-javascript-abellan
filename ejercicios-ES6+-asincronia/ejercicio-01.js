const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020};

// creamos las variables
const { title, gender, year } = game;

console.log(title);  
console.log(gender); 
console.log(year);  



const fruits = ['Banana', 'Strawberry', 'Orange'];

// creamos las variables fruit1, fruit2 y fruit3
const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1); 
console.log(fruit2); 
console.log(fruit3); 



const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'} 
};

// igualamos las variables al resultado de la función
const { name, race } = animalFunction();

console.log(name); 
console.log(race); 



const car = {nombre: 'Mazda 6', itv: [2015, 2011, 2020] };

// Paso 1: Extraemos name e itv del objeto car
const { nombre, itv } = car;

// Paso 2: Extraemos los años del array itv
const [year1, year2, year3] = itv;

// Comprobación
console.log(nombre);  
console.log(itv);   
console.log(year1); 
console.log(year2); 
console.log(year3); 
