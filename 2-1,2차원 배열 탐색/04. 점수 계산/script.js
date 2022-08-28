function mySolution(arr) {
  let total = 0;
  let numArr = arr.join("").split("0");

  for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j <= numArr[i].length; j++) {
      total = total + j;
    }
  }

  return total;
}

let str = [1, 0, 0, 0, 1, 1, 0, 1, 1, 0];
console.log(mySolution(str));

function solution(arr) {
  let count = 0;
  let answer = 0;

  for (let x of arr) {
    console.log(x, " 순회");
    if (x === 1) {
      ++count;
      answer += count;
    } else {
      count = 0;
    }
  }

  return answer;
}

console.log(solution(str));
