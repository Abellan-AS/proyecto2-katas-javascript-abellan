const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
];

// filtrado de videojuegos que pertenecen al género 'RPG' usando .filter()
const rpgGames = videogames.filter(game => 
    game.genders.find(gender => gender === 'RPG')
);

// calculo de la media de puntuación (score) usando .reduce()
// El acumulador (acc) suma los scores y finalmente dividimos por la longitud del array filtrado
const averageScore = rpgGames.reduce((acc, game) => acc + game.score, 0) / rpgGames.length;

// Salida por consola para verificación
console.log("Videojuegos RPG encontrados:", rpgGames);
console.log(`La puntuación media de los RPG es: ${averageScore.toFixed(2)}`);