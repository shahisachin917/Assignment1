import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      App
      <p>Hello</p>
      {/* block level html elements */}
      <span>I am span</span>
      {/* inline elements */}
      <div className="innerdiv">I am a first div inside another div</div>
      <div className="innerdiv">I am a second div inside another div</div>
      <div className="innerdiv">I am a third div inside another div</div>
      <div id="fourthdiv">I am a fourth div inside another div</div>
    </div>
  );
}

export default App;
