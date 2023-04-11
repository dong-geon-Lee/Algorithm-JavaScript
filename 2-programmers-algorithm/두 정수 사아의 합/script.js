function solution(a, b) {
  let len = Math.max(a, b);
  let sum = 0;
  let min = a <= b ? a : b;

  for (let i = min; i <= len; i++) sum += i;
  return sum;
}

console.log(solution(5, 3));
