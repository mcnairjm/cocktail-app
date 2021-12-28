var searchButton = document.getElementById("search-button");
var searchInputEl = document.getElementById("cocktail-search-id")
var cocktailContainerEl = document.getElementById("cocktail-container")
var cocktailZeroEl = document.getElementById("cocktail-0-id");
var cocktailOneEl = document.getElementById("cocktail-1-id");
var cocktailTwoEl = document.getElementById("cocktail-2-id");
var cocktailThreeEl = document.getElementById("cocktail-3-id");
var cocktailFourEl = document.getElementById("cocktail-4-id");

function fetchCocktails(event) {
  cocktailZeroEl.textContent = "";
  cocktailOneEl.textContent = "";
  cocktailTwoEl.textContent = "";
  cocktailThreeEl.textContent = "";
  cocktailFourEl.textContent = "";


  var inputEl = searchInputEl.value.toLowerCase().trim();
  event.preventDefault();
  var apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + inputEl ;
  
    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data)
        console.log(data.drinks)
        cocktailIndex=0
        for (let i = 0; i < data.drinks.length; i++) {
          var cocktailOneEl = document.getElementById("cocktail-"+ cocktailIndex + "-id");
          var cocktailButtonEl = document.createElement("button");
          cocktailButtonEl.textContent = data.drinks[i].strDrink;
          cocktailButtonEl.setAttribute("data-target", "modal" + cocktailIndex)
          cocktailButtonEl.setAttribute("class", "button-batch");
          console.log(cocktailButtonEl.textContent);
          cocktailOneEl.appendChild(cocktailButtonEl);
          cocktailIndex++
        }
      })
      .catch(function (err) {
        console.error(err);
      });
      searchInputEl.value =""
}

searchButton.addEventListener("click",fetchCocktails);


