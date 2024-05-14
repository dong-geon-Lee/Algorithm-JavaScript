const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(arr) {
  const [, ...members] = arr;
  const datas = members.map((member, idx) => {
    const [age, name] = member.split(" ");
    return { age: parseInt(age), name, idx };
  });

  const sortedDatas = datas.sort((a, b) => {
    if (a.age === b.age) {
      return a.index - b.index;
    }
    return a.age - b.age;
  });

  return sortedDatas.map((member) => `${member.age} ${member.name}`).join("\n");
}

console.log(solution(input));
