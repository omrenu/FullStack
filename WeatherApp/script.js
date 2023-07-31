const apiKey = 'b120a84d48f08162c63dcbb7475739b5';
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const cityName = document.getElementById('cityInput');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    //console.log(city);
    getWeatherData(city);
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        if (data.cod === '404') {
            cityName.textContent = 'City not found';
            temperature.textContent = '';
            description.textContent = '';
        }
        else {
            cityName.textContent = data.name;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            description.textContent = `Description: ${data.weather[0].description}`;
        }
    } catch (error) {
        console.log('Error fetching weather data', error);
    }
}