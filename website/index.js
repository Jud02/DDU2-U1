// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code


let cityName = prompt("Vilken stad?")
let cityFinder = prompt("Vilken stad?");

function miniBox(cityName) {
    const cityDiv = document.createElement("div");
    cityDiv.classList.add("cityBox");
    cityDiv.textContent = cityName; 

    document.getElementById("cities").append(cityDiv);
}
for (let i = 0; i < cities.length; i++) {
    miniBox(cities[i].name)
}
