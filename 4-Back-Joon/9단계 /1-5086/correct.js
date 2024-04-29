const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const results = [];

  for (let i = 0; i < input.length - 1; i++) {
    let output = "";
    const [x, y] = input[i].split(" ").map(Number);

    if (y % x === 0) {
      output = "factor";
    } else if (x % y === 0) {
      output = "multiple";
    } else {
      output = "neither";
    }
    results.push(output);
  }
  return results.join("\n");
}

console.log(solution(input));
