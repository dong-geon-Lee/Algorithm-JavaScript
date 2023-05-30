function solution(n) {
  let arr = [];
  let num = 0;

  while (arr.length !== n && ++num) {
    if (num % 3 !== 0 && !num.toString().includes("3")) {
      arr.push(num);
    }
  }

  console.log(arr);
  return arr.pop();
  // return [...Array(n * 2)]
  //   .map((_, i) => i + 1)
  //   .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}

console.log(solution(40));
