const windSpeed = document.querySelector("#windSpeed");
const temperature = document.querySelector("#temperature");
const button = document.querySelector("#windChill");
const text = document.querySelector("#windChillResult");

function getWindChill(w, t) {
    return 35.74 + (0.6215*t) - (35.75*(w**0.16)) + (0.4275*t*(w**0.16));
}

button.addEventListener("click", function() {
    if (temperature.value > 50 || windSpeed.value < 3) {
        text.innerText = "N/A";
    }
    else {
        text.innerText = getWindChill(parseFloat(windSpeed.value), parseFloat(temperature.value));
    }
})