function solution(n) {
  let lists = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) lists.push(i);
  }
  return lists.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(12));
