const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(parseInt(arr[i].split("").reverse().join("")));
  }

  return Math.max(...newArr);
}

console.log(solution(input));
