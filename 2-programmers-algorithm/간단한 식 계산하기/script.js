function solution(binomial) {
  const operatorMap = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
  };

  const [operand1, operator, operand2] = binomial.split(" ");
  const opFn = operatorMap[operator];
  return opFn && opFn(parseInt(operand1), parseInt(operand2));
}

console.log(solution("43 + 12"));
