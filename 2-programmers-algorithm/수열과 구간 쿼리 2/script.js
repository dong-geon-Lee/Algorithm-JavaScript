function solution(arr, queries) {
  const result = [];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    let minNum = -1;

    for (let j = s; j <= e; j++) {
      if (arr[j] > k && (arr[j] < minNum || minNum === -1)) {
        minNum = arr[j];
      }
    }

    result.push(minNum);
  }

  return result;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
);
