const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// input mediante su atributo data-function
const input$$ = document.querySelector('input[data-function="toFilterStreamers"]');

// el evento 'input' (se dispara cada vez que el usuario teclea)
input$$.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // filtro sobre el array original
    const filteredStreamers = streamers.filter(streamer => 
        streamer.name.toLowerCase().includes(searchTerm)
    );

    console.log('Resultados de búsqueda:', filteredStreamers);
});