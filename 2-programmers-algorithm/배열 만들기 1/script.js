function solution(n, k) {
  return Array(n / k)
    .fill(k)
    .map((v, i) => v * (i + 1));
}

console.log(solution(15, 5));
