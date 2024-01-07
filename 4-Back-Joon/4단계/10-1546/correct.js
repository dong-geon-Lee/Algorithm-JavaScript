const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const [n, arr] = input;
  const data = arr.split(" ").map((a) => +a);
  const sum = data.reduce((acc, cur) => acc + cur, 0);
  const rest = sum / Math.max(...data);
  const results = (rest * 100) / n;

  if (results.toString().split(".").length === 1) {
    console.log(results.toFixed(1));
  } else {
    console.log(results);
  }
}

console.log(solution(input));
