

document.getElementById('fetch-weather').addEventListener('click', fetchWeather);

function fetchWeather() {
    const location = document.getElementById('location-input').value;
    const apiKey = '46738904d0344b0ebd5e6b21e58f3596'; 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('weather-info').innerHTML = `<p class="error">Error fetching the weather data: ${error.message}</p>`;
        });
}

function displayWeather(data) {
    if (!data || !data.weather || !data.main) {
        document.getElementById('weather-info').innerHTML = `<p class="error">Weather data is not available for the entered location.</p>`;
        return;
    }

    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <div class="weather-detail">Location: ${data.name}</div>
        <div class="weather-detail">Temperature: ${data.main.temp}°C</div>
        <div class="weather-detail">Weather: ${data.weather[0].description}</div>
        <div class="weather-detail">Humidity: ${data.main.humidity}%</div>
        <div class="weather-detail">Wind Speed: ${data.wind.speed} m/s</div>
    `;
}
