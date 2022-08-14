// 문제:

function mySolution(str) {
  let answer = "";
  let middle = Math.ceil((str.length - 1) / 2);

  if (str.length % 2 === 0) {
    answer = str[middle - 1] + str[middle];
  } else {
    answer = str[middle];
  }

  return answer;
}

let str = "study";
console.log(mySolution(str));

function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substr(mid, 1);
  else answer = s.substr(mid - 1, 2);
  // if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  // else answer = s.substring(mid - 1, mid + 1);
  return answer;
}

console.log(solution(str));
