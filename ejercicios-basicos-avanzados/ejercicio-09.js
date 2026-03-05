const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let totalSuma = 0; // base

  for (let i = 0; i < numberList.length; i++) {
    totalSuma += numberList[i]; //sumamos todos los de la lista
  }

  return totalSuma;
}
console.log(sumNumbers(numbers)); 
