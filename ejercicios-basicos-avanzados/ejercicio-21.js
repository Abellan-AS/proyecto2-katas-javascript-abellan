const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

let menores = "";
let mayores = "";

for (const user of users) {
  if (user.years < 18) {
    menores += user.name + " ";
  } else {
    mayores += user.name + " ";
  }
}

console.log("Usuarios menores de edad:", menores.trim());
console.log("Usuarios mayores de edad:", mayores.trim());