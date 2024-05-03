const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

function calculatePoints(N) {
  console.log(N);

  if (N === 1) return 1;

  let roomCount = 1;
  let layer = 1;

  while (roomCount < N) {
    roomCount += 6 * layer;
    layer++;
  }

  // 1 ... 7 ... 19 ... 37 ... 61

  // 숫자 1     1번방
  // 숫자 2~7   2번방
  // 숫자 8~19  3번방
  // 숫자 20~37 4번방
  // 숫자 38~61 5번방

  // 1 ... 7 ... 19 ... 37 ... 61
  //  6, 12, 18, 24
  //  1   2   3  4

  // 13 => 3
  // 58 => 5

  // 6의 배수로 증가.

  return layer;
}

console.log(calculatePoints(input));
