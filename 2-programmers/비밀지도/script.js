function solution(n, arr1, arr2) {
  return arr1.map((x, i) => {
    const y = arr2[i];
    const merged = (x | y).toString(2).padStart(n, "0");
    return merged.replaceAll("1", "#").replaceAll("0", " ");
  });
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
// ["#####","# # #", "### #", "# ##", "#####"]

// const arrOne = arr1.map((x) => x.toString(2).padStart(n, "0"));
// const arrTwo = arr2.map((y) => y.toString(2).padStart(n, "0"));
// const results = [];
// const words = [];

// Array.from({ length: n }, (_, i) => i).forEach((_, i) => {
//   const a = arrOne[i];
//   const b = arrTwo[i];

//   for (let p = 0; p < a.length; p++) {
//     results.push(a[p] | b[p]);
//   }
// });

// for (let i = 0; i < results.length / n; i++) {
//   words.push(
//     results
//       .slice(i * n, n * (i + 1))
//       .join("")
//       .replaceAll("1", "#")
//       .replaceAll("0", " ")
//   );
// }

// return words;
