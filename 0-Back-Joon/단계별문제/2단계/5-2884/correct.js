const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let hour = +input[0];
let min = +input[1];

function solution(hour, min) {
  min = min - 45;

  if (min < 0) {
    min = min + 60;
    hour = hour - 1;
  }

  if (hour < 0) {
    hour = 23;
  }

  console.log(hour, min);
}

solution(hour, min);

// if (hour > 0 && hour <= 23) {
//   if (min < 0) {
//     hour = hour - 1;
//     min = 60 - Math.abs(min);
//     console.log(Number(hour), Number(min));
//   } else if (min > 0) {
//     console.log(Number(hour), Number(min));
//   }
// } else if (hour < 0) {
//   if (min < 0) {
//     hour = hour - 1 + 24;
//     min = 60 - Math.abs(min);
//     console.log(Number(hour) + " " + Number(min));
//   } else if (min > 0) {
//     console.log(Number(hour) + " " + Number(min));
//   }
// }
