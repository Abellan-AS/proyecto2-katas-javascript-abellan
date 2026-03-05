const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

const toysWithoutCats = []; //nueva array para meter los válidos

for (const toy of toys) {
  
  if (!toy.name.includes('gato')) { // (!) negación
    
    toysWithoutCats.push(toy); //si no incluye gato, se añade a la nueva array
  }
}

console.log(toysWithoutCats);