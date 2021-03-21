import React, { Component } from "react";
import {
  Container,
  Button,
  Row,
  Col,
  // InputGroup,
  // FormControl,
  // Form,
} from "react-bootstrap";
import PlanCard from "../components/PlanCard";
import history from "../history";

const axios = require("axios");

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      allPlans: []
    }
  }
  
  async componentDidMount(){
    await this.loadPlanNames();
  }

  loadPlanNames = async () => {
    const endPoint = "/allPlans";
    let ret = await axios.get(endPoint);
    console.log(ret.data);
    
    await this.setState({
      allPlans: ret.data
    });
  };
  // await loadPlanNames();
render(){

  return (
    <div>
      <Container className="p-2">
        <div className="column">
          <Row className="my-4">
            <Col>
              <div className="display-4">Your Plans</div>
            </Col>
            <Col>
              <Button
                className="px-4 ml-auto"
                variant="primary"
                onClick={() => history.push("/create-new-plan")}
                >
                <h3>Add new plan</h3>
              </Button>
            </Col>
          </Row>
          <Col>
            {this.state.allPlans.map(function (planName, index) {
              return <PlanCard value={planName} key={index} />;
            })}
          </Col>
        </div>
      </Container>
    </div>
  );
}
}

export default Dashboard;
