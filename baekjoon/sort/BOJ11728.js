const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function getInput() {
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const [N, M] = input[0].split(' ').map(Number);
  const arrayA = input[1].split(' ').map(Number);
  const arrayB = input[2].split(' ').map(Number);
  
  return { arrayA, arrayB };
}

function mergeAndSortArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

const { arrayA, arrayB } = getInput();
const sortedArray = mergeAndSortArrays(arrayA, arrayB);
console.log(sortedArray.join(' '));
