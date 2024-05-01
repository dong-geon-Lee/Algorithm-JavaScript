const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n, input) {
  let radX = [];
  let radY = [];

  for (const [x, y] of input) {
    radX.push(x);
    radY.push(y);
  }

  let results = [];

  for (let i = 0; i < 1; i++) {
    results.push(Math.max(...radX) - Math.min(...radX));
    results.push(Math.max(...radY) - Math.min(...radY));
  }

  return results.reduce((acc, cur) => acc * cur, 1);
}

let n = input[0];
let rest = input.slice(1).map((x) => x.split(" "));
console.log(solution(n, rest));
