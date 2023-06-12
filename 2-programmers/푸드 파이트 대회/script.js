function solution(food) {
  let words = "";

  for (let i = 1; i < food.length; i++) {
    words += i.toString().repeat(food[i] / 2);
  }

  return words + "0" + [...words].reverse().join("");
}

console.log(solution([1, 7, 1, 2]));

// * 나의 풀이
// const foodLists = food.map((_, i) => i.toString().repeat(food[i]));
// const newLists = foodLists.map((x, i) => {
//   if (i !== 0) {
//     if (x.length % 2 === 1) return x.slice(0, x.length - 1);
//     return x;
//   }
//   return x;
// });
// const results = newLists.map((x) => {
//   if (x !== "0") {
//     return x.slice(0, x.length / 2);
//   } else {
//     return x;
//   }
// });
// return (
//   results.join("").slice(1) +
//   results.join("").slice(0, 1) +
//   results.join("").split("").reverse().join("").slice(0, -1)
// );

// * 다른 풀이
// function solution(food) {
//   let words = "";

//   words = food
//     .slice(1)
//     .map((x, i) => (i + 1).toString().repeat(x / 2))
//     .join("");

//   return words + "0" + [...words].reverse().join("");
// }
