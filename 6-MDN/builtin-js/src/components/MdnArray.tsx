import React from "react";

const MdnArray = () => {
  // const array1 = [5, 12, 8, 130, 44];
  // console.log(array1.at(0)); // 길이에 없는 인덱스인 경우 undefined 반환

  const cart = ["사과", "바나나", "배"];

  const returnLast = (arr: any) => {
    return arr.at(-1);
  };

  const item1 = returnLast(cart);
  console.log(item1);

  cart.push("오렌지");
  console.log(cart);

  const letters = ["a", "b", "c"];
  const numbers2: any = [1, [2, 3]];

  const resutls = letters.concat(numbers2);
  console.log(resutls);

  const num1 = [[1]];
  const num2: any = [2, [3]];

  const numbers = num1.concat(num2);

  // 결과는 [[1], 2, [3]]

  console.log(num1);
  // num1의 첫 번째 요소를 수정합니다.
  num1[0].push(4);
  console.log(num1);
  console.log(numbers);

  let arr = [1, 2, 3, 4, 5, 6, 9];

  console.log(arr);
  // 결과는 [[1, 4], 2, [3]]

  const array1 = ["a", "b", "c", "d", "e"];
  const results = array1.copyWithin(0, 1);
  console.log(results);

  let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8];

  numbers3.copyWithin(0, 4, 7);

  console.log(numbers3);

  const a: any = ["a", "b", "c"];
  for (const element of a.entries()) {
    console.log(element);
  }

  const array4 = [1, 2, 3, 4];

  // Fill with 0 from position 2 until position 4
  console.log(array4.fill(0, 2, 4));

  console.log(array4);

  return <div>MdnArray</div>;
};

export default MdnArray;
