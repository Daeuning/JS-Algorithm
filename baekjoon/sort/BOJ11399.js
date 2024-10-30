const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function getInput() {
  const input = fs.readFileSync(filePath).toString().trim().split('\n'); 
  const testCaseCount = parseInt(input[0]);
  const testCases = input[1].split(' ').map(Number);
  
  return { testCaseCount, testCases };
}

function sortAscending(array) {
  return array.sort((a, b) => a - b);
}

function sumArray(array) {
  let total = 0;
  let cumulativeSum = 0;
  
  for (let time of array) {
    cumulativeSum += time; 
    total += cumulativeSum; 
  }
  
  return total;
}

const input = getInput();
const result = sumArray(sortAscending(input.testCases));
console.log(result);