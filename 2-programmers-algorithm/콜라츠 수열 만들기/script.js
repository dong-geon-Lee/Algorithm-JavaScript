function solution(n) {
  let numbers = [n];

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    numbers.push(n);
  }

  return numbers;
}

console.log(solution(10));
