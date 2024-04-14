const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(input) {
  const [hour, min] = input[0].split(" ").map(Number);
  const cookMin = parseInt(input[1]);

  const totalMin = hour * 60 + min + cookMin;
  const resultHour = Math.floor(totalMin / 60) % 24;
  const resultMin = totalMin % 60;

  return `${resultHour} ${resultMin}`;
}

console.log(solution(input));
