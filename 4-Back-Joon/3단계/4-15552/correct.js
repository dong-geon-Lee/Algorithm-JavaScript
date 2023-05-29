//  node.js로 풀 수 없는 문제라 콘솔 정답만 확인하고 문제 답 다른 거 참고해서 제출함.
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let max = Number(input[0]);
let answer = "";

for (let i = 1; i <= max; i++) {
  let num = input[i].split(" ");
  answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);
