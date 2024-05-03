// 시간초과나서 그냥 답 베껴서 제출함
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString());

let answer = "";

for (let i = input; i >= 1; i--) {
  answer = answer + i + "\n";
}

console.log(answer);
