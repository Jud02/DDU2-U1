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
