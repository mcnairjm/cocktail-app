
var apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
var searchButton = document.getElementById("search-button");
var searchInputEl = document.getElementById("cocktail-search-id")
var cocktailContainerEl = document.getElementById("cocktail-container")
var cocktailZeroEl = document.getElementById("cocktail-0-id");
var cocktailOneEl = document.getElementById("cocktail-1-id");
var cocktailTwoEl = document.getElementById("cocktail-2-id");
var cocktailThreeEl = document.getElementById("cocktail-3-id");
var cocktailFourEl = document.getElementById("cocktail-4-id");
var cocktailFiveEl = document.getElementById("cocktail-5-id");
var cocktailSixEl = document.getElementById("cocktail-6-id");
var cocktailSevenEl = document.getElementById("cocktail-7-id");
var cocktailEightEl = document.getElementById("cocktail-8-id");
var cocktailNineEl = document.getElementById("cocktail-9-id");
var cocktailTenEl = document.getElementById("cocktail-10-id");
var cocktailElevenEl = document.getElementById("cocktail-11-id");
var cocktailTwelveEl = document.getElementById("cocktail-12-id");
var cocktailThirteenEl = document.getElementById("cocktail-13-id");
var cocktailFourteenEl = document.getElementById("cocktail-14-id");
var cocktailRecipes = []
var randomBtn = document.getElementById('random-btn')

function fetchCocktails(inputEl) {
  // this clears all cocktail divs for the next search
  cocktailZeroEl.textContent = "";
  cocktailOneEl.textContent = "";
  cocktailTwoEl.textContent = "";
  cocktailThreeEl.textContent = "";
  cocktailFourEl.textContent = "";
  cocktailFiveEl.textContent = "";
  cocktailSixEl.textContent = "";
  cocktailSevenEl.textContent = "";
  cocktailEightEl.textContent = "";
  cocktailNineEl.textContent = "";
  cocktailTenEl.textContent = "";
  cocktailElevenEl.textContent = "";
  cocktailTwelveEl.textContent = "";
  cocktailThirteenEl.textContent = "";
  cocktailFourteenEl.textContent = "";


  var inputEl = searchInputEl.value.toLowerCase().trim();
  // preventDefault();
  var apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + inputEl ;
  
    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        cocktailIndex=0
        if(data.drinks === null){
          alert("This drink does not exist")
        } else if(data.drinks.length === 1){
          alert("There is only one cocktail")
        }  else {
        for (let i = 0; i < data.drinks.length; i++) {
          var cocktailOneEl = document.getElementById("cocktail-"+ cocktailIndex + "-id");
          var cocktailButtonEl = document.createElement("a");
   
          cocktailButtonEl.textContent = data.drinks[i].strDrink;
          cocktailButtonEl.setAttribute("href", "#modal1")
          cocktailButtonEl.setAttribute("data-target", "modal1")
          cocktailButtonEl.setAttribute("class", "btn orange modal-trigger cocktail-button");
          console.log(cocktailButtonEl.textContent);
          cocktailOneEl.appendChild(cocktailButtonEl);
          cocktailIndex++
        }
      }
      }
      )
      .catch(function (err) {
          console.error(err);
      });
      searchInputEl.value =""
  }
function eventHandler(event) {
    event.preventDefault();
      // fiveDayIndex
      var cocktailEl = searchInputEl.value.trim();
      if(cocktailEl){
          fetchCocktails(cocktailEl);
          var cocktailInfo = {
              name: cocktailEl
          }
           var cocktailRecipes=JSON.parse(localStorage.getItem("cocktailName")) || []
          cocktailRecipes.push(cocktailInfo);
          localStorage.setItem("cocktailName", JSON.stringify(cocktailRecipes));
          searchInputEl.value = "";
          
      } else {
          alert("Please enter a Cocktail name.")
      }
  }
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
  searchButton.addEventListener("click",eventHandler);
      function displayRandomCocktail(data) {
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
  }
  //  initializing modals
  $(document).ready(function(){
    $('.modal').modal();
  });
searchButton.addEventListener("click",eventHandler);
displayRandomCocktail();
