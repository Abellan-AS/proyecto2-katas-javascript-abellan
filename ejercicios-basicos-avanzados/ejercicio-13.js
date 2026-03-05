const names = [
  'Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan',
  'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc'
];

function nameFinder(list, nameToFind) {
  const index = list.indexOf(nameToFind);
  if (index !== -1) {
    return `true, posición: ${index}`; //`recordatorio backticks para interpolar`
  }
//nuestro amigo indexOf
  return false;
}

console.log(nameFinder(names,"Tony"));
console.log(nameFinder (names,"Magneto"))