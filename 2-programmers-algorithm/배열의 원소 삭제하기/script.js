function solution(arr, delete_list) {
  return arr.filter((x) => !delete_list.includes(x));
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
