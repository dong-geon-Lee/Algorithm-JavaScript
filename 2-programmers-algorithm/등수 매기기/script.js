function solution(score) {
  const avg = score.map((x) => (x[0] + x[1]) / 2);
  const sorted = avg.slice().sort((a, b) => b - a);
  return avg.map((x) => sorted.indexOf(x) + 1);
}

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
