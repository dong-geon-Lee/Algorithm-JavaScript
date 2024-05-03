const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

function solution(N) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${N} * ${i} =`, N * i);
  }
}

solution(+input[0]);
