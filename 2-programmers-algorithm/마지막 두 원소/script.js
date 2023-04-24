function solution(num_list) {
  const x = num_list[num_list.length - 1];
  const y = num_list[num_list.length - 2];
  const new_num = x > y ? x - y : x * 2;
  return [...num_list, new_num];
}

console.log(solution([2, 1, 6]));
// *good
