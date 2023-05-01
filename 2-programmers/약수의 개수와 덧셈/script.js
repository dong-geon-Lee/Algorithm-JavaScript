// function solution(left, right) {
//   const arrLists = Array.from({ length: right - left + 1 }, (_, i) => i + left);

//   const results = arrLists.map((a, y) => {
//     return Array.from({ length: a }, (_, i) => i + 1).filter((x) => {
//       return arrLists[y] % x === 0;
//     });
//   });

//   return results
//     .map((x, i) => (x.length % 2 === 0 ? arrLists[i] : -arrLists[i]))
//     .reduce((acc, cur) => acc + cur);

// }

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      console.log(i);
      answer += i;
    }
  }
  return answer;
}

console.log(solution(24, 27));
