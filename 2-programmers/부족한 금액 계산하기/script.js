function solution(price, money, count) {
  const results = Array(count)
    .fill(price)
    .map((x, idx) => x * (idx + 1))
    .reduce((acc, cur) => acc + cur);

  if (money >= results) return 0;
  return results - money;
}

console.log(solution(3, 20, 4));
// *good
