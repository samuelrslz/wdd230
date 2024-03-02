// Grab the element with an id of #copyrightDate
const copyrightDate = document.querySelector("#copyrightDate");

// Modify the innerHTML of that element to get the full year
copyrightDate.innerHTML = new Date().getFullYear();

// Grab the lastModified
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last modified: ${document.lastModified}`;

// This is for the form in the join page
document.addEventListener("DOMContentLoaded", function () {
  var timestampField = document.getElementById("timestamp");
  timestampField.value = Date.now();
});
