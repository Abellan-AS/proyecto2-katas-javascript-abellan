const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categories = [];

// nos encanta el for of
for (const movie of movies) {

  for (const category of movie.categories) {
    // si no está ya en nuestro array, la añadimos
    if (!categories.includes(category)) {
      categories.push(category);
    }
  }
}

console.log(categories);