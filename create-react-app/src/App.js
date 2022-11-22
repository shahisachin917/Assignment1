import React from "react";
import "./App.css";

const App = function () {
  // Function Declaration
  // function add(a, b) {
  //   return a + b;
  // }

  // Function Expression
  // const add = function (a, b) {
  //   return a + b;
  // };

  // Arrow Function
  // const add = (a, b) => {
  //   return a + b;
  // };
  // const add = (a, b) => {
  //   console.log(a);
  //   console.log(b);
  //   return a + b;
  // };

  const add = (a, b) => a + b;

  const sum = add(5, 7);
  const output = add(50, 70);

  return (
    <>
      <h1>First Sum: {sum + 20}</h1>
      <h1>Second Sum: {output}</h1>
    </>
  );
};

export default App;
