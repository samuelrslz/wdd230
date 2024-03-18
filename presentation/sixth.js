const numbers = [175, 50, 25];

// With no initial value, index [0] serves that purpose.
result = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log(result);
