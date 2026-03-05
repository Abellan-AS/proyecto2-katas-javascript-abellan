const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longestWord = stringList[0]; //base

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longestWord.length) {
      longestWord = stringList[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord(avengers)) //creamos la funcion findLongestWord, fijamos la primera palabra como base, en el bucle comprueba si la siguiente palabra es mayor a [0], y con > nos aseguramos de que se quede la primera.