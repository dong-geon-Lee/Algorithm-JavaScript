// 문제:

function mySolution(arr) {
  // 코드를 넣으세요
  let total = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 7; j++) {
      if (total - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(mySolution(arr));

function solution() {
  // 코드를 넣으세요
}

console.log(solution());
