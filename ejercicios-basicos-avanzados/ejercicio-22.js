const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// Usamos una variable para saber qué fruta toca usar
let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    // Reemplazamos el nombre por la fruta actual
    foodSchedule[i].name = fruits[fruitIndex];
    // Marcamos como vegano (porque ahora es fruta)
    foodSchedule[i].isVegan = true;
    
    // Aumentamos el índice para que la próxima vez use la siguiente fruta
    fruitIndex++;
  }
}

console.log(foodSchedule);