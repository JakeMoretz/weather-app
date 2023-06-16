const apiKey = '23ee9de704354907b9202412231406';
const apiUrl =
    'http://api.weatherapi.com/v1/current.json?key=&qAtlanta=&aqi=no';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=23ee9de704354907b9202412231406&q=${city}&aqi=no`,
        { mode: 'cors' }
    );
    let weatherData = await response.json();

    console.log(weatherData);

    document.querySelector('.temp').innerHTML =
        Math.round(weatherData.current.temp_f) + '°f';
    document.querySelector('.city').innerHTML = weatherData.location.name;
    document.querySelector('.humidity').innerHTML =
        weatherData.current.humidity + '%';
    document.querySelector('.wind').innerHTML =
        weatherData.current.wind_mph + ' mph';

    // if (weatherData.current.condition.code = 1003) {
    //     weatherIcon.src = 'src/clouds.png';
    // } else if (weatherData.current.condition = 'Clear') {
    //     weatherIcon.src = 'src/clear.png';
    // } else if (weatherData.current.condition = "Light drizzle") {
    //     weatherIcon.src = 'src/drizzle.png';
    // } else if (weatherData.current.condition = 1030) {
    //     weatherIcon.src = 'src/mist.png';
    // } else if (weatherData.current.condition = 1189) {
    //     weatherIcon.src = 'src/rain.png';
    // } else if (weatherData.current.condition = 1219) {
    //     weatherIcon.src = 'src/snow.png';
    // }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
