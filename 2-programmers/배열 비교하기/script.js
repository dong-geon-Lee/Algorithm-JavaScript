function solution(arr1, arr2) {
  let arr1Total = arr1.reduce((acc, cur) => acc + cur);
  let arr2Total = arr2.reduce((acc, cur) => acc + cur);

  if (arr1.length === arr2.length && arr1Total === arr2Total) return 0;
  if (arr1.length > arr2.length) return 1;
  if (arr1.length === arr2.length) return arr1Total > arr2Total ? 1 : -1;
  if (arr1.length < arr2.length) return -1;
}

console.log(solution([49, 13], [70, 11, 2]));
