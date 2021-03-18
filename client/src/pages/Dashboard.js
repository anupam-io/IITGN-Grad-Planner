
import React from 'react';
import {Container, Button, Form} from 'react-bootstrap';

import PlanCard from '../components/PlanCard';
import history from '../history';

function Dashboard({allPlans})
{
    return (
        <div>
            <Container>
                <h4>Add new plan</h4>
                <Form>
                    <Button variant="primary" onClick={() => history.push('/create-new-plan')}>Add new plan</Button>
                </Form>
            </Container>

            <Container>
            <h3>Check out all your plans below</h3>
            <Container>
                {
                    allPlans.map( function (plan, index) {
                        return (
                            <PlanCard key={index} index={index}/>
                        );
                    })
                }
            </Container>
            </Container>
        </div>
    );
}

export default Dashboard;