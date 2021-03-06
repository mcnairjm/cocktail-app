var apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
var searchButton = document.getElementById("search-button");
var searchInputEl = document.getElementById("cocktail-search-id");
var cocktailSearchContainerEl = document.getElementById("input-button-parent");
var cocktailContainerEl = document.getElementById("cocktail-container");
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
var cocktailRecipes = [];
var modalContentEl = document.getElementById("modal-content");
var randomBtn = document.getElementById('random-btn')
var ingredientModal = document.getElementById('ingredient-modal')
var modalContainer = document.getElementById("modal1")
var saveHistory = document.getElementById("saved-cocktail")
var historyEl = document.getElementById("history-list-container")
var clearHistoryEl = document.getElementById("clear-button")
var historyListEl = document.getElementById("history-list");
var buttonFooterEl = document.getElementById("button-footer");
var buttonFooterParentEl = document.getElementById("modal-footer-id")
var formEl = document.getElementById("form-listener-id")
var searchFormEl = document.getElementById("search-form")

// Initializing modal
$(document).ready(function(){
  $('.modal').modal();
});

// this clears out the favorite history element upon click event
function clearHistory(event){
  event.preventDefault();
  console.log("hello");
  window.localStorage.removeItem("cocktailName");
  location.reload();
}

// this fills the favorite section by pulling from local storage
function fillFavorites() {
  var historyEl = document.getElementById("history-list-container")
  var cocktailRecipes =JSON.parse(localStorage.getItem("cocktailName")) || []
  console.log (cocktailRecipes)
  historyIndex = 0
  historyEl.innerHTML = ""
  for (let i = 0; i < cocktailRecipes.length; i++) {
    var storedName = cocktailRecipes[historyIndex].name;
    console.log(storedName)
            
    var listedCocktail = document.createElement("li");
    var historyButton = document.createElement("button");
    historyButton.setAttribute("class","btn btn-large light-blue darken-2 waves-effect z-depth-5 modal-trigger cocktail-button" )
    historyButton.setAttribute("href", "#modal1")
    historyButton.textContent = storedName;
    listedCocktail.appendChild(historyButton);
    historyEl.appendChild(listedCocktail)
    historyIndex++  
  }
 
}
// this fills favorite history upon window load
window.onload = function(){
  fillFavorites();
}
// this saves the specified cocktail to local storage
function saveCocktail(event){
  
  var cocktailRecipes =JSON.parse(localStorage.getItem("cocktailName")) || []
  var modalTitleEl = document.getElementById("modal-title");
  var savedCocktailName = modalTitleEl.textContent;
  var savedCocktailEl = {
                name: savedCocktailName
            }
  console.log(savedCocktailEl)
  
  cocktailRecipes.push(savedCocktailEl);
  console.log(cocktailRecipes)
  localStorage.setItem("cocktailName", JSON.stringify(cocktailRecipes));
  fillFavorites()
}
// this function searches data for searched coctail and displays those result on screen
function fetchCocktails(inputEl) {
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
  var apiUrl =
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + inputEl;

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var cocktailIndex = 0;
      if (data.drinks === null) {
       return
     } else {
        for (let i = 0; i < data.drinks.length; i++) {
          var cocktailOneEl = document.getElementById("cocktail-" + cocktailIndex + "-id");
          var cocktailButtonEl = document.createElement("button");
          cocktailButtonEl.textContent = data.drinks[i].strDrink;
          cocktailButtonEl.setAttribute("data-target", "modal1");
          cocktailButtonEl.setAttribute("class","btn grey darken-3 z-depth-5 btn-large modal-trigger cocktail-button");
          cocktailOneEl.appendChild(cocktailButtonEl);
          cocktailIndex++;
          cocktailButtonEl.addEventListener('click', fillModal)
        }
      }
    })
    .catch(function (err) {
      console.error(err);
    });
  searchInputEl.value = "";
}
// this pulls data information and passes them to a modal
function fillModal(event){
  
  var cocktailButton= event.target.textContent
  
  var apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + cocktailButton ;
  
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var cocktailButton = event.target.textContent;
      var pulledInstruction = data.drinks[0].strInstructions;
      var pulledThumbEl = data.drinks[0].strDrinkThumb;
      var modalTitleEl = document.getElementById("modal-title");
      var modalThumb = document.getElementById("modal-thumb");
      modalThumb.setAttribute("src", pulledThumbEl + "/preview");
      modalThumb.setAttribute("alt", "thumbnail of selected cocktail");
      var modalIngredients = document.getElementById("ingredient-modal");
      var modalInstuctions = document.getElementById("instruction-modal");
      modalIngredients.innerHTML = "";
      $('#modal1').show();
      // this for loop guards against ingrediensts that are undefined from being listed
      for (let i = 1; i < 16; i++) {
        if (
          data.drinks[0]["strMeasure" + i] !== null &&
          data.drinks[0]["strIngredient" + i] !== null
        ) {
          var listSection = document.createElement("li");
          listSection.textContent = `${data.drinks[0]["strMeasure" + i]} ${data.drinks[0]["strIngredient" +i]}`;
          modalIngredients.appendChild(listSection);
        }
      }
      modalTitleEl.textContent = cocktailButton;
      modalInstuctions.textContent = pulledInstruction
    }
    )  
}
// this function ensures that the user does not submit a blank input
function fetchEventHandler(event) {
    event.preventDefault();
    
      var cocktailEl = searchInputEl.value.trim();
      if(cocktailEl){
          fetchCocktails(cocktailEl);
          
        } else {
         return
      }
    }
// this function displays a modal with a random cocktail within upon request  
function fetchRandomCocktail() {

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
  var apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  var modalThumb = document.getElementById("modal-thumb");
  ingredientModal.textContent = "";
  randomBtn.setAttribute("data-target", "modal1");
  
  fetch(apiUrl)
  .then(function (res) {
      if (!res.ok) {
        throw Error("Error");
      }
      return res.json();
    })
    .then(function (data) {
      var cocktail = data.drinks[0].strDrink;

      var instructions = data.drinks[0].strInstructions;
      var picture = data.drinks[0].strDrinkThumb;
      console.log(data.drinks[0].strDrink);
      
      $("#modal-title").text(cocktail);
      modalThumb.setAttribute("src", picture + "/preview");
      modalThumb.setAttribute("alt", "thumbnail of selected cocktail");
      $("#instruction-modal").text(instructions);
      for (let i = 1; i < 16; i++) {
        if (
          data.drinks[0]["strMeasure" + i] !== null &&
          data.drinks[0]["strIngredient" + i] !== null
          ) {
          var listSection = document.createElement("li");
          listSection.textContent = `${
            data.drinks[0]["strMeasure" + i]
          } ${data.drinks[0]["strIngredient" + i]}`;
          ingredientModal.appendChild(listSection);
        }
      }
      $('#modal1').show();
    })
    .catch(function (err) {
      console.error(err);
    });
};

document.addEventListener("click", function (event) {
  if (!event.target.closest("#modal1")) {
    $("#modal1").hide();
  }
  return;
});
// this function allows for the user to sumbit a search to wikipedia in the header element
function fetchWiki(event) {
  event.preventDefault();
  var cocktailInputEL = document.getElementById('wiki-search')
  var wikiSearch =cocktailInputEL.value.toLowerCase().trim();
  var wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + wikiSearch
  fetch(wikiUrl)
  .then(function (res) {
    if (!res.ok) {
      throw Error("Error");
    }
    return res.json();
  })
  .then(function (data) {
    console.log(data.content_urls.desktop.page)
    var wikiSearchText = data.content_urls.desktop.page
    window.open(wikiSearchText,'_blank');
  })
  .catch(function (err) {
    console.error(err);
  });
}

$(document).ready(function(){
  $('.sidenav').sidenav();
});


randomBtn.addEventListener('click',fetchRandomCocktail);
searchFormEl.addEventListener("click",fetchEventHandler);
buttonFooterEl.addEventListener("click", saveCocktail);
clearHistoryEl.addEventListener("click", clearHistory);
historyEl.addEventListener("click", fillModal)
formEl.addEventListener("submit",fetchWiki)
