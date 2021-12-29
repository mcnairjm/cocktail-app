
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
var modalContentEl = document.getElementById("modal-content");
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
  //  initializing modals
 $(document).ready(function(){
  $('.modal').modal();
});  
      }
      }
      )
      .catch(function (err) {
          console.error(err);
      });
      searchInputEl.value =""
  }
function fillModal(event){
  console.log(event.target.textContent)
  var cocktailButton= event.target.textContent
  
  var apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + cocktailButton ;
  
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data)
  
  var cocktailButton = event.target.textContent
  var pulledInstruction = data.drinks[0].strInstructions
  var pulledThumbEl = data.drinks[0].strDrinkThumb;
  console.log(pulledThumbEl);
  console.log(pulledInstruction)
  
  console.log(cocktailButton);
  var modalTitleEl = document.getElementById("modal-title");
  var modalThumb = document.getElementById("modal-thumb");
  modalThumb.setAttribute("src",pulledThumbEl)
  modalThumb.setAttribute("alt","thumbnail of selected cocktail")
  var modalIngredients = document.getElementById("ingredient-modal");
  var modalInstuctions = document.getElementById("instruction-modal");
  
  var listedIngredientOne = document.createElement("li");
  var listedIngredientTwo = document.createElement("li");
  var listedIngredientThree = document.createElement("li");
  var listedIngredientFour = document.createElement("li");
  var listedIngredientFive = document.createElement("li");
  var listedIngredientSix = document.createElement("li");
  var listedIngredientSeven = document.createElement("li");
  var listedIngredientEight = document.createElement("li");
  var listedIngredientNine = document.createElement("li");
  var listedIngredientTen = document.createElement("li");
  var listedIngredientEleven = document.createElement("li");
  var listedIngredientTwelve = document.createElement("li");
  var listedIngredientThirteen = document.createElement("li");
  var listedIngredientFourteen = document.createElement("li");
  var listedIngredientFifteen = document.createElement("li");

  
  listedIngredientOne.textContent ="1: "+ data.drinks[0].strMeasure1 +" " + data.drinks[0].strIngredient1;
  listedIngredientTwo.textContent ="2: "+ data.drinks[0].strMeasure2 +" " + data.drinks[0].strIngredient2;
  listedIngredientThree.textContent ="3: "+ data.drinks[0].strMeasure3 +" " + data.drinks[0].strIngredient3;
  listedIngredientFour.textContent ="4: "+ data.drinks[0].strMeasure4 +" " + data.drinks[0].strIngredient4;
  listedIngredientFive.textContent ="5: "+ data.drinks[0].strMeasure5 +" " + data.drinks[0].strIngredient5;
  listedIngredientSix.textContent ="6: "+ data.drinks[0].strMeasure6 +" " + data.drinks[0].strIngredient6;
  listedIngredientSeven.textContent ="7: "+ data.drinks[0].strMeasure7 +" " + data.drinks[0].strIngredient7;
  listedIngredientEight.textContent ="8: "+ data.drinks[0].strMeasure8 +" " + data.drinks[0].strIngredient8;
  listedIngredientNine.textContent ="9: "+ data.drinks[0].strMeasure9 +" " + data.drinks[0].strIngredient9;
  listedIngredientTen.textContent ="10: "+ data.drinks[0].strMeasure10 +" " + data.drinks[0].strIngredient10;
  listedIngredientEleven.textContent ="11: "+ data.drinks[0].strMeasure11 +" " + data.drinks[0].strIngredient11;
  listedIngredientTwelve.textContent ="12: "+ data.drinks[0].strMeasure12 +" " + data.drinks[0].strIngredient12;
  listedIngredientThirteen.textContent ="13: "+ data.drinks[0].strMeasure13 +" " + data.drinks[0].strIngredient13;
  listedIngredientFourteen.textContent ="14: "+ data.drinks[0].strMeasure14 +" " + data.drinks[0].strIngredient14;
  listedIngredientFifteen.textContent ="15: "+ data.drinks[0].strMeasure15 +" " + data.drinks[0].strIngredient15;

  
  modalIngredients.appendChild(listedIngredientOne);
  modalIngredients.appendChild(listedIngredientTwo);
  modalIngredients.appendChild(listedIngredientThree);
  modalIngredients.appendChild(listedIngredientFour);
  modalIngredients.appendChild(listedIngredientFive);
  modalIngredients.appendChild(listedIngredientSix);
  modalIngredients.appendChild(listedIngredientSeven);
  modalIngredients.appendChild(listedIngredientEight);
  modalIngredients.appendChild(listedIngredientNine);
  modalIngredients.appendChild(listedIngredientTen);
  modalIngredients.appendChild(listedIngredientEleven);
  modalIngredients.appendChild(listedIngredientTwelve);
  modalIngredients.appendChild(listedIngredientThirteen);
  modalIngredients.appendChild(listedIngredientFourteen);
  modalIngredients.appendChild(listedIngredientFifteen);

  modalTitleEl.textContent = cocktailButton;
  modalInstuctions.textContent = pulledInstruction
}) 
}

function fetchEventHandler(event) {
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
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  var audio = document.getElementById('audio')

  randomBtn.onclick = function() {
    audio.play();
  }



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

  if (data.drinks === null) {
    
  }

    
  });
}
   /* function displayRandomCocktail(data) {
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
searchButton.addEventListener("click",fetchCocktails);
displayRandomCocktail();*/

cocktailContainerEl.addEventListener("click", fillModal);
randomBtn.addEventListener('click',fetchRandomCocktail);
searchButton.addEventListener("click",fetchEventHandler);

  