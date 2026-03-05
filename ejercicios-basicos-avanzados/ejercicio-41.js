function rollDice(faces) {
  // Generamos el número aleatorio
  const result = Math.floor(Math.random() * faces) + 1;
  
  return result;
}

//cambiando  el numero de caras
console.log('Tirada de un dado de 6 caras:', rollDice(6));
console.log('Tirada de un dado de 20 caras (D20):', rollDice(20));
console.log('Tirada de una moneda (2 caras):', rollDice(2));