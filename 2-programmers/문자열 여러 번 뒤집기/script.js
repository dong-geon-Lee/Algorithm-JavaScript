function solution(my_string, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [x, y] = queries[i];
    const wordLists = my_string
      .slice(x, y + 1)
      .split("")
      .reverse()
      .join("");

    my_string = my_string.slice(0, x) + wordLists + my_string.slice(y + 1);
  }

  return my_string;
}

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
