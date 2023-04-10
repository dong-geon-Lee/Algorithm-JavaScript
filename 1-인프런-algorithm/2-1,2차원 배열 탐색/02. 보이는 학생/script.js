// 문제:

function mySolution(arr) {
  let count = 0;
  let maxNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
      count++;
    }
  }

  return count;
}

let str = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(mySolution(str));

function solution(arr) {
  let answer = 1,
    max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

console.log(solution(str));
