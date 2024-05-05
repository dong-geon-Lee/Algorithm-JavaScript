const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function getRoomNumber(h, n) {
  const floor = n % h === 0 ? h : n % h;
  const room = Math.ceil(n / h);
  const roomNumber = `${floor}${room < 10 ? "0" + room : room}`;
  return roomNumber;
}

function solution(n, arr) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const [h, _, n] = arr[i].split(" ").map(Number);
    result.push(getRoomNumber(h, n));
  }
  return result.join("\n");
}

let [n, ...rest] = input;
console.log(solution(+n, rest));
