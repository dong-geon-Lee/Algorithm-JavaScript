function solution(s) {
  const words = s.split(" ").map((x) => {
    let str = "";

    for (let i = 0; i < x.length; i++) {
      if (i % 2 === 0) str += x[i].toUpperCase();
      else str += x[i].toLowerCase();
    }

    return str;
  });

  return words.join(" ");
}

console.log(solution("try hello world"));
