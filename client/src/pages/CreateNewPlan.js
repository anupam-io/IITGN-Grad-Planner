import React, { useState, useEffect, Component } from "react";
import axios from "axios";

import Semester from "../components/Semester";
import { Form, Button, Col, Row } from "react-bootstrap";
import saveMyPlan from "./../services/saveMyPlan";
import loadMyPlan from "./../services/loadMyPlan";
import { Input } from "semantic-ui-react";

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
      term: "",
    };
    this.loadDeafaultSem();
  }

  updateMainData = (attr, sem, course, val) => {
    console.log("updateMainData() called on: ", val);
    let temp = this.state.mainData;
    temp[sem][course][attr] = val;

    this.setState({
      mainData: temp,
      term: "",
    });
  };

  addCourse = (sem) => {
    console.log("addCourse() called on: ", sem);
    let temp = this.state.mainData;
    temp[sem].push(["", "", 4, "Other"]);

    this.setState({
      mainData: temp,
    });
  };

  saveMyPlan = async (e) => {
    e.preventDefault();
    console.log("Saving as: ", this.state.term);
    await saveMyPlan(this.state.term, this.state.mainData);
  };

  loadMyPlan = async (e) => {
    e.preventDefault();
    console.log("Loading plan: ", this.state.term);
    let res = await loadMyPlan(this.state.term);
    if(res.data.status){
      this.setState({
        mainData: res.data.data
      });
    }
  };

  setTerm = (e) => {
    this.setState({
      term: e,
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }} className="App p-0">
        <div className="jumbotron">
          <div className="display-1">Modern Graduation Planner</div>
          <h3 className="lead">You graduation in your hands</h3>
        </div>

        {this.state.mainData.map((value, index) => {
          return (
            <div className="my-4" key={index}>
              <Semester
                number={index}
                data={value}
                updateMainData={this.updateMainData}
                addCourse={this.addCourse}
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
