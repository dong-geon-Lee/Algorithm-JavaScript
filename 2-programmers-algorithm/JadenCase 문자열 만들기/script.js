function solution(s) {
  return s
    .split(" ")
    .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join(" ");
}

console.log(solution("3people unFollowed me"));
