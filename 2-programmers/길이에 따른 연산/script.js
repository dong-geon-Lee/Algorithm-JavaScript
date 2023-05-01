function solution(num_list) {
  return num_list.reduce((acc, cur, _, arr) => {
    return arr.length >= 11 ? acc + cur : acc * cur;
  });
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
