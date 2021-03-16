import React from 'react';
import {Card, Row} from 'react-bootstrap';

import './PlanCard.css'

function PlanCard({index})
{
    return (
        <div >
            <Row style={{padding:10}}>
            <Card >
                <Card.Body><h4> Plan: {index} </h4></Card.Body>
            </Card>
            </Row>
        </div>
    );
}

export default PlanCard;