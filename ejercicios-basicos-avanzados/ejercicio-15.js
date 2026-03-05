const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

for (let product of products) {
  
  // Comprobamos si el nombre del producto contiene la palabra "Camiseta"
  if (product.includes("Camiseta")) {
    // Si es true, lo mostramos por consola
    console.log(product);
  }
}