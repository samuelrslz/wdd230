// For the 3 day forecast

const tomorrow = document.querySelector("#tomorrow");
const tomorrow1 = document.querySelector("#tomorrow1");
const tomorrow2 = document.querySelector("#tomorrow2");

const tomorrowMin = document.querySelector("#tomorrow-min");
const tomorrow1Min = document.querySelector("#tomorrow1-min");
const tomorrow2Min = document.querySelector("#tomorrow2-min");

const tomorrowMax = document.querySelector("#tomorrow-max");
const tomorrow1Max = document.querySelector("#tomorrow1-max");
const tomorrow2Max = document.querySelector("#tomorrow2-max");

const tomorrowIcon = document.querySelector("#tomorrow-icon");
const tomorrow1Icon = document.querySelector("#tomorrow1-icon");
const tomorrow2Icon = document.querySelector("#tomorrow2-icon");

const url2 =
  "https://api.openweathermap.org/data/3.0/onecall?lat=43.81647420235465&lon=-111.7837867109621&appid=da4687af93942a06c1610c45b0fbb904&units=imperial&exclude=minutely,%20hourly,%20alerts";

async function apiFetch2() {
  try {
    const response2 = await fetch(url2);
    if (response2.ok) {
      const data2 = await response2.json();
      console.log(data2);
      displayResults2(data2); // uncomment when ready
    } else {
      throw Error(await response2.text());
    }
  } catch (error2) {
    console.log(error2);
  }
}

apiFetch2();

function displayResults2(data2) {
  tomorrowMin.innerHTML = `${data2.daily[1].temp.min}&deg;F`;
  tomorrow1Min.innerHTML = `${data2.daily[2].temp.min}&deg;F`;
  tomorrow2Min.innerHTML = `${data2.daily[3].temp.min}&deg;F`;

  tomorrowMax.innerHTML = `${data2.daily[1].temp.max}&deg;F`;
  tomorrow1Max.innerHTML = `${data2.daily[2].temp.max}&deg;F`;
  tomorrow2Max.innerHTML = `${data2.daily[3].temp.max}&deg;F`;

  let tomorrowDate = new Date(0);
  let tomorrow1Date = new Date(0);
  let tomorrow2Date = new Date(0);

  tomorrowDate.setUTCSeconds(data2.daily[1].dt);
  tomorrow.innerHTML = `${convertDay(tomorrowDate.getDay())}`;

  tomorrow1Date.setUTCSeconds(data2.daily[2].dt);
  tomorrow1.innerHTML = `${convertDay(tomorrow1Date.getDay())}`;

  tomorrow2Date.setUTCSeconds(data2.daily[3].dt);
  tomorrow2.innerHTML = `${convertDay(tomorrow2Date.getDay())}`;
}

function convertDay(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Someday next couple days";
  }
}
