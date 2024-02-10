const App = () => {
  //* 1-1
  // const fruits = [];
  // fruits.push("banana", "apple", "peach");
  // fruits[5] = "mango";

  // console.log(Object.keys(fruits));
  // console.log(fruits);
  // console.log(fruits.length);

  // fruits.length = 2;
  // console.log(fruits);

  //* 1-2
  // const arr = [1, 2, 3, 4, 5];
  // const arr2 = arr.slice().copyWithin(0, 1, 2);
  // console.log(arr2);

  // const fruitsString = fruits.join(",");
  // console.log(fruitsString);

  // const newStr = fruitsString.split(",");
  // console.log(newStr.indexOf("apple"));

  // const app = ["Apple", "Banana"];

  // console.log(app.includes("Banana"));
  // console.log(app.includes("App"));
  // console.log(app.indexOf("1") === -1);

  // app.pop();
  // console.log(app);

  //* 1-3
  // const lists = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
  // const start = -3;
  // const removedItems = lists.splice(start);
  // console.log(removedItems);

  // const list = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
  // const start = 2;
  // const removedItems = list.splice(start);
  // console.log(removedItems);

  // removedItems.shift();
  // console.log(removedItems);
  // console.log(list);
  // ["Apple", "Banana"]
  // ["Strawberry", "Mango", "Cherry"]

  //* 1-4
  // const fruits = ["Apple", "Mango", "Cherry"];
  // for (const fruit of fruits) {
  //   console.log(fruit);
  // }

  // fruits.forEach((item, index, array) => {
  //   console.log(item, index);
  // });

  //* 1-5
  const fruits = ["Apple", "Banana", "Strawberry"];
  const moreFruits = ["Mango", "Cherry"];
  const combinedFruits = fruits.concat(moreFruits);
  console.log(combinedFruits);

  const fruitsCopy2 = Array.from(fruits);
  console.log(fruitsCopy2);

  const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));

  return (
    <div className="App">
      <h1>js 실습</h1>
    </div>
  );
};

export default App;
