// Retrieve visit count from localStorage
let visitCount = localStorage.getItem("visitCount") || 0;
// Display visit count on the page
document.getElementById("orders").textContent = visitCount;
