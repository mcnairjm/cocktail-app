/*function fetchCocktails() {
    var apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;
  
    fetch(apiUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data)
      })
      .catch(function (err) {
        console.error(err);
      });
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



