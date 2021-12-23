function fetchCocktails() {
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
  
fetchCocktails()