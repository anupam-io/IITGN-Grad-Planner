import React, { useState } from 'react';
import { Form , Col, Button} from 'react-bootstrap';

function ShareLink() {
    const [link, setLink] = useState("");

    function genShareLink(name)
    {
        setLink(name);
        const curr = "https://planner-akcgjc007.vercel.app//sharedPlan/:" + link;
        setLink(curr);
        // alert("Your Shareable Link:" + link);
    }

    return (
        <div className="p-2 jumbotron m-4 center">
            <Form onSubmit={(e)=>{genShareLink(e)}}>
                <Form.Group
                    as={Col}
                    controlId="formGridZip"
                >
                    <Form.Control type="text" placeholder="Name of your plan" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Generate Shareable Link
                </Button>
            </Form>
            <div>
                {link}
            </div>
        </div>
    );
}

export default ShareLink;