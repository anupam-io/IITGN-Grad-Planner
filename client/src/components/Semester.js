import React, { useState, useEffect } from "react";
import SingleCourse from "./SingleCourse";
import { Button } from "react-bootstrap";

function Semester(props) {
  useEffect(() => {
    console.log("Constructor Semester.js");
  });

  const addCourse = () => {
    props.addCourse(props.number - 1);
  };

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
          {props.data.map((value, index) => {
            return (
              <SingleCourse
                name={value.name}
                id={value.id}
                credits={value.credits}
                type={value.type}
                updateMainData={props.updateMainData}
                key={index}
                sem={props.number}
                index={index}
              />
            );
          })}
        </div>

        <div className="col-1" style={{ margin: "auto" }}>
          <Button
            onClick={addCourse}
            style={{ fontSize: "1em" }}
            variant="danger"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Semester;
