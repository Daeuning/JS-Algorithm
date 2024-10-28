const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function getInput() {
  const input = fs.readFileSync(filePath).toString().trim().split('\n'); 
  const testCaseCount = parseInt(input[0]);
  const testCases = input.slice(1);
  
  return { testCaseCount, testCases };
}

function calculateScore(testCase) {
  let score = 0;
  let consecutiveOCount = 0;

  for (const char of testCase) {
    if (char === 'O') {
      consecutiveOCount += 1;
      score += consecutiveOCount;
    } else {
      consecutiveOCount = 0;
    }
  }

  return score;
}

function printScores(testCaseCount, testCases) {
  const scores = testCases.map(calculateScore);
  scores.forEach(score => console.log(score));
}

const { testCaseCount, testCases } = getInput();
printScores(testCaseCount, testCases);
