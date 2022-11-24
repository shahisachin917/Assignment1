import React from "react";
import "./App.css";

function App() {
  const numbers = [10, 11, 12, 13, 14];

  let singleNumber;

  // Not valid
  // const result = for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
  // }

  // Not valid
  // const output = if(true) {
  //   console.log('Hello')
  // }

  //  () => {}
  // function () {}

  function add(a, b) {
    return a + b;
  }

  add(2, 3);

  for (let i = 0; i < numbers.length; i++) {
    singleNumber = numbers[i];
  }

  console.log(singleNumber);

  // const numbers = [10, 11, 12, 13, 14];

  return (
    <>
      {numbers.map((item, i) => (
        <div className="box" key={i}>
          Element {i + 1}:{item}
        </div>
      ))}
    </>
  );
}

export default App;
