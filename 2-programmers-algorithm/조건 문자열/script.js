function solution(ineq, eq, n, m) {
  const obj = {
    ">=": (x, y) => x >= y,
    "<=": (x, y) => x <= y,
    ">!": (x, y) => x > y,
    "<!": (x, y) => x < y,
  };

  const selectedFn = obj[ineq + eq];
  return Number(selectedFn(n, m));
}

console.log(solution("<", "=", 20, 50));
