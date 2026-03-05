// aleatorio
const randomId = Math.floor(Math.random() * 151) + 1;

const API_URL = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

//  elementos del DOM
const img = document.querySelector('.random-image');
const nameElement = document.querySelector('.pokemon-name');

// petición
fetch(API_URL)
    .then(response => response.json())
    .then(pokemon => {
        // la URL de la imagen del Pokémon
        const pokemonImage = pokemon.sprites.other['official-artwork'].front_default;
        // el nombre
        const pokemonName = pokemon.name.charAt(0) + pokemon.name.slice(1);
        // la imagen al HTML
        img.src = pokemonImage;
        nameElement.textContent = pokemonName;
    })
    