let lat = "33.127305";
let lon = "-117.288057";
let units = "imperial";

let key = "cbdf069e528baba3df60735c87618369";

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const todayMin = document.querySelector("#min-temp");
const todayMax = document.querySelector("#max-temp");
const humidity = document.querySelector("#humidity");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
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
  todayMin.innerHTML = `${data.main.temp_min}&deg;F`;
  todayMax.innerHTML = `${data.main.temp_max}&deg;F`;
  humidity.innerHTML = `${data.main.humidity}%`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "Description of the weather");
  captionDesc.textContent = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`;
}
