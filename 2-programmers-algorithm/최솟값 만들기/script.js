function solution(A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    answer += sortedA[i] * sortedB[i];
  }

  return answer;
}

// console.log(solution([1, 2], [3, 4]));
console.log(solution([1, 4, 2], [5, 4, 4]));
