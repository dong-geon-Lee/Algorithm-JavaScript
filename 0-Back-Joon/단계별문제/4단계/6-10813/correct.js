const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(N, exchanges) {
  const baskets = new Array(N).fill().map((_, idx) => idx + 1);

  for (const [i, j] of exchanges) {
    const temp = baskets[i - 1];
    baskets[i - 1] = baskets[j - 1];
    baskets[j - 1] = temp;
  }

  return baskets.join(" ");
}

const [N] = input[0].split(" ").map(Number);
const exchanges = input.slice(1).map((line) => line.split(" ").map(Number));

console.log(solution(N, exchanges));
