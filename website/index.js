// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code


let cityName = prompt("Vilken stad?")
let cityFinder = prompt("Vilken stad?");
let cityFound = false;

function miniBox(cityName) {
    const cityDiv = document.createElement("div");
    cityDiv.classList.add("cityBox");
    cityDiv.textContent = cityName; 
for (let i = 0; i < cities.length; i++) {
  if (cityFinder == cities[i].name) {
      document.querySelector("h2").textContent = `${cities[i].name} (${cities[i].country})`;
      document.querySelector("title").textContent = `${cities[i].name}`;

      const cityDivs = document.querySelectorAll(".cityBox"); 
      cityDivs[i].classList.add("target");

    document.getElementById("cities").append(cityDiv);
      cityFound = true;
      break; 
  }
}
for (let i = 0; i < cities.length; i++) {
    miniBox(cities[i].name)
if (!cityFound) {
  document.querySelector("h2").textContent = `${cityFinder} finns inte i databasen.`;
  document.querySelector("title").textContent = `Not found`;
  document.querySelector("h3").textContent = null;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
}
//Längst
let maxDistance = 0;
let farthestCityIndex = -1;

for (let i = 0; i < distances.length; i++) {
  if (cityFinder === cities[distances[i].city1].name || cityFinder === cities[distances[i].city2].name) {
      let farthestCity = (cityFinder === cities[distances[i].city1].name) ? distances[i].city2 : distances[i].city1;
      if (distances[i].distance > maxDistance) {
          maxDistance = distances[i].distance;
          farthestCityIndex = farthestCity;
      }
  }
}

if (farthestCityIndex !== -1) {
  const cityDi = document.querySelectorAll(".cityBox");
  cityDi[farthestCityIndex].classList.add("furthest");
  let divied = maxDistance/10;


  cityDi[farthestCityIndex].textContent = `${cities[farthestCityIndex].name} ${divied} mil bort`;

  document.getElementById("furthest").textContent = `${cities[farthestCityIndex].name}`; 

}
//närmast
let minDistance = Infinity;
let closestCityIndex = -1;

for (let i = 0; i < distances.length; i++) {
  if (cityFinder === cities[distances[i].city1].name || cityFinder === cities[distances[i].city2].name) {
      let closestCity = (cityFinder === cities[distances[i].city1].name) ? distances[i].city2 : distances[i].city1;
      if (distances[i].distance < minDistance) {
          minDistance = distances[i].distance;
          closestCityIndex = closestCity;
      }
  }
}

if (closestCityIndex !== -1) {
  const cityDi = document.querySelectorAll(".cityBox");
  cityDi[closestCityIndex].classList.add("closest");
  let divied = minDistance/10;

  cityDi[closestCityIndex].textContent = `${cities[closestCityIndex].name} ${divied} mil bort` ;

  document.getElementById("closest").textContent = `${cities[closestCityIndex].name}`;

}
function createTable() {
  const tabell = document.querySelector("#table"); // Grid-layout
  tabell.style.width = "100%";
  const rows = cities.length;
  const columns = cities.length + 1; // En extra för header-raden
  // Header-rad
  for (let a = 0; a < columns; a++) {
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("cell");
    emptyCell.classList.add("head_column");

    if (a === 0) {
      emptyCell.textContent = ""; // Tom första cell
    } else {
      emptyCell.textContent = cities[a - 1].id; // Stadens ID
    }

    tabell.appendChild(emptyCell);
  }
createTable();