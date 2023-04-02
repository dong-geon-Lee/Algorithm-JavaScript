// 문제:
// function solution(n) {
//   const answer = n
//     .toString()
//     .split("")
//     .map((x) => parseInt(x))
//     .reduce((acc, cur) => acc + cur, 0);
//   return answer;
// }

// console.log(solution(123));

// function solution(s) {
//   let answer;
//   if (s.length === 4 || s.length === 6) {
//     let list = s.split("").map((x) => parseInt(x));
//     answer = !list.includes(NaN);
//     return answer;
//   }

//   return false;
// }

// console.log(solution("1211"));

function solution(n) {
  console.log(n);

  let c = [[], [], []];

  for (let i = 0; i < c.length; i++) {
    for (let j = 0; j < n; j++) {
      console.log("반복 횟수", i, j);
      c[i].push(j);
    }
  }

  console.log(c);
  let answer = [[]];
  return answer;
}

console.log(solution(2));
