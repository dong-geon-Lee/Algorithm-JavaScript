function solution(n) {
  if (Math.sqrt(n).toString().includes(".")) return -1;
  return (Math.sqrt(n) + 1 ** 2) ** 2;
}

console.log(solution(121));
