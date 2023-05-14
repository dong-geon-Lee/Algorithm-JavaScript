function solution(s, n) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    let shiftedCode;

    if (charCode >= 65 && charCode <= 90) {
      shiftedCode = ((charCode - 65 + n) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      shiftedCode = ((charCode - 97 + n) % 26) + 97;
    } else {
      shiftedCode = charCode;
    }

    result += String.fromCharCode(shiftedCode);
  }

  return result;
}

console.log(solution("a B z", 4));
