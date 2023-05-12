function solution(str) {
  return [...str]
    .map((x) => (x.charCodeAt() < 90 ? x.toLowerCase() : x.toUpperCase()))
    .join("");
}

console.log(solution("aBcDeFg"));
