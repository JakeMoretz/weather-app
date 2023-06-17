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

    try {
        let temp = document.querySelector('.temp');
        temp.textContent = Math.round(weatherData.current.temp_f) + '°f';
    
        let currentCity = document.querySelector('.city');
        currentCity.textContent = weatherData.location.name;
    
        let humidity = document.querySelector('.humidity');
        humidity.textContent = weatherData.current.humidity + '%';
    
        let wind = document.querySelector('.wind');
        wind.textContent = weatherData.current.wind_mph;
    
        if (weatherData.current.condition.code === 1003) {
            weatherIcon.src = './src/clouds.png';
        } else if (weatherData.current.condition.code === 1000) {
            weatherIcon.src = './src/clear.png';
        } else if (weatherData.current.condition.code === 1153) {
            weatherIcon.src = './src/drizzle.png';
        } else if (weatherData.current.condition.code === 1030) {
            weatherIcon.src = './src/mist.png';
        } else if (weatherData.current.condition.code === 1189) {
            weatherIcon.src = './src/rain.png';
        } else if (weatherData.current.condition.code === 1219) {
            weatherIcon.src = './src/snow.png';
        }
    }
    catch(error) {
        let currentCity = document.querySelector('.city');
        currentCity.textContent = "oops, something happened"
    }
    
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
