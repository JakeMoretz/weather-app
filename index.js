const apiKey = "23ee9de704354907b9202412231406";
const apiUrl = "http://api.weatherapi.com/v1/current.json?key=&qAtlanta=&aqi=no";

async function checkWeather() {
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=23ee9de704354907b9202412231406&q=London&aqi=no",
    {mode: 'cors'});
    let weatherData = await response.json();

    console.log(weatherData);
}

checkWeather();