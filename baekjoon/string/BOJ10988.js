const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function getInput() {
  const input = fs.readFileSync(filePath).toString().split('\n'); 
  const characters = input[0].split(''); 
  return characters; 
}

function traverseCharacters(input) {
  for (let i = 0; i < input.length / 2; i++) {
    if (input[i] != input[input.length - 1 - i]) return 0; 
  }

  return 1;
}

const characters = getInput();
console.log(traverseCharacters(characters));
