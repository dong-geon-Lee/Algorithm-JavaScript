function solution(my_string) {
  let lists = my_string.split(" ");

  for (let i = 1; i < lists.length; i += 2) {
    const operator = lists[1];
    const firstNumber = parseInt(lists[0]);
    const lastNumber = parseInt(lists[i + 1]);

    if (operator === "+") {
      return firstNumber + lastNumber;
    } else {
      return firstNumber - lastNumber;
    }
  }
}

console.log(solution("20000 - 2000"));
