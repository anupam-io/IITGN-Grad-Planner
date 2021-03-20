import React, { useEffect, useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import PlanCard from "../components/PlanCard";
import history from "../history";

const axios = require("axios");


function Dashboard() {
  const [allPlans, setAllPlans] = useState([]);
  
  const loadPlanNames = async()=>{
    const endPoint = "/allPlans";
    let ret = await axios.get(endPoint);
    setAllPlans(ret.data);
  };
  // await loadPlanNames();
  loadPlanNames();

  return (
    <div>
      <Container className="p-2">
        <div className="column">
          <Row className="my-4">
            <div className="display-4">Your Plans</div>
            <Button
              className="px-4 ml-auto"
              variant="primary"
              onClick={() => history.push("/create-new-plan")}
            >
              <h3>Add new plan</h3>
            </Button>
          </Row>
          <Col>
          {allPlans.map(function (planName, index) {
            return <PlanCard value={planName} key={index} />;
          })}
          </Col>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
