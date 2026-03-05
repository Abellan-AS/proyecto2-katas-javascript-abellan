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

let totalVolume = 0;
let soundCount = 0;

for (const user of users) {
  
  //  for in para recorrer las llaves del objeto favoritesSounds
  for (const soundKey in user.favoritesSounds) {
    
    //  suma al total
    totalVolume += user.favoritesSounds[soundKey].volume;
    
    // ++ al contador para saber cuanto dividir al final
    soundCount++;
  }
}

// la media
const averageVolume = totalVolume / soundCount;

console.log(`El volumen total es: ${totalVolume}`);
console.log(`El número total de sonidos es: ${soundCount}`);
console.log(`La media d volumen es: ${averageVolume}`);