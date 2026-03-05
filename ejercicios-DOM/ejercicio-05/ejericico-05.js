const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const container = document.querySelector('#album-container');

const ulElement = document.createElement('ul');


albums.forEach(album => {
    const liElement = document.createElement('li');
    liElement.textContent = album;
    
   
    liElement.innerHTML = `<span>🤘</span> ${album}`;
    
   
    ulElement.appendChild(liElement);
});


container.appendChild(ulElement);