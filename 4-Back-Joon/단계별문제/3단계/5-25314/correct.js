const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [input] = fs.readFileSync(filePath).toString().split("\n").map(Number);

function solution(n) {
  let str = "";

  for (let i = 1; i <= n / 4; i++) {
    str += "long ";
  }

  return str + "int";
}

console.log(solution(input));
