function solution(arr, intervals) {
  const [startA, endA] = intervals[0];
  const [startB, endB] = intervals[1];
  return [...arr.slice(startA, endA + 1), ...arr.slice(startB, endB + 1)];
}

console.info(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3],
      [0, 4],
    ]
  )
);
