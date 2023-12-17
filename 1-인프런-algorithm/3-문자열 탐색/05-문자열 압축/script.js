// 문제:

function solutionMe(str) {
  const answers = [];
  const keywords = [...new Set(str)];
  const counts = keywords.slice().fill(0);

  for (let i = 0; i < keywords.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (keywords[i] === str[j]) counts[i]++;
    }
    if (counts[i] === 1) answers.push(keywords[i]);
    else answers.push(keywords[i] + counts[i].toString());
  }

  return answers.join("");
}

function solutionGPT(str) {
  let result = "";
  let count = 1;
  str += " ";

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      result += str[i];
      if (count > 1) result += count;
      count = 1;
    }
  }

  return result;
}

function solutionCourse(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
}

let str = "KKHSSSSSSSE";
console.log(solutionMe(str));
console.log(solutionGPT(str));
console.log(solutionCourse(str));

console.log("git work flow 연습");
console.log("두번쨰 git workd 연습");

console.log("test브랜치에서 dev 브랜치 업데이트 하기");

console.log("test 브랜치에서 작업 1");

console.log("test 브랜치에서 작업 2");
console.log("test 브랜치에서 작업 2");
