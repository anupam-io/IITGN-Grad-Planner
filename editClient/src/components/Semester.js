import React, { useState, useEffect } from "react";
import SingleCourse from "./SingleCourse";

var hello = [1, 2, 3, 4, 5, 6];

function Semester(props) {
  useEffect(() => {
    // Contructor
    });

  return (
    <div
    className="m-0 py-4"
    style={{ backgroundColor: "#F5D7E3", borderRadius: "5px" }}
  >
    <h2>Semester {props.number}</h2>
    <div className="row">
      <div className="col-1" style={{ margin: "auto" }}>
        512
      </div>
      <div className="row col-10">
        {hello.map((number, index) => {
          return (
            <SingleCourse
              name="Design courses for engineers"
              id="DES 89"
              credits={number}
            />
          );
        })}
      </div>
      <div className="col-1" style={{ margin: "auto" }}>
        +
      </div>
    </div>
  </div>

  );
}

export default Semester;