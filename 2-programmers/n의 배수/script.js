function solution(num, n) {
  console.log(num, n);
  return num % n === 0 ? 1 : 0;
}

console.log(solution(98, 2));
