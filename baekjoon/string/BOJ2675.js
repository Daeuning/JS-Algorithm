const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function getInput() {
  const input = fs.readFileSync(filePath).toString().split('\n'); 
  const testCase = parseInt(input[0]);

  return { input, testCase };
}

function parseLines(input, testCase) {
  const cases = [];

  for (let i = 1; i <= testCase; i++) {
    const [repeat, str] = input[i].split(' ');
    cases.push({ repeat: parseInt(repeat), str });
  }

  return cases;
}

function repeatCharacters(repeat, str) {
  let result = '';

  for (const char of str) {
    result += char.repeat(repeat);
  }

  return result;
}

function printRepeatedStrings(cases) {
  cases.forEach(({ repeat, str }) => {
    const repeatedStr = repeatCharacters(repeat, str);
    console.log(repeatedStr);
  });
}

const { input, testCase } = getInput();
const cases = parseLines(input, testCase);
printRepeatedStrings(cases);
