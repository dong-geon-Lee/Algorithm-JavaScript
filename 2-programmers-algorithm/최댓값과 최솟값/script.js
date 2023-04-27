function solution(s) {
  const lists = s.split(" ").map((x) => +x);
  const min = Math.min(...lists);
  const max = Math.max(...lists);
  return `${min} ${max}`;
}

console.log(solution("1 2 3 4"));
