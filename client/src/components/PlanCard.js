import React from 'react';
import {Card, Row} from 'react-bootstrap';

import './PlanCard.css'

function PlanCard({value})
{
    return (
        <div >
            <Row style={{padding:5}}>
            <Card style={{width: "20em"}}>
                <Card.Body><h4>{value} </h4></Card.Body>
            </Card>
            </Row>
        </div>
    );
}

export default PlanCard;