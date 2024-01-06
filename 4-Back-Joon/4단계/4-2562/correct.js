const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  let arr = input;
  let idx = 0;
  let results = arr.reduce((acc, cur, i) => {
    if (cur > acc) {
      acc = cur;
      idx = i + 1;
    }
    return parseInt(acc);
  }, 0);

  console.log(results);
  console.log(idx);
}

solution(input);
