function solution(num_list) {
  let odd = num_list.filter((x) => x % 2 === 1);
  let even = num_list.filter((x) => x % 2 === 0);
  let newOdd = parseInt(odd.join(""));
  let newEven = parseInt(even.join(""));
  return newOdd + newEven;
}

console.log(solution([3, 4, 5, 2, 1]));
