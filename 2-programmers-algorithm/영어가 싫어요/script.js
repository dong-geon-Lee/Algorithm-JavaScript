function solution(numbers) {
  const words = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  let answer = numbers;
  for (let i = 0; i < 10; i++) {
    const regex = new RegExp(words[i], "g");
    answer = answer.replace(regex, i);
  }
  return parseInt(answer);
}

console.log(solution("onetwothreefourfivesixseveneightnine"));
