function solution(a, b, c) {
  let cdn1 = a !== b && a !== c && b !== c;
  let cdn3 = a === b && a === c && b === c;

  if (cdn1) {
    return a + b + c;
  } else if (cdn3) {
    return [a, b, c]
      .map((x, i) => x ** (i + 1) + x ** (i + 1) + x ** (i + 1))
      .reduce((acc, cur) => acc * cur);
  } else {
    return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
  }
}

console.log(solution(5, 3, 3));
