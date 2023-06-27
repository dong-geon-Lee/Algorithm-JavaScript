function solution(quiz) {
  console.log(quiz);

  let results = [];

  quiz.forEach((_, i) => {
    let newCdn = quiz[i].split(" ").map((x) => x);

    if (newCdn[1] === "+") {
      results.push(+newCdn[0] + +newCdn[2] === +newCdn[4] ? "O" : "X");
    } else {
      results.push(+newCdn[0] - +newCdn[2] === +newCdn[4] ? "O" : "X");
    }
  });

  return results;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); // ["X", "O"]
