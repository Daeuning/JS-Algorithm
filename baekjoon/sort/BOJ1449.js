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






// 길이가 L인 테이프를 무한개 가지고 있음
// 물이 새는 위치의 좌우 0.5만큼 간격을 줘야 물이 안샘
// 물이 새는 곳의 개수 N과 테이프의 길이 L이 주어진다
// 물이 새는 곳의 위치도 주어진다


// 일단 정렬
// 두개씩 비교해보기
// 그냥 각각 붙였을때 => L * 2
// 두개 구멍을 동시에 붙였을 때 => 두 구멍 사이의 거리를 재보기. 1이다? 그러면 총 길이 1 + 0.5 + 0.5 해서 총 2의 길이가 필요함. => 그러면 필요한 길이 % L 을 반올림한게 붙여야하는 테이프의 갯수
// 비교해봄. 더 적은걸로 넣기


// currentIndex = 0이랑, compareIndex = 1 주기
// 두개를 한꺼번에 막았을 때 필요한 테이프의 갯수랑, 그냥 compareIndex거에 하나 더한 갯수랑 비교해봄
// 만약 한꺼번에 막았을 때 필요한게 더 적다면, 그 갯수 누적
// 근데 따로 한게 더 적다 싶으면, total에다가 따로막았을때 필요한거 갯수 집어넣고 끝내기