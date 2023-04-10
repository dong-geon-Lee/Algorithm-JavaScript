// 문제: 대문자 A => #

function mySolution(word) {
  let answer;

  answer = word
    .split("")
    .map((x) => (x === "A" ? (x = "#") : x))
    .join("");

  return answer;
}

let word = "BANANA";
console.log(mySolution(word));

function solution(word) {
  let answer = "";

  for (let x of word) {
    if (x === "A") {
      answer += "#";
    } else {
      answer += x;
    }
  }

  //  또 다른 솔루션
  // let answer = word;
  // answer = answer.replace(/A/g, '#');

  // return answer;
}

console.log(solution(word));
