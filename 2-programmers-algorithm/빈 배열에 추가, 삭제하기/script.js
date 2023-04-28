function solution(arr, flag) {
  let result = [];

  arr.map((x, idx) => {
    if (flag[idx]) result.push(...Array(x * 2).fill(x));
    else result.splice(result.length - x);
  });

  return result;
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
