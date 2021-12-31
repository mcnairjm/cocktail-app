var apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
var searchButton = document.getElementById("search-button");
var searchInputEl = document.getElementById("cocktail-search-id");
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
var randomBtn = document.getElementById("random-btn");
var ingredientModal = document.getElementById("ingredient-modal");

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
  var apiUrl =
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + inputEl;

  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var cocktailIndex = 0;
      if (data.drinks === null) {
        alert("This drink does not exist");
      } else if (data.drinks.length === 1) {
        // if there is only one search result after clicking submit, it will autmocatically pull up the recipe in modal.
        function fillModalOne(data) {
          var cocktailButton = data.drinks[0].strDrink;
          console.log(cocktailButton);

          var apiUrl =
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` +
            cocktailButton;

          fetch(apiUrl)
            .then(function (res) {
              return res.json();
            })
            .then(function (data) {
              var cocktailButton = data.drinks[0].strDrink;
              var pulledInstruction = data.drinks[0].strInstructions;
              var pulledThumbEl = data.drinks[0].strDrinkThumb;
              var modalTitleEl = document.getElementById("modal-title");
              var modalThumb = document.getElementById("modal-thumb");
              modalThumb.setAttribute("src", pulledThumbEl + "/preview");
              modalThumb.setAttribute("alt", "thumbnail of selected cocktail");
              var modalIngredients =
                document.getElementById("ingredient-modal");
              var modalInstuctions =
                document.getElementById("instruction-modal");

              // clear content
              modalIngredients.innerHTML = "";

              // this for loop guards against ingrediensts that are undefined from being listed
              for (let i = 1; i < 16; i++) {
                if (
                  data.drinks[0]["strMeasure" + i] !== null &&
                  data.drinks[0]["strIngredient" + i] !== null
                ) {
                  var listSection = document.createElement("li");
                  listSection.textContent = `${i}: ${
                    data.drinks[0]["strMeasure" + i]
                  } ${data.drinks[0]["strIngredient" + i]}`;
                  modalIngredients.appendChild(listSection);
                }
              }

              modalTitleEl.textContent = cocktailButton;
              modalInstuctions.textContent = pulledInstruction;

              //  initializing modals
              $(document).ready(function () {
                $("#modal1").modal().show();
              });
            });
        }
        fillModalOne(data);
      } else {
        for (let i = 0; i < data.drinks.length; i++) {
          var cocktailOneEl = document.getElementById(
            "cocktail-" + cocktailIndex + "-id"
          );
          var cocktailButtonEl = document.createElement("a");

          cocktailButtonEl.textContent = data.drinks[i].strDrink;
          cocktailButtonEl.setAttribute("href", "#modal1");
          cocktailButtonEl.setAttribute("data-target", "modal1");
          cocktailButtonEl.setAttribute(
            "class",
            "btn grey darken-3 z-depth-5 modal-trigger cocktail-button"
          );

          cocktailOneEl.appendChild(cocktailButtonEl);
          cocktailIndex++;
        }
        //  initializing modals
        $(document).ready(function () {
          $("#modal1").modal();
        });
      }
    })
    .catch(function (err) {
      // console.error(err);
    });
  searchInputEl.value = "";
}

function fillModal(event) {
  var cocktailButton = event.target.textContent;
  var apiUrl =
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` +
    cocktailButton;

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

      // clear content
      modalIngredients.innerHTML = "";

      // this for loop guards against ingrediensts that are undefined from being listed
      for (let i = 1; i < 16; i++) {
        if (
          data.drinks[0]["strMeasure" + i] !== null &&
          data.drinks[0]["strIngredient" + i] !== null
        ) {
          var listSection = document.createElement("li");
          listSection.textContent = `${i}: ${
            data.drinks[0]["strMeasure" + i]
          } ${data.drinks[0]["strIngredient" + i]}`;
          modalIngredients.appendChild(listSection);
          event.preventDefault();
          return false;
        }
      }
      modalTitleEl.textContent = cocktailButton;
      modalInstuctions.textContent = pulledInstruction;
    });
}

function fetchEventHandler(event) {
  event.preventDefault();

  var cocktailEl = searchInputEl.value.trim();
  if (cocktailEl) {
    fetchCocktails(cocktailEl);
    var cocktailInfo = {
      name: cocktailEl,
    };
    var cocktailRecipes =
      JSON.parse(localStorage.getItem("cocktailName")) || [];
    cocktailRecipes.push(cocktailInfo);
    localStorage.setItem("cocktailName", JSON.stringify(cocktailRecipes));
    searchInputEl.value = "";
  } else {
    alert("Please enter a Cocktail name.");
  }
}

randomBtn.onclick = function fetchRandomCocktail() {
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
  //var audio = document.getElementById('audio')
  var modalThumb = document.getElementById("modal-thumb");

  //audio.play();
  ingredientModal.textContent = "";

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

      $("#modal1").show();
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
          listSection.textContent = `${i}: ${
            data.drinks[0]["strMeasure" + i]
          } ${data.drinks[0]["strIngredient" + i]}`;
          ingredientModal.appendChild(listSection);
        }
      }
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

cocktailContainerEl.addEventListener("click", fillModal);
searchButton.addEventListener("click", fetchCocktails);
