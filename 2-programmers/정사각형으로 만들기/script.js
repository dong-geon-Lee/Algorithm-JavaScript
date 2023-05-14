function solution(arr) {
  const numRows = arr.length;
  const numCols = arr[0].length;
  const maxLen = Math.max(numRows, numCols);

  for (let i = 0; i < maxLen; i++) {
    if (i >= numRows) arr.push(Array(numCols).fill(0));
    else for (let j = numCols; j < maxLen; j++) arr[i].push(0);
  }

  return arr;
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
);
