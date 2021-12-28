/*function fetchCocktails() {
    var apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
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
  
fetchCocktails()*/

var randomBtn = document.getElementById('random-btn')

function fetchRandomCocktail() {
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

  fetch(apiUrl)
  .then(function (res) {
    if(!res.ok) {
      throw Error('Error');
    }
    return res.json();
  })
  .then(function(data) {
    console.log(data.drinks)
    document.querySelector
  })
  .catch(function(err) {
    console.error(err);
  });

}

  /*function displayRandomCocktail(data) {
    var cocktailDiv = document.getElementById('cocktails')
    var cocktailName = cocktail.strDrink;
    var heading = document.createElement('h1');
    heading.innerHTML = cocktailName;
    cocktailDiv.appendChild(heading);
    var cocktailImg = document.createElement('img');
    cocktailImg.src = cocktail.strDrinkThumb;
    cocktailDiv.appendChild(cocktailImg);
    document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb

    var cocktailIngredients = document.createElement('ul');
    cocktailDiv.appendChild(cocktailIngredients);

}*/

fetchRandomCocktail();

//displayRandomCocktail();


searchButton.addEventListener("click",fetchCocktails);


