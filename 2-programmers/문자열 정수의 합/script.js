function solution(num_str) {
  return num_str
    .split("")
    .map((x) => +x)
    .reduce((acc, cur) => acc + cur, 0);
}

console.log(solution("123456789", 45));
