const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n, rest) {
  let arr = rest.join(" ").split(" ");
  let results = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] === "1") continue;
    let count = 0;

    for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
      if (arr[i] % j === 0) {
        count++;
        break;
      }
    }
    if (count === 0) results.push(arr[i]);
  }

  return results.length;
}

let [N, ...rest] = input;
console.log(solution(N, rest));
