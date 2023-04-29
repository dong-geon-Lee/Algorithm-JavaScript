function solution(dots) {
  const xValues = dots.map((x) => x[0]);
  const yValues = dots.map((y) => y[1]);
  const width = Math.max(...xValues) - Math.min(...xValues);
  const height = Math.max(...yValues) - Math.min(...yValues);
  return width * height;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
