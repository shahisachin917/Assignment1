import React from "react";
import "./App.css";

import { add, output } from "./utils/utility";

const App = function () {
  const sum = add(5, 10);
  // passing values -> arguments
  const result = output(1);

  function print(greeting) {
    return greeting;
  }

  console.log(print());

  // const printValue = print();

  return (
    <>
      <div>{sum}</div>
      <div>{result}</div>
      <div>{print("Hello")}</div>
      <div>{print("Hi")}</div>
      {/* <div>{printValue}</div> */}
    </>
  );
};

// Seperation of Concern

export default App;
