
const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const key in alien) {
  // Accedemos al valor usando la clave con la sintaxis de corchetes: alien[key]
  console.log(`La propiedad ${key} tiene cómo valor: ${alien[key]}`); //backticks
}