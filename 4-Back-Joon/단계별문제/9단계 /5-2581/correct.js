const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(input) {
  const [start, end] = input;
  const results = [];

  for (let i = Number(start); i <= Number(end); i++) {
    if (isPrime(i)) results.push(i);
  }

  if (results.length === 0) return -1;

  const totals = results.reduce((acc, cur) => acc + cur, 0);
  const min = Math.min(...results);

  return `${totals}\n${min}`;
}

console.log(solution(input));
