import React from "react";
import "./App.css";

const App = function () {
  function printNumber(firstNumber, secondNumber, thirdNumber) {
    console.log(typeof firstNumber);
    console.log(typeof secondNumber);
    console.log(typeof thirdNumber);
    return firstNumber + secondNumber + thirdNumber;
  }

  const result = printNumber(1, 2, "3");

  console.log(typeof result);

  console.log(result + 7);

  return <>{result}</>;
};

export default App;
