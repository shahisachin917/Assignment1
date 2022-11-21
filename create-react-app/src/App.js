import React from "react";
import "./App.css";

function App() {
  const myCountry = "Nepal";
  const myName = "Gorakh";
  const favNumber = 7;
  // const age = 30;
  let age = 30;

  age = 31;

  return (
    <>
      <h1>My Country Name: {myCountry}</h1>
      <h2>My Name: {myName}</h2>
      <h2>My Favourite Number: {favNumber}</h2>
      <h2>My Age: {age}</h2>
    </>
  );
}

export default App;
