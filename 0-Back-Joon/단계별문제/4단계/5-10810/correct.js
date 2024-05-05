const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(N, M, instructions) {
  const baskets = new Array(N).fill(0); // 바구니 배열 초기화

  for (let i = 0; i < M; i++) {
    const [start, end, ballNumber] = instructions[i].split(" ").map(Number);

    for (let j = start - 1; j < end; j++) {
      baskets[j] = ballNumber; // 주어진 바구니 범위에 해당하는 요소를 공의 번호로 갱신
    }
  }

  return baskets.join(" "); // 바구니 상태를 문자열로 변환하여 반환
}

const [N, M] = input[0].split(" ").map(Number);
const K = input.slice(1);

console.log(solution(N, M, K));
