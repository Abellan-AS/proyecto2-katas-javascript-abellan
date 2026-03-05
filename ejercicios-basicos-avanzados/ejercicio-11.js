const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {

  let totalSum = 0; //base

 
  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    
    if (typeof element === 'number') {
      totalSum += element;
    } else if (typeof element === 'string') {
      totalSum += element.length;
    }
  } //total de numeros sumados, y total de longitud de palabras sumadas

  const average = totalSum / list.length;

  return average;
}

console.log(averageWord(mixedElements))