const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const subjectCnt = +input[0];
  const scores = input[1].split(" ").map(Number);
  const maxScore = Math.max(...scores);
  let total = 0;

  for (let i = 0; i < subjectCnt; i++) {
    total += (scores[i] / maxScore) * 100;
  }

  return total / subjectCnt;
}

console.log(solution(input));
