// const searchBox = document.querySelector('#searchBox');
// const filterBox = document.querySelector('#filter');
// const recipeLog = document.querySelector('#recipes');

var searchbtn = document.querySelector('#searchbtn')
  var foodURL = "";

//var APIkey = "e8d4353da99df583c30fa14e3417b53c";	

//AppID 958f1348
//APIkey e8d4353da99df583c30fa14e3417b53c	
//url https://api.edamam.com/api/recipes/v2

//https://api.edamam.com/api/recipes/v2?type=public&app_id=958f1348&app_key=%20e8d4353da99df583c30fa14e3417b53c%09& + food + &imageSize=SMALL&random=true

function recipe() {
    var recipeURL = "https://api.edamam.com/api/recipes/v2?type=public&app_id=958f1348&app_key=%20e8d4353da99df583c30fa14e3417b53c%09&imageSize=SMALL&random=true" + foodURL;


    fetch(recipeURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for(var i = 0; i < 5; i++) {
            var recipeTitle = data.hits[i].recipe.label;
            var recipeImg = data.hits[i].recipe.image;
            var recipeURL = data.hits[i].recipe.url;


            var newRecipe = document.createElement('div');
            newRecipe.innerHTML = `
            <h2>${recipeTitle}</h2>
            <a href='${recipeURL}'><img src='${recipeImg}'></img></a>
            `;
            recipeLog.appendChild(newRecipe)
            }
        })
};

//dropdown selection
var diet = document.getElementById("diet");
var dietText = diet.options[diet.selectedIndex].text;

var cuisine = document.getElementById("cuisine-type");
var cuisineText = cuisine.options[cuisine.selectedIndex].text;

var meal = document.getElementById("meal-type");
var mealText = meal.options[meal.selectedIndex].text;

var dish = document.getElementById("dish-type");
var dishText = dish.options[dish.selectedIndex].text;

// returns string to add to api url
function getIngredients() {
 var checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");

    for(let i = 0; i < checkedBoxes.length; i++) {
        foodURL += `&food=${checkedBoxes[i].value}`
    }
console.log(foodList)
}


recipe();
searchbtn.addEventListener('click', getIngredients)



