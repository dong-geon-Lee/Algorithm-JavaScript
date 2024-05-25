const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const N = input[0];
  const results = [];

  for (let i = 1; i <= N; i++) {
    const vps = input[i];
    const stack = [];
    let isValid = true;

    for (let j = 0; j < vps.length; j++) {
      if (vps[j] === "(") stack.push(vps[j]);
      else {
        if (stack.length === 0) {
          isValid = false;
          break;
        }
        stack.pop();
      }
    }

    if (isValid && stack.length === 0) results.push("YES");
    else results.push("NO");
  }

  return results.join("\n");
}

console.log(solution(input));
