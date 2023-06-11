// 문제:

// function mySolution(str) {
//   const datas = str.split(" ").map((x) => {
//     if (x.includes(";") || x.includes(",") || x.includes(":")) {
//       return x.slice(0, x.length - 1).toLowerCase();
//     }
//     return x.toLowerCase();
//   });

//   let count = 0;

//   for (let i = 0; i < datas.length; i++) {
//     if (datas[i].split("").reverse().join("") === datas.pop()) count++;
//   }

//   return count === datas.length ? "YES" : "NO";
// }

// let str = "found7, time: study; Yduts; emit, 7Dnuof";
// console.log(mySolution(str));

/*
 * 문제에 대한 관점의 차이! 무조건 단어 별로 나눠서 역순으로 비교를 진행해야된다고
 * 생각 했는데 여기에서는 아예 한 문장으로 묶어서 해결했네?
 * 문제의 조건이 똑같은 문자열을 뒤집어 놓은 것을 str의 매개변수로 두었기 떄문에 가능했던것
 */

function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
