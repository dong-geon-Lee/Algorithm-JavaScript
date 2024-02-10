const App = () => {
  //* 1-1
  const fruits = [];
  fruits.push("banana", "apple", "peach");
  fruits[5] = "mango";

  console.log(Object.keys(fruits));
  console.log(fruits);
  console.log(fruits.length);

  fruits.length = 2;
  console.log(fruits);

  //* 1-2

  return (
    <div className="App">
      <h1>js 실습</h1>
    </div>
  );
};

export default App;
