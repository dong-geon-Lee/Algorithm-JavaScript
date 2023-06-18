function solution(a, b, n) {
  let totalCola = 0;

  while (n >= a) {
    let exchangedCola = Math.floor(n / a) * b;
    totalCola += exchangedCola;
    n = exchangedCola + (n % a);
  }

  return totalCola;
}

// console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); //9
