function solution(k, score) {
  // * 내가 짠 코드
  // let arr = [];
  // let results = [];

  // for (let i = 0; i < score.length; i++) {
  //   if (i < k) {
  //     arr.push(score[i]);
  //     results.push(Math.min(...arr));
  //   } else {
  //     const idx = arr.findIndex((a) => a === Math.min(...arr));
  //     if (Math.min(...arr) > score[i]) {
  //     } else {
  //       arr[idx] = score[i];
  //     }
  //     results.push(Math.min(...arr));
  //   }
  // }

  // return results;

  // * 배우고 싶은 코드
  let answer = [];

  return score.reduce((acc, cur) => {
    answer.push(cur);
    answer = answer.sort((a, b) => b - a).slice(0, k);
    return [...acc, Math.min(...answer)];
  }, []);
}

console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
