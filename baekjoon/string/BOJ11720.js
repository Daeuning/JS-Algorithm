const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function getInput() {
  const input = fs.readFileSync(filePath).toString().split('\n'); 
  const numbers = input[1].split('').map(Number); 
  return numbers; 
}

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

const num_array = getInput();
console.log(sumArray(num_array));