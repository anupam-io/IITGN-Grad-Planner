import React from "react";
import { Container, Button, Form, Row } from "react-bootstrap";

import PlanCard from "../components/PlanCard";
import history from "../history";

function Dashboard({ allPlans }) {
  return (
    <div>
      <Container className="p-2">
        
        

        <div className="column">

        <Row>
          <div className="display-3">Your Plans</div>
          <Button
            variant="primary"
            onClick={() => history.push("/create-new-plan")}
          >
            Add new plan
          </Button>

        </Row>
          
          {allPlans.map(function (plan, index) {
            return <PlanCard key={index} index={index} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
