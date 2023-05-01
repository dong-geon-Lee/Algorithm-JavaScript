function solution(myString) {
  return [...myString.toLowerCase()]
    .map((x) => (x === "a" ? (x = "A") : x))
    .join("");
}

console.log(solution("PrOgRaMmErS"));
// * good
