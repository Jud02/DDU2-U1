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
  const emptyCell = document.createElement ("div");
  emptyCell.classList.add("cell");
  emptyCell.classList.add("head_column");
  emptyCell.textContent = "";
  tabell.appendChild(emptyCell);

  // Header-rad
  for (let a = 0; a < columns; a++) {
    const idRow = document.createElement("div");
    idRow.classList.add("cell");
    idRow.classList.add("head_column");
    idRow.textContent = cities[a].id; // Stadens ID
    tabell.appendChild(idRow);
  }
  // Fyll i rader och celler
  for (let i = 0; i < rows; i++) {
    let namesRow = document.createElement("div");
    namesRow.textContent = cities[i].id + " - " + cities[i].name;
    namesRow.classList.add("head_row");
    namesRow.classList.add("cell");

    // Lägg till klass för varannan tredje rad
    if ((i + 1) % 2 === 0) {
      namesRow.classList.add("even_row");
    }

    tabell.appendChild(namesRow);
    for (let j = 0; j < cities.length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      let distanceValue = null; //värdet av distance
      for (let distance of distances) {
        if (
          distance.city1 === cities[i].id &&
          distance.city2 === cities[j].id
        ) {
          distanceValue = distance.distance;
          break;
        }
        if (distance.city2 === cities[i].id && distance.city1 === cities[j].id) {
          distanceValue = distance.distance;
        }
      }
      if (distanceValue !== null) {
        cell.textContent = distanceValue / 10;
      } 

      // Ändra bakgrundsfärg på jämna kolumner
      if (j % 2 === 0) { // Kontrollera kolumnnummer
        cell.style.backgroundColor = "rgb(243, 162, 209)"; // Ange valfri färg
      }

      if ((i + 1) % 2 === 0) {
        cell.classList.add("even_row");
      }

      tabell.appendChild(cell);
    }
createTable();