function solution(a, b) {
  let sum1 = parseInt(a.toString() + b);
  let sum2 = parseInt(b.toString() + a);
  return Math.max(sum1, sum2);
}

console.log(solution(9, 91));
