const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution() {
  const date = new Date();
  const years = date.getFullYear();
  const months = date.getMonth() + 1;
  const dates = date.getDate();
  return `${years}-0${months}-0${dates}`;
}

console.log(solution());
