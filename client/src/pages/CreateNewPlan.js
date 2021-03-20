import React, { Component } from "react";
import axios from "axios";

import Semester from "../components/Semester";
import { Form, Button, Col, Row } from "react-bootstrap";
import saveMyPlan from "./../services/saveMyPlan";
import loadMyPlan from "./../services/loadMyPlan";
import { singleQuery } from "./../services/contraints";

class CreateNewPlan extends Component {
  constructor() {
    super();
    this.state = {
      mainData: [],
      term: "",
      semSum: [0, 0, 0, 0, 0, 0, 0, 0],
      TC: [false, ""],
      HS: [false, ""],
      BS: [false, ""],
      OP: [false, ""],
      ES: [false, ""],
      DS: [false, ""],
      Other: [false, ""],
    };
    this.loadDeafaultSem();
  }

  loadDeafaultSem = async () => {
    let res = await axios.get(`/defsem`);
    await this.setState({
      mainData: res.data,
    });
    // alert("Default values loaded for CSE.");
  };

  updateMainData = async (attr, sem, course, val) => {
    console.log("updateMainData() called on: ", val);
    console.log(attr);
    let temp = this.state.mainData;
    temp[sem][course][attr] = val;

    await this.setState({
      mainData: temp,
    });
  };

  addCourse = async (sem) => {
    console.log("addCourse() called on: ", sem);
    let temp = this.state.mainData;
    temp[sem].push(["", "", 4, "Other"]);

    await this.setState({
      mainData: temp,
    });
  };

  deleteCourse = async (sem, courseIndex) => {
    console.log("deleteCourse() call on: ", sem, courseIndex);
    let temp = this.state.mainData;
    let _temp = temp[sem];

    let delEl = _temp.splice(courseIndex, 1);
    console.log(delEl);
    temp[sem] = _temp;

    await this.setState({ mainData: [] });
    await this.setState({ mainData: temp });
  };

  saveMyPlan = async (e) => {
    e.preventDefault();
    console.log("Saving as: ", this.state.term);

    console.log("Data=>>", this.state.mainData);

    let res = await saveMyPlan(this.state.term, this.state.mainData);
    console.log(res);
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

  setTerm = async (e) => {
    await this.setState({
      term: e,
    });
  };

  checkContraint = async (e) => {
    console.log(e);
    let res = await singleQuery(this.state.mainData, e);
    console.log(res);
  };

  checkAll = async (e) => {
    console.log("checkAll() called.");

    await this.checkContraint("TC");
    await this.checkContraint("HS");
    await this.checkContraint("BS");
    await this.checkContraint("OP");
    await this.checkContraint("ES");
    await this.checkContraint("DS");
    await this.checkContraint("Other");
  };

  render() {
    return (
      <div style={{ textAlign: "center" }} className="App p-0">
        <div style={{ margin: "50px" }}>
          <h1>Guidelines for creating a successfull plan</h1>

          <ul>
            <li>
              <h5>
                Add all your first and second year courses as a "Compulsory"
                type
              </h5>
            </li>
            <li>
              <h5>
                You can check for individual constraints like HSS Electives
                using the dropdown
              </h5>
            </li>
          </ul>
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

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col-2">#</th>
              <th scope="col-8">Contraint</th>
              <th scope="col-2">Status</th>
              <th scope="col-2">Check</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Total credits check</td>
              <td>
                <div class="alert alert-success" role="alert">
                  <strong>Well done!</strong> You successfully read this
                  important alert message.
                </div>
              </td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => this.checkContraint("TC")}
                >
                  Check
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Total HS Electives courses</td>
              <td>
                <div class="alert alert-danger" role="alert">
                  <strong>Oh snap!</strong> Change a few things up and try
                  submitting again.
                </div>
              </td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => this.checkContraint("HS")}
                >
                  Check
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Total Open Electives Credits Check</td>
              <td>
                <div class="alert alert-danger" role="alert">
                  <strong>Oh snap!</strong> Change a few things up and try
                  submitting again.
                </div>
              </td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => this.checkContraint("OP")}
                >
                  Check
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Total BS Credits Check</td>
              <td>
                <div class="alert alert-danger" role="alert">
                  <strong>Oh snap!</strong> Change a few things up and try
                  submitting again.
                </div>
              </td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => this.checkContraint("BS")}
                >
                  Check
                </Button>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Total ES Credits Check</td>
              <td>
                <div class="alert alert-danger" role="alert">
                  <strong>Oh snap!</strong> Change a few things up and try
                  submitting again.
                </div>
              </td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => this.checkContraint("ES")}
                >
                  Check
                </Button>
              </td>
            </tr>

            <tr>
              <th scope="row">6</th>
              <td>Total Discipline Specific Credits Check</td>
              <td>
                <div class="alert alert-danger" role="alert">
                  <strong>Oh snap!</strong> Change a few things up and try
                  submitting again.
                </div>
              </td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => this.checkContraint("DS")}
                >
                  Check
                </Button>
              </td>
            </tr>

            <tr>
              <th scope="row">7</th>
              <td>Total Other Credits Check</td>
              <td>
                <div class="alert alert-danger" role="alert">
                  <strong>Oh snap!</strong> Change a few things up and try
                  submitting again.
                </div>
              </td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => this.checkContraint("Other")}
                >
                  Check
                </Button>
              </td>
            </tr>

            <tr>
              <th scope="row">{">"}</th>
              <td className="h4 py-auto">Graduation Status</td>
              <td>
                <div class="alert alert-danger" role="alert">
                  <strong>Oh snap!</strong> Change a few things up and try
                  submitting again.
                </div>
              </td>
              <td>
                <Button className="mt-auto px-4" onClick={this.checkAll}>
                  <strong>Check All</strong>
                </Button>
              </td>
            </tr>
          </tbody>
        </table>

        <Row className="mt-5 p-2">
          <Col>
            <Form onSubmit={this.saveMyPlan}>
              <Form.Group
                onChange={(e) => this.setTerm(e.target.value)}
                as={Col}
                controlId="formGridZip"
              >
                <Form.Control />
              </Form.Group>
              <Button disabled variant="primary" type="submit">
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

              <Button disabled variant="primary" type="submit">
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
