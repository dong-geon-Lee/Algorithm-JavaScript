function solution(A, B) {
  return A.map((arr1, idx1) => arr1.map((val, idx2) => val + B[idx1][idx2]));
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
