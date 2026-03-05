const xMen = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1963 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];

function findOldestXMen(xMen) {
  //el primero es el más antiguo
  let oldest = xMen[0];

  //recorremos el array comparando años
  for (let i = 1; i < xMen.length; i++) {
    if (xMen[i].year < oldest.year) {
      // si el año actual es menor que nuestro récord, actualizamos
      oldest = xMen[i];
    }
  }

  return oldest;
}

console.log("El X-Men más antiguo es:", findOldestXMen(xMen));
