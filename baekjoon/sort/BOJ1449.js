const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function getInput() {
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const [leakCount, tapeLength] = input[0].split(' ').map(Number);
  const leakPositions = input[1].split(' ').map(Number);
  
  return { tapeLength, leakPositions };
}

function calculateTape(tapeLength, leakPositions) {
  leakPositions.sort((a, b) => a - b);

  let tapeCount = 0;
  let coveredUntil = 0;

  for (const position of leakPositions) {
    if (position > coveredUntil) {
      tapeCount++;
      coveredUntil = position + tapeLength - 1; 
    }
  }

  return tapeCount;
}

const input = getInput();
const result = calculateTape(input.tapeLength, input.leakPositions);
console.log(result);