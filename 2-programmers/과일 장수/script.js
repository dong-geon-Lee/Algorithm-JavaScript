function solution(k, m, score) {
  const sortedScore = [...score].sort((a, b) => b - a);
  const results = [];
  let sum = 0;

  for (let i = 0; i < sortedScore.length; i += m) {
    results.push(sortedScore.slice(i, m + i));
  }

  for (const group of results) {
    if (group.length === m) {
      sum += Math.min(...group) * m;
    }
  }

  return sum;
}
// console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
