function solution(name, yearning, photo) {
  let answer = [];

  for (let i = 0; i < photo.length; i++) {
    const list = photo[i];
    const selectedPhoto = list
      .map((x) => name.indexOf(x))
      .reduce((acc, cur) => {
        return (acc += yearning[cur] ?? 0);
      }, 0);

    answer.push(selectedPhoto);
  }

  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
); // [19, 15, 6]
