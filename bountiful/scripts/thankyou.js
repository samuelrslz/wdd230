let url = new URL(window.location);
let params = url.searchParams;

// Remove this when you are done inspecting parameters in the console
for (const p of params) {
  console.log(p);
}

document.querySelector("#yourname").textContent = params.get("fname");
document.querySelector("#youremail").textContent = params.get("email");
document.querySelector("#yourphone").textContent = params.get("phone");
document.querySelector("#yourfruit1").textContent = params.get("fruitSelect");
document.querySelector("#yourfruit2").textContent = params.get("fruit2Select");
document.querySelector("#yourfruit3").textContent = params.get("fruit3Select");
document.querySelector("#yourinstructions").textContent = params.get(
  "specialInstructions"
);
document.querySelector("#yourtime").textContent = new Date();

const carbs = document.querySelector("#carbs");
const calories = document.querySelector("#calories");
const protein = document.querySelector("#protein");
const fat = document.querySelector("#fat");
const sugar = document.querySelector("#sugar");

const fruit1 = params.get("fruitSelect");
const fruit2 = params.get("fruit2Select");
const fruit3 = params.get("fruit3Select");

var carbs1;
var carbs2;
var carbs3;

var protein1;
var protein2;
var protein3;

var fat1;
var fat2;
var fat3;

var sugar1;
var sugar2;
var sugar3;

var calories1;
var calories2;
var calories3;

function fetchFruitsData() {
  // Assuming fruits.json is located in the same directory
  fetch("data/fruits.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((fruit) => {
        if (fruit.name == fruit1) {
          carbs1 = fruit.nutritions.carbohydrates;
          protein1 = fruit.nutritions.protein;
          fat1 = fruit.nutritions.fat;
          sugar1 = fruit.nutritions.sugar;
          calories1 = fruit.nutritions.calories;
        }
        if (fruit.name == fruit2) {
          carbs2 = fruit.nutritions.carbohydrates;
          protein2 = fruit.nutritions.protein;
          fat2 = fruit.nutritions.fat;
          sugar2 = fruit.nutritions.sugar;
          calories2 = fruit.nutritions.calories;
        }
        if (fruit.name == fruit3) {
          carbs3 = fruit.nutritions.carbohydrates;
          protein3 = fruit.nutritions.protein;
          fat3 = fruit.nutritions.fat;
          sugar3 = fruit.nutritions.sugar;
          calories3 = fruit.nutritions.calories;
        }
      });
      carbs.textContent = `${(carbs1 + carbs2 + carbs3).toFixed(2)} g`;
      protein.textContent = `${(protein1 + protein2 + protein3).toFixed(2)} g`;
      fat.textContent = `${(fat1 + fat2 + fat3).toFixed(2)} g`;
      sugar.textContent = `${(sugar1 + sugar2 + sugar3).toFixed(2)} g`;
      calories.textContent = `${(calories1 + calories2 + calories3).toFixed()} g`;
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching fruits data:", error);
    });
}

// Call the function to populate select options when the page loads
fetchFruitsData();
