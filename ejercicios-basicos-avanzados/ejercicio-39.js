const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const soundCount = {}; //objeto

for (const user of users) {
  
  for (const soundName in user.favoritesSounds) //como en el 38 recorremos el objeto
   {
    
    // si el sonido ya existe en nuestro objeto soundCount, le sumamos 1
    if (soundCount[soundName]) {
      soundCount[soundName]++;
    } 
    // si no existe, empieza en 1
    else {
      soundCount[soundName] = 1;
    }
  }
}

console.log(soundCount);