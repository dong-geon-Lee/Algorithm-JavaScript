function solution(N) {
  let row = 1; // 현재 행을 나타내는 변수
  let totalCount = 0; // 이전 행까지의 분수 개수를 저장하는 변수

  // 입력값 N이 어느 행에 속하는지 찾는 과정
  while (N > totalCount + row) {
    totalCount += row; // 현재 행까지의 분수 개수를 누적
    row++; // 다음 행으로 이동
  }

  let currentRowNumber = row; // 현재 행의 번호

  // 현재 행에서의 열을 계산하는 부분
  let currentColumnNumber = N - totalCount;

  // 짝수 행과 홀수 행에 따라 분수를 결정
  if (currentRowNumber % 2 === 0) {
    return `${currentColumnNumber}/${
      currentRowNumber - currentColumnNumber + 1
    }`;
  } else {
    return `${
      currentRowNumber - currentColumnNumber + 1
    }/${currentColumnNumber}`;
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();
console.log(solution(parseInt(input)));
