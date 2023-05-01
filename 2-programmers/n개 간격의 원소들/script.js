function solution(num_list, n) {
  return num_list.filter((_, idx) => idx % n === 0);
}

console.log(solution([4, 2, 6, 1, 7, 6], 4));
// *good
