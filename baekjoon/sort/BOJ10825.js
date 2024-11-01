const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

function getInput() {
  const input = fs.readFileSync(filePath).toString().trim().split('\n');
  const testCases = input.slice(1).map(line => {
    const [name, kor, eng, mat] = line.split(' ');
    return [name, parseInt(kor), parseInt(eng), parseInt(mat)];
  });
  
  return testCases;
}

function sortStudent(array) {
  return array.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    if (a[2] !== b[2]) return a[2] - b[2]; 
    if (a[3] !== b[3]) return b[3] - a[3]; 
    return a[0] < b[0] ? -1 : 1;
  });
}

const testCases = getInput();
const sortedStudents = sortStudent(testCases);

console.log(sortedStudents.map(student => student[0]).join('\n'));