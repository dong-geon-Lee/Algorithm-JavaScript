function solution(arr) {
  const stk = [];
  let i = 0;

  while (arr.length > i) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (stk.at(-1) < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else {
      stk.pop();
    }
  }

  return stk;
}

console.log(solution([1, 4, 2, 5, 3]));

//* `[] 빈 배열 => arr[i]를 stk에 추가 후 i에 1 더함`
