function solution(s) {
  const stack = [];
  for (const char of s) {
    if (stack.length > 0 && char === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  const reduced = stack.join("");
  return reduced.length > 0 ? reduced : "Empty String";
}

console.log(solution("aaabccddd"));
