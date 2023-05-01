function solution(n) {
  return n
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(123));
