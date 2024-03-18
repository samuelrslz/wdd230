const names = ["samuel", "austin", "kirsten", "ronald", "stephen"];

startWithS = names.filter(checkNameS);

function checkNameS(name) {
  return name.charAt(0) == "s";
}

console.log(startWithS);
