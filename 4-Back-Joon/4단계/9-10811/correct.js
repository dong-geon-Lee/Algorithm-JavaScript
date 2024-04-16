const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

function solution(datas) {
  const [N, M] = datas[0].split(" ");
  const baskets = Array.from({ length: N }, (_, i) => i + 1);

  for (let i = 1; i <= M; i++) {
    const [start, end] = datas[i].split(" ").map(Number);
    const reversed = baskets.splice(start - 1, end - start + 1).reverse();
    console.log(reversed);
    baskets.splice(start - 1, 0, ...reversed);
  }

  return baskets.join(" ");
}

solution(input);
