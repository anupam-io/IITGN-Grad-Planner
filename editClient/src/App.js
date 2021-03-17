import "./App.css";
import React, { useState, useEffect } from "react";

import Semester from "./components/Semester";

function App() {
  return (
    <div className="App p-3">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <div className="jumbotron">
        <div className="display-1">Modern Graduation Planner</div>
        <h3 className="lead">You graduation in your hands</h3>
      </div>

      {/* Semester 1 */}
      <Semester 
      number="90"
      />



    </div>
  );
}

export default App;
