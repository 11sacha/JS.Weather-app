function roundToOneDecimal(number) {
    return Math.round(number * 10) / 10;
}

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "e4cb00cd345c5f7b7c6deeed280a85f8";

const cityName = document.querySelector('.city');
const temp = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const icon = document.querySelector('.weather-icon');
const weather = document.querySelector('.weather');
const error = document.querySelector('.error');

const search = document.querySelector('.search input')
const btn = document.querySelector('.search button')

async function cheackWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        error.style.display = 'block';
        weather.style.display = 'none';
    } 
    else {
        let data = await response.json();

    cityName.innerHTML = data.name;
    temp.innerHTML = roundToOneDecimal(data.main.temp) + "°c";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        icon.src = "images/clouds.png";
    } 
    else if (data.weather[0].main == "Clear") {
        icon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        icon.src = "images/rain.png";
    } 
    else if (data.weather[0].main == "Drizzle") {
        icon.src = "images/drizzle.png";
    } 
    else if (data.weather[0].main == "Mist") {
        icon.src = "images/mist.png";
    } 
    
    weather.style.display = "block";
    error.style.display = "none";
    }
}

btn.addEventListener('click', () => {
    cheackWeather(search.value);
})

