const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [M, N] = input[0].split(" ");
  const chess = input.slice(1);
  const white = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];
  const black = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];
  const answer = [];

  for (let i = 0; i <= M - 8; i++) {
    for (let j = 0; j <= N - 8; j++) {
      let whitecnt = 0;
      let blackcnt = 0;

      for (let k = i; k < i + 8; k++) {
        for (let l = j; l < j + 8; l = l + 1) {
          if (chess[k][l] !== white[k - i][l - j]) whitecnt++;
          if (chess[k][l] !== black[k - i][l - j]) blackcnt++;
        }
      }
      let min = whitecnt < blackcnt ? whitecnt : blackcnt;
      answer.push(min);
    }
  }

  return Math.min(...answer);
}

console.log(solution(input));
