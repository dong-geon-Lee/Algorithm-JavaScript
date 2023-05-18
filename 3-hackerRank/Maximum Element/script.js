function getMax(operations) {
  let stack = [];
  let result = [];

  for (let i = 0; i < operations.length; i++) {
    const [x, y] = operations[i].split(" ");

    if (x === "1") {
      stack.push(+y);
    } else if (x === "2") {
      stack.pop();
    } else {
      result.push(Math.max(...stack));
    }
  }

  return result;
}

console.log(
  getMax(["1 97", "2", "1 20", "2", "1 26", "1 20", "2", "3", "1 91", "3"])
);
