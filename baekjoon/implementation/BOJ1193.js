const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function getInput() {
  const input = fs.readFileSync(filePath).toString().trim();
  const X = parseInt(input, 10);
  return X;
}

function findFraction(X) {
  let diagonal = 1; 
  let count = 0;    

  while (count + diagonal < X) {
    count += diagonal;
    diagonal++;
  }

  const position = X - count;

  let numerator, denominator;
  if (diagonal % 2 === 0) {
    numerator = position;
    denominator = diagonal - position + 1;
  } else {
    numerator = diagonal - position + 1;
    denominator = position;
  }

  return `${numerator}/${denominator}`;
}

const input = getInput();
const result = findFraction(input);
console.log(result);
