const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution() {
  const N = input.length - 1;
  const answer = [];

  for (let i = 0; i < N; i++) {
    const [x, y, z] = input[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    const calculate = x ** 2 + y ** 2;
    if (calculate === z ** 2) answer.push("right");
    else answer.push("wrong");
  }

  return answer.join("\n");
}

console.log(solution());
