const movies = [
  { title: "Inception", duration: 148 },
  { title: "The Dark Knight", duration: 152 },
  { title: "Interstellar", duration: 169 },
  { title: "Dunkirk", duration: 106 },
  { title: "The Prestige", duration: 130 },
  { title: "Memento", duration: 113 },
  { title: "Batman Begins", duration: 140 },
  { title: "The Dark Knight Rises", duration: 164 },
  { title: "Tenet", duration: 150 },
  { title: "Insomnia", duration: 118 },
];

function calculateAverageDuration(movies) {
  let totalDuration = 0;

  // sumamos la duración de cada película
  for (const movie of movies) {
    totalDuration += movie.duration;
  }

  //  calculamos y devolvemos el promedio /
  const average = totalDuration / movies.length;
  return average;
}

const average = calculateAverageDuration(movies);
console.log(`El promedio de duración es de ${average} minutos.`);
