const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i <= +input[0]; i++) {
  let sum = input[i].split(" ");
  solution(+sum[0], +sum[1], i);
}

function solution(a, b, c) {
  console.log(`Case #${c}: ${a} + ${b} = ${a + b}`);
}
