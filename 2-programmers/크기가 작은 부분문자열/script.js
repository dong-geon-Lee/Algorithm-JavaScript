function solution(t, p) {
  let lists = [];

  [...t].forEach((_, i) => {
    if (t.slice(i, i + p.length).length === p.length) {
      lists.push(t.slice(i, i + p.length));
    }
  });

  return lists.filter((list) => +list < +p).length;
}

console.log(solution("3141592", "271")); // 2
console.log(solution("10203", "15")); // 3
console.log(solution("500220839878", "7")); // 8
