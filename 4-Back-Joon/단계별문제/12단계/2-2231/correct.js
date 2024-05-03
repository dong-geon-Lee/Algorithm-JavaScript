// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const input = parseInt(fs.readFileSync(filePath));

function sumOfDigits(number) {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}

function solution(N) {
  for (let i = 1; i < N; i++) {
    if (i + sumOfDigits(i) === N) return i;
  }
  return 0;
}

console.log(solution(216));

// function solution(N) {
//   let M = 0;

//   for (let i = 0; i < N; i++) {
//     let sum = 0;
//     const targetValue = i;
//     const strLen = targetValue.toString();

//     for (let j = 0; j < strLen.length; j++) {
//       sum += parseInt(strLen[j]);
//     }

//     sum += targetValue;

//     if (sum == N) {
//       M = targetValue;
//       break;
//     }
//   }

//   return M;
// }

// console.log(solution(input));
