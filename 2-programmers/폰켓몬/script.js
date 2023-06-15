function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

console.log(solution([3, 1, 2, 3])); // 2개 (key 종류 3개지만 2개뽑아야됨 N/2 규칙)
console.log(solution([3, 3, 3, 2, 2, 2])); // 3개지만 2개 추출 (key 종류)
console.log(solution([1, 2, 3, 4, 2, 2])); // 3개지만 2개 추출 (key 종류)

// [3,1,2,3]	2
// [3,3,3,2,2,4]	3
// [3,3,3,2,2,2]	2
