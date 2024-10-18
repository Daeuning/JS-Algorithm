const fs = require("fs");

function getInput() {
  const input = fs.readFileSync('/dev/stdin').toString().split(' ');
  return input.map(Number); 
}

function add(a, b) {
  return a + b;
}

const [a, b] = getInput();
console.log(add(a, b));