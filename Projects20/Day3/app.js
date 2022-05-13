const search = document.getElementById('search'); //input search
const submit = document.querySelector('form'); //form submit
const random = document.getElementById('random'); //random button
const resultHeading = document.querySelector('#result-heading'); //heading of the result
const mealsEl = document.getElementById('meals'); //meals element
const single_mealEl = document.querySelector('.single-meal'); //single-meal element which displays the single-meal upon clicking on the single-meal
const meal_info = document.querySelectorAll('.meal-info');

//Search meal and fetch from API
function searchAndGetMeals(e) {

    e.preventDefault(); // prevent default submit event on the form

    //Clear single meal
    single_mealEl.innerHTML = '';

    //Get search term entered in the search input_txt
    const searchTerm = search.value.trim();

    //Check if the search term contains white spaces and trim and if it is empty alert with message
    if (searchTerm) {

        const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
        fetch(`${searchUrl}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                resultHeading.innerHTML = `<h3>Search results for the term '${searchTerm}' :</h3>`;

                if (data.meals !== null) {
                    mealsEl.innerHTML = data.meals.map(meal =>

                        `<div class="meal">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                        <div class="meal-info" data-mealID="${meal.idMeal}">
                        <h3>${meal.strMeal}</h3>
                        </div>
                        </div>`
                    ).join('');
                }

                else {
                    resultHeading.innerHTML = `<p>There are no search results. Try again!</p>`;

                }

            });
        search.value = '';
    }
    else {
        alert('Please enter a search term');
    }
}

// Fetches the meal by ID
const getMealById = (mealID) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const meal = data.meals[0];
            //console.log(meal);
            addMealToDOM(meal);

        });
}

const getRandomMeal = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(response => response.json())
        .then(data => {
            const meal = data.meals[0];
            addMealToDOM(meal);
        })
}

// Add meal to DOM
const addMealToDOM = (meal) => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        }
        else {
            break;
        }
    }
    single_mealEl.innerHTML =
        `<div class="single-meal">
         <h1>${meal.strMeal}</h1>
         <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
         <div class ="single-meal-info">
         ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
         ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
         </div>
         <div class ="main">
           <h2>Ingredients</h2>
           <ul>
           ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
           </ul>
           <p>${meal.strInstructions}</p>
        </div>
         </div>`;

}

//Event Listeners
submit.addEventListener('submit', searchAndGetMeals);
random.addEventListener('click', getRandomMeal);
mealsEl.addEventListener('click', function (e) {

    const mealInfo = e.path.find(item => {
        console.log(item);

        if (item.classList) {
            return item.classList.contains('meal-info');
        }
        else {
            return false;
        }
    });
    if (mealInfo) {

        const mealID = mealInfo.getAttribute('data-mealID');
        console.log(mealID);
        getMealById(mealID);
    }

});