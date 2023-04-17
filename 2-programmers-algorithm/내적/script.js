function solution(a, b) {
  return a.map((x, i) => x * b[i]).reduce((acc, cur) => acc + cur, 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
