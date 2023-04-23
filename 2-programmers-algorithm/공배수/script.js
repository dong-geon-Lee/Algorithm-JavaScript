function solution(number, n, m) {
  console.log(number, n, m);

  return number % n === 0 && number % m === 0 ? 1 : 0;
}

console.log(solution(60, 2, 3));
