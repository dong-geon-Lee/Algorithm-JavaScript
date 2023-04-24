function solution(my_strings, parts) {
  return my_strings
    .map((x, i) => {
      const [start, end] = parts[i];
      return x.slice(start, end + 1);
    })
    .join("");
}

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);
