const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  // Guardamos el valor del primer índice para no perderlo
  const temp = array[index1];
  
  // Ponemos el valor del segundo índice en el lugar del primero
  array[index1] = array[index2];
  
  // Ponemos el valor guardado (el original del primero) en el lugar del segundo
  array[index2] = temp;
  
  return array;
}

// importante hacer constante de result con el swap para cambiarlo 
console.log("Array original:", fantasticFour);
const result = swap(fantasticFour, 0, 1);
console.log("Array intercambiado:", result);