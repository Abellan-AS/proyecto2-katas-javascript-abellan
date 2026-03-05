const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  // si la propiedad existe en el objeto
  if (capitals[country]) {
    return `La capital de ${country} es ${capitals[country]}.`;
  } else {
    // si no está 
    return `No hay información de la capital de "${country}".`;
  }
}

console.log(getCapital("Spain"));
console.log(getCapital("Estados Unidos"));
