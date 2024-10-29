// WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "176a90101ef07cc056aa6742617e0854";

weatherForm.addEventListener("submit", event =>{

     event.preventDefault();

     const city = cityInput.Value;

     if(city){

     }
     else{
        displayError("please enter a city");
     }

})

async function getweatherData(city){

}

function displayWeatherInfo(data){

}
function getweatherEmoji(weatherId){

}
 function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add(".errorDisplay");

    card,te

 }