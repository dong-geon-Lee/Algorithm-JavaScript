function solution(n) {
  let words = Array.from({ length: n }, (_, i) => i + 1);
  return words.map((x) => (x % 2 === 1 ? "수" : "박")).join("");
}

console.log(solution(3));
