function solution(n) {
  let lists = [];
  let divisor = 2;

  while (n > 1) {
    if (n % divisor === 0) {
      lists.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return [...new Set(lists)];
}

console.log(solution(12));
