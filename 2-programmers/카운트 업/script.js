function solution(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start);
}

console.log(solution(3, 10));
