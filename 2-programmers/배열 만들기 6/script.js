function solution(arr) {
  // let stk = [];
  // let condition = stk.length > 0 && stk[stk.length - 1];

  // for (let i = 0; i < arr.length; i++) {
  //   if (stk.length === 0) {
  //     stk.push(arr[i]);
  //   } else if (condition === arr[i]) {
  //     stk.pop();
  //   } else if (condition !== arr[i]) {
  //     stk.push(arr[i]);
  //   }
  // }

  // return stk.length === 0 ? [-1] : stk;

  let stk = [];

  arr.forEach((x) => {
    if (x !== stk[stk.length - 1]) stk.push(x);
    else stk.splice(-1);
  });

  if (stk.length === 0) stk.push([-1]);
  return stk;
}

console.log(solution([0, 1, 1, 1, 0]));
