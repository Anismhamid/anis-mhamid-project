const API_KEY = "47a11b26da5d11eaaf4d3cb9f0d77e11";
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;

const query = document.querySelector("#cityInput");
const weatherIcon = document.querySelector("#weatherIcon");
const button = document.querySelector("#search");
const cityName = document.querySelector("#cityName");
const temprature = document.querySelector("#temprature");
const description = document.querySelector("#description");
const errorMessage = document.querySelector("#errorMessage");

const humidity = document.querySelector("#humidity");
const sea_level = document.querySelector("#sea_level");
const grnd_level = document.querySelector("#grnd_level");
const airSpeed = document.querySelector("#speed");
const airdeg = document.querySelector("#deg");
const airgust = document.querySelector("#gust");

async function getweather(city) {
	if (city) {
		try {
			const response = await fetch(URL + city);
			const data = await response.json();
			displayWeatherData(data);
		} catch (error) {
			errorMessage.textContent = error;
		}
	}
}

function displayWeatherData(WeatherData) {
	if (WeatherData.cod === 200) {
		errorMessage.textContent = "";
		cityName.textContent = WeatherData.name;
		temprature.textContent = WeatherData.main.temp + "°";
		description.textContent = WeatherData.weather[0].description;
		weatherIcon.src = `http://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`;

		humidity.textContent = "לחות: " + WeatherData.main.humidity;
		sea_level.textContent = "גובה מעל פני הים: " + WeatherData.main.sea_level;
		grnd_level.textContent = "מפלס הקרקע: " + WeatherData.main.grnd_level;
		airSpeed.textContent = "מהירות הרוח: " + WeatherData.wind.speed;
		airdeg.textContent = "כיוון הרוח: " + WeatherData.wind.deg;
	} else {
		cityName.textContent = "";
		temprature.textContent = "";
		description.textContent = "";
		weatherIcon.src = "";
		humidity.textContent = "";
		sea_level.textContent = "";
		grnd_level.textContent = "";
		airSpeed.textContent = "";
		airdeg.textContent = "";
		airgust.textContent = "";
		errorMessage.textContent = WeatherData.message + ", cod: " + WeatherData.cod;
	}
}

button.addEventListener("click", (e) => {
	getweather(query.value);
});
