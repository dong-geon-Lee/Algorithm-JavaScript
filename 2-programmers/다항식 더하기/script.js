function solution(polynomial) {
  let xSum = 0;
  let constantSum = 0;

  polynomial.split(" + ").forEach((term) => {
    if (term.includes("x")) {
      const coefficient = term.replace("x", "") || "1";
      xSum += parseInt(coefficient);
    } else {
      constantSum += parseInt(term);
    }
  });

  let result = "";
  if (xSum !== 0) {
    result += `${xSum === 1 ? "" : xSum}x`;
  }
  if (constantSum !== 0) {
    result += (result ? " + " : "") + constantSum;
  }

  return result;
}

solution("3x + 7 + x");
