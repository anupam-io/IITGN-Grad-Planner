import "./App.css";
import React, { useState, useEffect } from "react";

import Semester from "./components/Semester";

function App() {
  let [mainData, setMainData] = useState([
      {
        courses: ["FP 100", "MA 101", "ES 101", "ES 103", "LS 101", "PE 101"],
        _id: "605371436b4f8dff00e9578e",
        sem: 1,
      },
      {
        courses: [
          "HS 151",
          "MA 102",
          "ES 104",
          "ES 105",
          "ES 106",
          "PH 101",
          "CH 202",
          "PE 102",
          "FP 101",
        ],
        _id: "605371436b4f8dff00e9578f",
        sem: 2,
      },
      {
        courses: [
          "HS 211",
          "MA 201",
          "ES 201",
          "ES 203",
          "ES 242",
          "CH 201",
          "PH 102",
        ],
        _id: "605371436b4f8dff00e95790",
        sem: 3,
      },
      {
        courses: ["MA 202", "ES 301", "CS 322", "ES 202", "ES 215"],
        _id: "605371436b4f8dff00e95791",
        sem: 4,
      },
      {
        courses: ["CS 301", "CS 302"],
        _id: "605371436b4f8dff00e95792",
        sem: 5,
      },
      {
        courses: ["CS 327", "CS 328"],
        _id: "605371436b4f8dff00e95793",
        sem: 6,
      },
    ]);

  useEffect(() => {
    // Load initial data from API
    console.log("Constructor App.js");
  });

  const updateMainData = (attr, sem, course, val) => {
    console.log("New courseId: ", val);

    mainData[sem].courses[attr] = val;
  };

  const addCourse = (sem) => {
    console.log("addCourse() called on: ", sem);
    mainData[sem].courses.push("Dummy 101");
    let new1 = mainData;
    console.log(mainData[sem].courses);
    

    setMainData(new1);
  };

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

      {mainData.map((value, index) => {
        return (
          <div className="my-4" key={index}>
            <Semester
              number={index + 1}
              data={value.courses}
              updateMainData={updateMainData}
              addCourse={addCourse}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
