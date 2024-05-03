const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(n, m, arr) {
  let maxSum = 0;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = arr[i] + arr[j] + arr[k];
        if (sum <= m && sum > maxSum) {
          maxSum = sum;
        }
      }
    }
  }

  return maxSum;
}

const [N, M] = input[0].split(" ");
const arr = input[1].split(" ").map(Number);
console.log(solution(+N, +M, arr));
