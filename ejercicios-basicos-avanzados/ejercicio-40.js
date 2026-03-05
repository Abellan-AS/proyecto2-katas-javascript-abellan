const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// function para encontrar el índice
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i; // devolvemos la posición en cuanto la encontramos
    }
  }
  return -1; // devolvemos -1 si el texto no existe en el array
}

// function para eliminar el elemento usando la anterior
function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  // Si el índice es válido (diferente a -1), eliminamos el elemento
  if (index !== -1) {
    array.splice(index, 1);
  } else {
    console.log(`"${text}" no se encontró en el array.`);
  }

  return array;
}

// ejemplos

console.log("Pruebas de búsqueda");
console.log("Índice de Anakin:", findArrayIndex(mainCharacters, "Anakin")); // Debería ser 5
console.log("Índice de Yoda:", findArrayIndex(mainCharacters, "Yoda"));     // Debería ser -1

console.log("Pruebas de eliminación");
// ejemplo 1: eliminamos a Leia
removeItem(mainCharacters, "Leia");
console.log("Tras eliminar a Leia:", mainCharacters);

// ejemplo 2: eliminamos a Chewbacca
removeItem(mainCharacters, "Chewbacca");
console.log("Tras eliminar a Chewbacca:", mainCharacters);

// ejemplo 3: intentamos eliminar a alguien que no existe
removeItem(mainCharacters, "Palpatine");