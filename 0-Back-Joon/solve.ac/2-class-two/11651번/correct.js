const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  const N = parseInt(arr[0]);
  const points = [];

  for (let i = 1; i <= N; i++) {
    const [x, y] = arr[i].split(" ").map(Number);
    points.push([x, y]);
  }

  points.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  const answers = points.map((point) => {
    return `${point[0]} ${point[1]}`;
  });

  return answers.join("\n");
}

console.log(solution(input));
