function matchingStrings(stringList, queries) {
  return queries.map((q) => {
    return stringList.reduce((acc, cur) => {
      if (cur === q) acc += 1;
      return acc;
    }, 0);
  });
}

// function matchingStrings(stringList, queries) {
//   return queries.map((q) => {
//     let count = 0;
//     for (let i = 0; i < stringList.length; i++) {
//       if (stringList[i] === q) {
//         count++;
//       }
//     }
//     return count;
//   });
// }

console.log(
  matchingStrings(["ab", "abc", "ab", "def", "def"], ["ab", "def", "ghi"])
);
