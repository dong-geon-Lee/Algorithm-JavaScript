function solution(x1, x2, x3, x4) {
  console.log(x1, x2, x3, x4);
  return (x1 || x2) && (x3 || x4);
}

console.log(solution(false, true, true, true));
