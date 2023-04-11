function solution(n) {
  return +n
    .toString()
    .split("")
    .map((x) => parseInt(x))
    .sort((a, b) => b - a)
    .join("");
}

console.log(solution(118372));
