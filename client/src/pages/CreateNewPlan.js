import React, { useState, useEffect, Component } from "react";
import axios from "axios";

import Semester from "../components/Semester";
import { Button, Col, Row } from "react-bootstrap";

class CreateNewPlan extends Component {
  loadDeafaultSem = async () => {
    let res = await axios.get(`/defsem`);
    this.setState({
      mainData: res.data,
    });
    return res;
  };
  constructor() {
    super();
    this.state = {
      mainData: [],
    };
    this.loadDeafaultSem();
  }

  updateMainData(attr, sem, course, val) {
    console.log("New courseId: ", val);
    // this.setState( state => update(state, {array: {$push: [4]}}) );

    // mainData[sem].courses[attr] = val;
  }

  addCourse = (sem) => {
    console.log("addCourse() called on: ", sem);
    let temp = this.state.mainData;
    temp[sem].courses.push("Dummy 101");

    this.setState({
      mainData: temp,
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }} className="App p-0">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <div className="jumbotron">
          <div className="display-1">Modern Graduation Planner</div>
          <h3 className="lead">You graduation in your hands</h3>
        </div>

        {this.state.mainData.map((value, index) => {
          return (
            <div className="my-4" key={index}>
              <Semester
                number={index + 1}
                data={value.courses}
                updateMainData={this.updateMainData}
                addCourse={this.addCourse}
              />
            </div>
          );
        })}

        <Row className="p-2">
          <Col>
            <Button>Check total credits</Button>
          </Col>
        </Row>

        <Row className="p-2">
          <Col>
            <Button>Check total credit features</Button>
          </Col>
        </Row>

        <Row className="p-2">
          <Col>
            <Button>Check total credit features</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateNewPlan;
