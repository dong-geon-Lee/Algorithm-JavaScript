function solution(s) {
  const lists = s.split(" ");
  const numbers = [];
  let total = 0;

  for (let i = 0; i < lists.length; i++) {
    if (lists[i] === "Z") {
      const value = numbers.pop();
      total -= value;
    } else if (!isNaN(parseInt(lists[i]))) {
      const value = parseInt(lists[i]);
      numbers.push(value);
      total += value;
    }
  }

  return total;
}

console.log(solution("1 2 Z 3"));
