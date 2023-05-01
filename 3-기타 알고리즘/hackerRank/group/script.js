function solution(arr) {
  console.log(arr);

  let len = arr.length - 1;
  let group1 = [];
  let group2 = [];

  for (let i = 0; i < arr.length; i++) {
    group1.push(arr[i][i]);
    group2.push(arr[len - i][i]);
  }

  let sum1 = group1.reduce((acc, cur) => acc + cur);
  let sum2 = group2.reduce((acc, cur) => acc + cur);
  return Math.abs(sum1 - sum2);
}

console.log(
  solution([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
