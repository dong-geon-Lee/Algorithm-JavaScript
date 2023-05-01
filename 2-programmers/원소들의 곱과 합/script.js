function solution(num_list) {
  let cdn1 = num_list.reduce((acc, cur) => acc * cur);
  let cdn2 = num_list.reduce((acc, cur) => acc + cur);
  return cdn1 < cdn2 ** 2 ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1]));
