/* 문제: 정규표현식과 isNaN 사용법에 대해서 알 수 있었다.
isNaN은 문자열 숫자를 제외시키고 문자열을 가져올 수 있다. 
이거 꽤나 유용한 메서드라고 할 수 있겠다. 
*/

function mySolution(str) {
  const numbers = str.replace(/[^0-9]/g, "");
  return parseInt(numbers);
}

let str = "g0en2T0s8eSoft";
console.log(mySolution(str));

function solution(s) {
  let answer = "";
  for (const x of s) {
    if (!isNaN(x)) answer += x;
  }

  return parseInt(answer);
}

console.log(solution(str));
