import React from 'react';
import {Card, Row} from 'react-bootstrap';

import './PlanCard.css'

function PlanCard({value})
{
    return (
        <div >
            <Row style={{padding:10}}>
            <Card >
                <Card.Body><h4> The plan: {value} </h4></Card.Body>
            </Card>
            </Row>
        </div>
    );
}

export default PlanCard;