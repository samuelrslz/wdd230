// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Get the stored VALUE for the lastVisit-ls in localStorage if it esits. If it's missing, assign 0 to the lastVisit
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls") || 0);

let longAgo = Math.floor((Date.now() - lastVisit) / 86400000);

// 3️⃣ Determine if this is the first visit
if (numVisits == 0) {
	visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} 
else if ((Date.now() - lastVisit) < 86400000) {
	visitsDisplay.textContent = `Back so soon! Awesome!`;
	console.log(numVisits);
}
else {
	if (longAgo > 1) {
		visitsDisplay.textContent = `You last visited ${longAgo} days ago.`;
	}
	else {
		visitsDisplay.textContent = `You last visited ${longAgo} day ago.`;
	}
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// Store the current now as the lastVisit
localStorage.setItem("lastVisit-ls", Date.now());

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.