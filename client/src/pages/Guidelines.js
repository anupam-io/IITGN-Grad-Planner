import React from 'react';
import { Container } from 'react-bootstrap';

function Guidelines()
{
    return (
        <div className="jumbotron">
            <Container>
                <h1>Guidelines for your Graduation Planner</h1>
                <ul>
                    <li>
                        <h4>Add all your first and second year courses as a "Compulsory" type in the Glanner</h4>
                    </li>
                    <li>
                        <h4>You can check for individual constraints like HSS Electives using individual buttons</h4>
                    </li>
                </ul>


            </Container>
        </div>
    );
}

export default Guidelines;