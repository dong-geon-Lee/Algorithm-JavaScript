const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  const [N, ...testCases] = input;
  const coins = [25, 10, 5, 1];
  let results = [];

  for (let i = 0; i < N; i++) {
    let change = testCases[i];
    let counts = [];

    for (const coin of coins) {
      counts.push(Math.floor(change / coin));
      change %= coin;
    }

    results.push(counts.join(" "));
  }

  return results.join("\n");
}

console.log(solution(input));
