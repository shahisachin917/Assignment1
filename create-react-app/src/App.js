import React from "react";
import "./App.css";

function App() {
  const myCountry = "Nepal";
  const myName = "Gorakh";
  const favNumber = 7;
  // const age = 30;
  let age = 30;

  age = 32;

  return (
    <>
      <h1>My Country Name: {myCountry}</h1>
      <h2>My Name: {myName}</h2>
      <h2>My Favourite Number: {favNumber}</h2>
      <h2>My Age: {age}</h2>

      <div className="large-screen">I am only visible in large screen</div>
      <div className="small-screen">I am only visible in small screen</div>
      <button className="clickButton">Click Me</button>

      <h1 className="first">This is a heading</h1>
      <h1 className="first">This is a heading</h1>
      <h1>This is a heading</h1>
    </>
  );
}

export default App;
