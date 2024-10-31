const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function getInput() {
  const input = fs.readFileSync(filePath).toString().trim().split('\n').map(line => line.trim());
  const testCaseCount = parseInt(input[0]);
  const testCases = [];

  for (let i = 1; i <= testCaseCount; i++) {
    const [age, name] = input[i].split(' ');
    testCases.push([parseInt(age), name]);
  }
  
  return { testCaseCount, testCases };
}

function sortAscending(array) {
  return array.sort((a, b) => a[0] - b[0]);
}

const input = getInput();
const sortedCases = sortAscending(input.testCases);
sortedCases.forEach(([age, name]) => console.log(age, name));


