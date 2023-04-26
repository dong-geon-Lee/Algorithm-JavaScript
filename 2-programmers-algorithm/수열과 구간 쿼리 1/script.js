function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [a, b] = queries[i];
    for (let j = a; j <= b; j++) arr[j]++;
  }

  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
);
