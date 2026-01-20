const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.63&units=imperial&appid=888bb04ef595e813c31d08861847496f";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data.list[0]);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (e) {
    console.log(e);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
  let desc = data.list[0].weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", data.list[0].weather[0].description);
  captionDesc.textContent = `${desc}`;
}

apiFetch();
