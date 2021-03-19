import React, { Component } from "react";
import axios from "axios";

import Semester from "../components/Semester";
import { Form, Button, Col, Row } from "react-bootstrap";
import saveMyPlan from "./../services/saveMyPlan";
import loadMyPlan from "./../services/loadMyPlan";

class SharedPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.loadDeafaultSem();
  }
  render() {
    return (<div></div>);
  }
}

export default SharedPlan;
