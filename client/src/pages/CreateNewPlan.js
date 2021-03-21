import React, { Component } from "react";

import Semester from "../components/Semester";
import {
  Form,
  Button,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import saveMyPlan from "./../services/saveMyPlan";
import loadMyPlan from "./../services/loadMyPlan";
import singleQuery from "./../services/contraints";
import ConstraintMessage from "../components/ConstraintMessage";
import Guidelines from "../components/Guidelines";
import loadDefaultSem from "../services/loadDefaultSem";

class CreateNewPlan extends Component {
  constructor() {
    super();
    let message = "Not Checked!";
    this.state = {
      mainData: [],
      Sterm: "",
      Lterm: "",
      semSum: [-1, -1, -1, -1, -1, -1],
      TC: [false, message],
      HS: [false, message],
      BS: [false, message],
      OP: [false, message],
      ES: [false, message],
      DS: [false, message],
      Other: [false, message],
      all: [false, message],
      branch: "Computer Science",
    };
    this.loadDeafaultSem();
  }

  loadDeafaultSem = async () => {
    let data = await loadDefaultSem();
    await this.setState({
      mainData: data,
    });
    this.updateSemSum();
    alert("Default values loaded for CSE.");
  };

  updateMainData = async (attr, sem, course, val) => {
    console.log("updateMainData() called on: ", val);
    console.log(attr);
    let temp = this.state.mainData;
    temp[sem][course][attr] = val;

    await this.setState({
      mainData: temp,
    });
    this.updateSemSum();
  };

  addCourse = async (sem) => {
    console.log("addCourse() called on: ", sem);
    let temp = this.state.mainData;
    temp[sem].push(["", "", 4, "Other"]);

    await this.setState({
      mainData: temp,
    });
    this.updateSemSum();
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
    this.updateSemSum();
  };

  saveMyPlan = async (e) => {
    e.preventDefault();
    console.log("Saving as: ", this.state.Sterm);

    console.log("Data=>>", this.state.mainData);

    let res = await saveMyPlan(this.state.Sterm, this.state.mainData);
    console.log(res);
    alert(
      "Plan saved as: " +
        this.state.Sterm +
        "Go to Dashboard to Share your Plan"
    );
  };

  loadMyPlan = async (e) => {
    e.preventDefault();

    console.log("Loading plan: ", this.state.Lterm);
    let res = await loadMyPlan(this.state.Lterm);
    if (res.data.status) {
      await this.setState({
        mainData: res.data.data[0],
      });
      alert("Plan loaded as: " + this.state.Lterm);
    } else {
      alert("Sorry, plan: " + this.state.Lterm + " not found");
    }
  };

  setSTerm = async (e) => {
    await this.setState({
      Sterm: e,
    });
  };
  setLTerm = async (e) => {
    await this.setState({
      Lterm: e,
    });
  };

  checkContraint = async (e) => {
    console.log(e);
    let res = await singleQuery(this.state.mainData, e, this.state.branch);
    console.log(res);

    if (e === "TC") {
      this.setState({
        TC: res,
      });
    } else if (e === "HS") {
      this.setState({
        HS: res,
      });
    } else if (e === "BS") {
      this.setState({
        BS: res,
      });
    } else if (e === "OP") {
      this.setState({
        OP: res,
      });
    } else if (e === "ES") {
      this.setState({
        ES: res,
      });
    } else if (e === "DS") {
      this.setState({
        DS: res,
      });
    } else if (e === "Other") {
      this.setState({
        Other: res,
      });
    }
  };

  updateSemSum = () => {
    let arr = new Array(8);
    for (let i = 0; i < 8; i++) {
      let temp = 0;
      for (let j = 0; j < this.state.mainData[i].length; j++) {
        temp += parseInt(this.state.mainData[i][j][2]);
      }
      arr[i] = temp;
    }
    this.setState({
      semSum: arr,
    });
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

    let allStatus =
      this.state.TC[0] &&
      this.state.HS[0] &&
      this.state.BS[0] &&
      this.state.OP[0] &&
      this.state.ES[0] &&
      this.state.DS[0] &&
      this.state.Other[0];
    if (allStatus) {
      this.setState({ all: [true, "Well Done, You can graduate!!!"] });
    } else {
      this.setState({ all: [false, "Oops, try again."] });
    }
    console.log(allStatus);
  };

  changeBranch = (e) => {
    this.setState({
      branch: e,
    });
  };

  render() {
    return (
      <div>
        <div className="jumbotron display-4 text-center mb-0 py-3">
          Edit Plan
        </div>

        <Guidelines />

        <div className="row justify-content-center mt-4">
          <h4 className="my-auto"> Your Branch: </h4>
          <DropdownButton
            id="dropdown-basic-button"
            title={this.state.branch}
            onSelect={this.changeBranch}
          >
            <div className="bg-secondary">
              <Dropdown.Item eventKey="Computer Science">
                Computer Science
              </Dropdown.Item>
              <Dropdown.Item eventKey="Electrical Engg">
                Electrical Engg
              </Dropdown.Item>
              <Dropdown.Item eventKey="Mechanical Engg">
                Mechanical Engg
              </Dropdown.Item>
              <Dropdown.Item eventKey="Civil Engg">Civil Engg</Dropdown.Item>
              <Dropdown.Item eventKey="Chemical Engg">
                Chemical Engg
              </Dropdown.Item>
              <Dropdown.Item eventKey="Material Science">
                Material Science
              </Dropdown.Item>
            </div>
          </DropdownButton>
        </div>

        <div>
          <div style={{ textAlign: "center" }} className="App p-0">
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
          </div>

          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th style={{ width: "10%" }} scope="col">
                  #
                </th>
                <th style={{ width: "30%" }} scope="col">
                  Contraint
                </th>
                <th style={{ width: "50%", textAlign: "center" }} scope="col">
                  Status
                </th>
                <th style={{ width: "10%" }} scope="col">
                  Check
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Total credits check</td>
                <td>
                  <ConstraintMessage
                    message={this.state.TC[1]}
                    value={this.state.TC[0]}
                  />
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
                  <ConstraintMessage
                    message={this.state.HS[1]}
                    value={this.state.HS[0]}
                  />
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
                  <ConstraintMessage
                    message={this.state.OP[1]}
                    value={this.state.OP[0]}
                  />
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
                  <ConstraintMessage
                    message={this.state.BS[1]}
                    value={this.state.BS[0]}
                  />
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
                  <ConstraintMessage
                    message={this.state.ES[1]}
                    value={this.state.ES[0]}
                  />
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
                  <ConstraintMessage
                    message={this.state.DS[1]}
                    value={this.state.DS[0]}
                  />
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
                  <ConstraintMessage
                    message={this.state.Other[1]}
                    value={this.state.Other[0]}
                  />
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
                <td className="h4 py-auto">
                  <strong> Graduation Status </strong>
                </td>
                <td>
                  <strong>
                    <ConstraintMessage
                      message={this.state.all[1]}
                      value={this.state.all[0]}
                    />
                  </strong>
                </td>
                <td>
                  <Button className="mt-auto px-2" onClick={this.checkAll}>
                    <strong>Check All</strong>
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="row justify-content-center mt-5 mb-3">
            <Form className="mx-2" onSubmit={this.saveMyPlan}>
              <Form.Group
                onChange={(e) => this.setSTerm(e.target.value)}
                as={Col}
              >
                <Form.Control />
              </Form.Group>
              <Button
                className="btn-block"
                variant="primary"
                disabled={this.state.Sterm.length === 0}
                type="submit"
              >
                Save Plan
              </Button>
            </Form>
            <Form className="mx-2" onSubmit={this.loadMyPlan}>
              <Form.Group
                onChange={(e) => this.setLTerm(e.target.value)}
                as={Col}
              >
                <Form.Control />
              </Form.Group>

              <Button
                disabled={this.state.Lterm.length === 0}
                className="btn-block"
                variant="primary"
                type="submit"
              >
                Load Plan
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewPlan;
