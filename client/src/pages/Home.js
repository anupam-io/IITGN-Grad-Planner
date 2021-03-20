import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div
        className="jumbotron display-3"
        style={{
          margin: "30px",
          textAlign: "center"
        }}
      >
        Welcome to the your graduation planner.
      </div>
    </div>
  );
}

export default Home;
