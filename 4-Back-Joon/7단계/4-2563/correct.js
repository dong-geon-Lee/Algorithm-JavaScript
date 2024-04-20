const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const n = +input[0];
  const paper = Array.from({ length: 100 }, () => Array(100).fill(0));
  for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(" ").map(Number);

    for (let j = x; j < x + 10; j++) {
      for (let k = y; k < y + 10; k++) {
        paper[j][k] = 1;
      }
    }
  }

  let area = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (paper[i][j] === 1) {
        area++;
      }
    }
  }

  return area;
}

console.log(solution(input));
