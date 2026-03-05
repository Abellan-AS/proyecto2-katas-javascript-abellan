const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actorsList) {
  // año actual local time
  const currentYear = new Date().getFullYear();

  // nuevo array con el nombre y la edad calculada
  return actorsList.map(actor => {
    return {
      name: actor.name,
      age: currentYear - actor.born
    };
  });
}

const actorsWithAges = calculateActorsAges(actors);
console.log(actorsWithAges);