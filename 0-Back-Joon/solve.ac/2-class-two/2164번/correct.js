const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = parseInt(input);

function solution(N) {
  const queue = [];

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  let front = 0;
  while (queue.length - front > 1) {
    front++;
    queue.push(queue[front]);
    front++;
  }

  return queue[front];
}

console.log(solution(N));
