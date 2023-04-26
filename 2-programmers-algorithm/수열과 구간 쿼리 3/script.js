function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [a, b] = queries[i];
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
);

// *good!
