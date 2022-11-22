import React from "react";
import "./App.css";

import { add, output } from "./utils/utility";

const App = function () {
  const sum = add(5, 7);
  const result = output(5);

  return (
    <>
      <h1>Result coming from sum function: {sum + 20}</h1>
      <h1>Result coming from output function: {result}</h1>
    </>
  );
};

// Seperation of Concern

export default App;
