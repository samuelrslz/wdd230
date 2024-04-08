// Retrieve current visit count from localStorage
let visitCount = localStorage.getItem("visitCount") || 0;
// Increment visit count
visitCount++;
// Store updated visit count back in localStorage
localStorage.setItem("visitCount", visitCount);
