const apiKey = "888bb04ef595e813c31d08861847496f";
const lat = "19.4517";
const lon = "-70.6970";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    }
  } catch (error) {
    console.error(error);
  }
}

function displayWeather(data) {
  const current = data.list[0];
  document.querySelector("#current-temp").innerHTML = `${Math.round(current.main.temp)}°C`;
  document.querySelector("#weather-desc").innerHTML = current.weather[0].description;

  const forecastDiv = document.querySelector("#forecast");
  for (let i = 8; i <= 24; i += 8) {
    const day = data.list[i];
    const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
    forecastDiv.innerHTML += `<p>${date}: ${Math.round(day.main.temp)}°C</p>`;
  }
}

fetchWeather();