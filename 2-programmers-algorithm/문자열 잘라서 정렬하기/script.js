function solution(myString) {
  return myString
    .split("x")
    .sort()
    .filter((x) => x !== "");
}

console.log(solution("axbxcxdx"));
