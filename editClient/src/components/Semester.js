import React, { useState, useEffect } from "react";
import SingleCourse from "./SingleCourse";

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
        {props.data.map((number, index) => {
          return (
            <SingleCourse
              name={props.data[index].name}
              id={props.data[index].name}
              credits={props.data[index].name}
              updateMainData={props.updateMainData}
              key={number}
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