import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

function ShareLink() {
  const [name, setName] = useState("");
  const [shareableLink, setShareableLink] = useState(null);

  function genShareLink(event) {
    event.preventDefault();
    let val = "https://planner-ashy.vercel.app/sharedPlan/" + name;
    setShareableLink(
      <div className="mt-5 px-3   ">
        <div className="alert alert-success" role="alert">
          <h3>Your shareable link</h3>
          <a href={val} target="_blank" rel="noopener noreferrer">{val}</a>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center jumbotron m-4 center">
      <Form onSubmit={genShareLink}>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name of your plan"
          />
        </Form.Group>
        <Button disabled={name.length === 0} variant="primary" type="submit">
          Generate Shareable Link
        </Button>
      </Form>
      <div>{shareableLink}</div>
    </div>
  );
}

export default ShareLink;
