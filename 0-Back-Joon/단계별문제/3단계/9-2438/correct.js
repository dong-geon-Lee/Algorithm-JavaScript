const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + "*";
    console.log(str);
  }
}
