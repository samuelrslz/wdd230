const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // You're on step 13 baby!
  });
};
