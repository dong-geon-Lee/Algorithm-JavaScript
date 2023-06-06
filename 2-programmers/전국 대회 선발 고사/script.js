function solution(rank, attendance) {
  const candidates = [];

  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) candidates.push([i, rank[i]]);
  }

  candidates.sort((a, b) => a[1] - b[1]);

  return candidates
    .slice(0, 3)
    .reduce((acc, cur, idx) => acc + cur[0] * 100 ** (2 - idx), 0);
}

console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])
);
