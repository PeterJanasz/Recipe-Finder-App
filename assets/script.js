// const searchBox = document.querySelector('#searchBox');
// const filterBox = document.querySelector('#filter');
const recipeLog = document.querySelector('#recipes');

var searchbtn = document.querySelector('#searchbtn')
var foodURL = "";

//var APIkey = "e8d4353da99df583c30fa14e3417b53c";	

//AppID 958f1348
//APIkey e8d4353da99df583c30fa14e3417b53c	
//url https://api.edamam.com/api/recipes/v2

//https://api.edamam.com/api/recipes/v2?type=public&app_id=958f1348&app_key=%20e8d4353da99df583c30fa14e3417b53c%09& + food + &imageSize=SMALL&random=true

var gifURL = "https://api.giphy.com/v1/gifs/random?api_key=0UTRbFtkMxAplrohufYco5IY74U8hOes&tag=food&rating=pg-13"

function recipe() {
    var recipeURL = "https://api.edamam.com/api/recipes/v2?type=public&app_id=958f1348&app_key=%20e8d4353da99df583c30fa14e3417b53c%09&imageSize=SMALL&random=true" + foodURL;
console.log(recipeURL);

    fetch(recipeURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < 10; i++) {
                var recipeTitle = data.hits[i].recipe.label;
                var recipeImg = data.hits[i].recipe.image;
                var recipeURL = data.hits[i].recipe.url;


                var newRecipe = document.createElement('div');
                newRecipe.setAttribute("class", "recipeColumns");
                newRecipe.innerHTML = `
                <a href='${recipeURL}'><img src='${recipeImg}'></img></a>
            <h2>${recipeTitle}</h2>
            `;
                recipeLog.appendChild(newRecipe)
            }
            
        })
};

//dropdown selection
var diet = document.getElementById("diet");
var cuisine = document.getElementById("cuisine-type");
var meal = document.getElementById("meal-type");
var health = document.getElementById("health-label");

//returns string to add to api url
function updateURL() {
    recipeLog.innerHTML = `
    <h2>Recipes:</h2>
    `
    foodURL = "";
    var dietVal = diet.options[diet.selectedIndex].text;
    var cuisineVal = cuisine.options[cuisine.selectedIndex].text;
    var mealVal = meal.options[meal.selectedIndex].text;
    var healthVal = health.options[health.selectedIndex].text;

    // Construct the API URL based on the selected values
    if (dietVal !== "any") {
        foodURL += `&diet=${dietVal}`;
    } 
    if (cuisineVal !== "any") {
       foodURL += `&cuisine=${cuisineVal}`;
    }
    if (mealVal !== "any") {
        foodURL += `&meal=${mealVal}`;
    }
    if (healthVal !== "any") {
        foodURL += `&health=${healthVal}`;
    }
   
    recipe();
}
recipe();


searchbtn.addEventListener('click', function() {
    updateURL();
    recipe();
});



