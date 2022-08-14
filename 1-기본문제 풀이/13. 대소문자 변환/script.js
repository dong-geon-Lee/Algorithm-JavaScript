// 문제:

function mySolution(str) {
  let answer = "";

  for (let x of str) {
    x === x.toLowerCase()
      ? (answer += x.toUpperCase())
      : (answer += x.toLowerCase());
  }

  return answer;
}

let str = "aAbBcCaaa";
console.log(mySolution(str));

function solution() {
  let answer = "";

  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }

  return answer;
}

console.log(solution());
