const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(list) {
  // Convertimos el array a un Set (esto elimina duplicados automáticamente)
  // usamos  spread (...) para convertir el Set de nuevo a un Array
  return [...new Set(list)];
}

console.log(removeDuplicates(duplicates));
