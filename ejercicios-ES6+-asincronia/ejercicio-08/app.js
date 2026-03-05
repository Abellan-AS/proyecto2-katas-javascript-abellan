const select = document.querySelector('#character-list');
const img = document.querySelector('.character-image');

// API
fetch("https://thronesapi.com/api/v2/Characters")
    .then(res => res.json())
    .then(characters => {
        characters.forEach(c => {
            const option = document.createElement('option');
            option.value = c.imageUrl; 
            option.textContent = c.fullName;
            select.appendChild(option);
        });

        //  imagen del primer personaje por defecto
        img.src = characters[0].imageUrl;
    });

// Al cambiar el select, actualizamos la imagen con el valor seleccionado
select.addEventListener('change', (e) => {
    img.src = e.target.value;
});