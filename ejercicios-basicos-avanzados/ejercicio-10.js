
const numeros = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let suma = 0; //base

  for (let i = 0; i < numberList.length; i++) {
    suma += numberList[i]; //como antes sumamos todos los de la lista
  }
  const result = suma / numberList.length; //division de la suma entre la cantidad de elementos

  return result;
}
console.log(average(numeros))