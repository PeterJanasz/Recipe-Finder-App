const searchBox = document.querySelector('#searchBox');
const filterBox = document.querySelector('#filter');
const activityLog = document.querySelector('#activities');

var APIkey = "e8d4353da99df583c30fa14e3417b53c";	

//AppID 958f1348
//APIkey e8d4353da99df583c30fa14e3417b53c	
//url https://api.edamam.com/api/recipes/v2

//https://api.edamam.com/api/recipes/v2?type=public&app_id=958f1348&app_key=%20e8d4353da99df583c30fa14e3417b53c%09& + food + &imageSize=SMALL&random=true

function recipe() {
    var recipeURL = "https://api.edamam.com/api/recipes/v2?type=public&app_id=958f1348&app_key=%20e8d4353da99df583c30fa14e3417b53c%09&imageSize=SMALL&random=true";

    fetch(recipeURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            displayRecipe(data);

        })
};

function getIngredients() {

}