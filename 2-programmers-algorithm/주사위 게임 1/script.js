function solution(a, b) {
  let condition1 = a % 2 === 1 && b % 2 === 1;
  let condition2 = a % 2 === 1 || b % 2 === 1;
  let condition3 = a % 2 !== 1 && b % 2 !== 1;

  if (condition1) return a ** 2 + b ** 2;
  if (condition2) return 2 * (a + b);
  if (condition3) return Math.abs(a - b);
}

console.log(solution(3, 5));
