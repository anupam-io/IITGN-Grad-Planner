import React, { Component } from "react";
import axios from "axios";

import Semester from "../components/Semester";
import { Form, Button, Col, Row } from "react-bootstrap";
import saveMyPlan from "./../services/saveMyPlan";
import loadMyPlan from "./../services/loadMyPlan";
import {} from "./../services/contraints";

class CreateNewPlan extends Component {
  constructor() {
    super();
    this.state = {
      mainData: [],
      term: "",
      semSum: [0, 0, 0, 0, 0, 0, 0, 0],
    };
    this.loadDeafaultSem();
  }

  loadDeafaultSem = async () => {
    let res = await axios.get(`/defsem`);
    await this.setState({
      mainData: res.data,
    });
    alert("Default values loaded for CSE.");
  };

  updateMainData = async(attr, sem, course, val) => {
    console.log("updateMainData() called on: ", val);
    console.log(attr);
    let temp = this.state.mainData;
    temp[sem][course][attr] = val;

    await this.setState({
      mainData: temp,
    });
  };

  addCourse = async(sem) => {
    console.log("addCourse() called on: ", sem);
    let temp = this.state.mainData;
    temp[sem].push(["", "", 4, "Other"]);

    await this.setState({
      mainData: temp,
    });
  };

  deleteCourse = async(sem, courseIndex)=>{
    console.log("deleteCourse() call on: ", sem, courseIndex);
    let temp = this.state.mainData;
    let _temp = temp[sem];

    let delEl = _temp.splice(courseIndex, 1);
    console.log(delEl);
    temp[sem] = _temp;
    
    await this.setState({mainData: [],});
    await this.setState({mainData: temp,});
  }

  saveMyPlan = async (e) => {
    e.preventDefault();
    console.log("Saving as: ", this.state.term);
    await saveMyPlan(this.state.term, this.state.mainData);
    alert("Plan saved as: " + this.state.term + ".");
  };

  loadMyPlan = async (e) => {
    e.preventDefault();
    console.log("Loading plan: ", this.state.term);
    let res = await loadMyPlan(this.state.term);
    if (res.data.status) {
      await this.setState({
        mainData: res.data.data,
      });
      alert("Plan loaded as: " + this.state.term);
    } else {
      alert("Sorry, plan: " + this.state.term + " not found");
    }
  };

  setTerm = async(e) => {
    await this.setState({
      term: e,
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }} className="App p-0">
        <div className="jumbotron">
          <div className="display-1">Graduation Planner</div>
          <h3 className="lead">You graduation in your hands</h3>
        </div>

        {this.state.mainData.map((value, index) => {
          return (
            <div className="my-4" key={index}>
              <Semester
                deleteCourse={this.deleteCourse}
                number={index}
                data={value}
                updateMainData={this.updateMainData}
                addCourse={this.addCourse}
                sum={this.state.semSum[index]}
              />
            </div>
          );
        })}

        <Row className="p-2">
          <Col>
            <Button variant="warning">Check total credits</Button>
          </Col>
        </Row>

        <Row className="p-2">
          <Col>
            <Button variant="warning">Check total credit features</Button>
          </Col>
        </Row>

        <Row className="p-2">
          <Col>
            <Button variant="warning">Check total credit features</Button>
          </Col>
        </Row>

        <Row className="p-2">
          <Col>
            <Form onSubmit={this.saveMyPlan}>
              <Form.Group
                onChange={(e) => this.setTerm(e.target.value)}
                as={Col}
                controlId="formGridZip"
              >
                <Form.Control />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Plan
              </Button>
            </Form>
          </Col>
          <Col>
            <Form onSubmit={this.loadMyPlan}>
              <Form.Group
                onChange={(e) => this.setTerm(e.target.value)}
                as={Col}
                controlId="formGridZip"
              >
                <Form.Control />
              </Form.Group>

              <Button variant="primary" type="submit">
                Load Plan
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CreateNewPlan;
