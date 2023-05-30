function solution(picture, k) {
  return picture
    .map((row) => {
      const enlargedRow = row.split("").map((pixel) => pixel.repeat(k));
      return Array(k).fill(enlargedRow.join(""));
    })
    .flat();
}

console.log(
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
);
