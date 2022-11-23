import React from "react";
import "./App.css";

import { add, output } from "./utils/utility";

const App = function () {
  const sum = add(5, 7);
  const result = output(15);

  return (
    <>
      <div>{sum}</div>
      <div>{result}</div>
      <a href="#">Hell0</a>
    </>
  );
};

// Seperation of Concern

export default App;
