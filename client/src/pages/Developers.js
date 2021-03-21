import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Profile from "../components/Profile";

function Developers() {
  return (
    <div className="p-5">
      <Container>
        <Row>
          <Col>
            <Profile username={"ShrutiKatpara"} />
          </Col>
          <Col>
            <Profile username={"akcgjc007"} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Developers;
