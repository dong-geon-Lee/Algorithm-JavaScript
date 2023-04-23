function solution(n) {
  const arr = Array.from({ length: n }, (_, idx) => idx + 1);

  if (n % 2 === 1) {
    return arr.filter((x) => x % 2 !== 0).reduce((acc, cur) => acc + cur);
  }

  if (n % 2 === 0) {
    return arr
      .filter((x) => x % 2 === 0)
      .map((x) => x ** 2)
      .reduce((acc, cur) => acc + cur);
  }
}

console.log(solution(7));
