function solution(x, n) {
  return Array.from({ length: n }, (_, i) => i + 1).map((a) => a * x);
}

console.log(solution(2, 5));
