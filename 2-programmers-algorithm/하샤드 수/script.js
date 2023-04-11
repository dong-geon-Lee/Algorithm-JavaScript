function solution(s) {
  let sumNumber = s
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .reduce((acc, cur) => acc + cur, 0);

  if (s % sumNumber === 0) return true;
  return false;
}

console.log(solution(12));
