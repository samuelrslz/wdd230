names = ["Whitney", "Tendai", "Nefi", "Jessica", "Amanda", "Heather", "Rachel"];

namesFixed = names.map(addDr);

function addDr(name) {
  return `Dr. ${name}`;
}

console.log(namesFixed);
