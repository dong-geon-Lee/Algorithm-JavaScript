function alternate(s) {
  const distinctChars = [...new Set(s)];
  let maxValidLength = 0;

  for (let i = 0; i < distinctChars.length - 1; i++) {
    for (let j = i + 1; j < distinctChars.length; j++) {
      const a = distinctChars[i];
      const b = distinctChars[j];

      const filteredString = s
        .split("")
        .filter((char) => char === a || char === b);

      if (isAlternate(filteredString)) {
        const currentLength = filteredString.length;
        maxValidLength = Math.max(maxValidLength, currentLength);
      }
    }
  }

  return maxValidLength;
}

function isAlternate(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return false;
  }
  return true;
}

console.log(alternate("beabeefeab"));
// babab
