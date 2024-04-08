const tomorrow = document.querySelector("#tomorrow");
const tomorrow1 = document.querySelector("#tomorrow1");
const tomorrow2 = document.querySelector("#tomorrow2");

const tomorrowIcon = document.querySelector("#tomorrow-icon");
const tomorrow1Icon = document.querySelector("#tomorrow1-icon");
const tomorrow2Icon = document.querySelector("#tomorrow2-icon");

const tomorrowDesc = document.querySelector("#tomorrow-desc");
const tomorrow1Desc = document.querySelector("#tomorrow1-desc");
const tomorrow2Desc = document.querySelector("#tomorrow2-desc");

// Construct the API URL
const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=33.127305&lon=-117.288057&appid=cbdf069e528baba3df60735c87618369&units=imperial&exclude=current,minutely,daily,alerts`;

// Make a GET request to the API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Log the entire response data
    console.log(data);

    // Extract hourly forecast data from the response
    const hourlyForecast = data.list;

    // Filter the forecast data to only include 9 AM for the next 3 days
    const nextThreeDaysForecast = hourlyForecast.filter((hour) => {
      // Convert UNIX timestamp to milliseconds
      const timestamp = hour.dt * 1000;
      // Get the hour of the day
      const hourOfDay = new Date(timestamp).getHours();
      // Return true if the hour is 9 AM and it's within the next 3 days
      console.log(hourOfDay);
      return hourOfDay === 9;
    });

    // Use the filtered forecast data as needed
    displayForecast(nextThreeDaysForecast);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function displayForecast(data) {
  console.log(data);

  let tomorrowDate = new Date(0);
  let tomorrow1Date = new Date(0);
  let tomorrow2Date = new Date(0);

  tomorrowDate.setUTCSeconds(data[0].dt);
  tomorrow.innerHTML = `${convertDay(tomorrowDate.getDay())}`;

  tomorrow1Date.setUTCSeconds(data[1].dt);
  tomorrow1.innerHTML = `${convertDay(tomorrow1Date.getDay())}`;

  tomorrow2Date.setUTCSeconds(data[2].dt);
  tomorrow2.innerHTML = `${convertDay(tomorrow2Date.getDay())}`;

  tomorrowDesc.innerHTML = `${data[0].weather[0].description}`;
  tomorrow1Desc.innerHTML = `${data[1].weather[0].description}`;
  tomorrow2Desc.innerHTML = `${data[2].weather[0].description}`;

  const tomorrowsrc = `https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;
  const tomorrow1src = `https://openweathermap.org/img/w/${data[1].weather[0].icon}.png`;
  const tomorrow2src = `https://openweathermap.org/img/w/${data[2].weather[0].icon}.png`;

  tomorrowIcon.setAttribute("src", tomorrowsrc);
  tomorrowIcon.setAttribute("alt", "Icon of description of the weather");

  tomorrow1Icon.setAttribute("src", tomorrow1src);
  tomorrow1Icon.setAttribute("alt", "Icon of description of the weather");

  tomorrow2Icon.setAttribute("src", tomorrow2src);
  tomorrow2Icon.setAttribute("alt", "Icon of description of the weather");
}

//   for (let i = 0; i < data2.list.length; i++) {
//     if (data2.list[i].dt)
//   }

//   console.log(placeholderDate.getUTCHours());

//   tomorrowIcon.innerHTML = `${data2.daily[1].temp.min}&deg;F`;
//   tomorrow1Icon.innerHTML = `${data2.daily[2].temp.min}&deg;F`;
//   tomorrow2Icon.innerHTML = `${data2.daily[3].temp.min}&deg;F`;

// }

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
