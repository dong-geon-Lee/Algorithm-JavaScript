const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let N = input[0].split(" ");
let listNum = input[1].split(" ").map((x) => +x);
let result = listNum.filter((x) => x < +N[1]);

console.log(result.join(" "));

// 아래는 다른 방법

// const [A, B] = input[0].split(" ").map((x) => +x);
// const arrayA = input[1].split(" ").map((x) => +x);

// console.log(A, B);
// console.log(arrayA);
// solution(A, B, arrayA);

// function solution(a, b, arrA) {
//   let list = [];
//   for (let i = 0; i < a; i++) {
//     if (b > arrA[i]) {
//       list.push(arrA[i]);
//     }
//   }
//   console.log(list.join(" "));
// }
