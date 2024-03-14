let lat = "13.479435431721999";
let lon = "-88.17702853884133";
let units = "imperial";

let key = "cbdf069e528baba3df60735c87618369";

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const humidity = document.querySelector("#humidity");
const feelsLike = document.querySelector("#feels-like");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const feelsLike2 = document.querySelector("#feels-like2");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;

console.log("url");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  humidity.innerHTML = `${data.main.humidity}%`;
  feelsLike.innerHTML = `${data.main.feels_like}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "Description of the weather");
  captionDesc.textContent = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`;

  let sunriseRaw = data.sys.sunrise;
  let sunsetRaw = data.sys.sunset;

  let sunriseDate = new Date(0);
  let sunsetDate = new Date(0);

  sunriseDate.setUTCSeconds(sunriseRaw);
  sunsetDate.setUTCSeconds(sunsetRaw);

  let sunriseMinutes = sunriseDate.getMinutes();

  if (sunriseMinutes < 10) {
    sunriseMinutes = sunriseMinutes.toString() + "0";
  }

  sunrise.textContent = `${sunriseDate.getHours()}:${sunriseMinutes}`;

  let sunsetMinutes = sunsetDate.getMinutes();

  if (sunsetMinutes < 10) {
    sunsetMinutes = sunsetMinutes.toString() + "0";
  }

  sunset.textContent = `${sunsetDate.getHours()}:${sunsetMinutes}`;

  if (data.main.temp > 89) {
    feelsLike2.textContent = "Hell!";
  } else {
    feelsLike2.innerHTML = "Not Hell!";
  }
}
