function solution(arr, k) {
  let uniqeWords = [...new Set(arr)];

  if (uniqeWords.length < k) {
    for (let i = uniqeWords.length; i < k; i++) {
      uniqeWords.push(-1);
    }
  } else {
    uniqeWords = uniqeWords.slice(0, k);
  }

  return uniqeWords;
}

console.log(solution([0, 1, 1, 2, 2, 3], 3)); // [0, 1, 2]
// console.log(solution([0, 1], 3)); // [0, 1, 2]
