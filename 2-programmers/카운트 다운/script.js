function solution(start, end) {
  return Array.from({ length: start - end + 1 }, (_, i) => start - i);
}

console.log(solution(10, 3));
