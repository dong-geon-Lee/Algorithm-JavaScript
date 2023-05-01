function solution(num_list) {
  return num_list.findIndex((x) => x < 0);
}

console.log(solution([12, 4, 15, 46, 38, -2, 15]));
