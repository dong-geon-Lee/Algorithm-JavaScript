// 문제:

function mySolution(str) {
  let answer = [];
  let result = [];

  for (let i = 0; i < str.length; i++) {
    answer.push(str[i]);

    if (answer.indexOf(str[i]) === i) result.push(str[i]);
  }

  return result;
}

let str = ["hi", "po", "hi", "cu", "cu", "jk"];
console.log(mySolution(str));

function solution(s) {
  let answer = [];
  answer = s.filter((x, index) => s.indexOf(x) === index);

  return answer;
}

console.log(solution(str));
