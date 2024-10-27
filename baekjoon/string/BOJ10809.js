const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function getInput() {
  const input = fs.readFileSync(filePath).toString().split('\n'); 
  const characters = input[0].split(''); 
  return characters; 
}

function findFirstPositions(characterArray) {
  const alphabetArray = Array(26).fill(-1); 
  
  characterArray.forEach((char, index) => {
    const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0); 
    if (alphabetArray[charCode] === -1) {
      alphabetArray[charCode] = index;
    }
  });
  
  return alphabetArray;
}

const characterArray = getInput();
const alphabetArray = findFirstPositions(characterArray);

console.log(alphabetArray.join(" "));