function solution(myString) {
  return myString
    .split("")
    .map((x) => x.charCodeAt())
    .map((x, idx) => (x <= "l".charCodeAt() ? "l" : myString[idx]))
    .join("");
}

console.log(solution("abcdevwxyz", "lllllvwxyz"));
