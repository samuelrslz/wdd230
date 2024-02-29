// For confirming password

const p1 = document.querySelector("#password");
const p2 = document.querySelector("#confirmPassword");
const message = document.querySelector("#formmessage");

p2.addEventListener("focusout", checkSame);

function checkSame() {
  if (p1.value !== p2.value) {
    message.textContent = "Passwords Do Not Match!";
    message.style.visibility = "show";
    p2.style.backgroundColor = "#fff0f3";
    p2.value = "";
    p2.focus();
  } else {
    message.style.display = "none";
    p2.style.backgroundColor = "#eee";
    p2.style.color = "#000";
  }
}

// For rating

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}
