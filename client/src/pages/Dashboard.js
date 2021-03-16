
import React from 'react';
import {Container, Button} from 'react-bootstrap';

import PlanCard from '../components/PlanCard';

function Dashboard({allPlans})
{
    return (
        <div>
            <Container>
                <h4>Add new plan</h4>
                <Button 
                variant="primary" 
                onClick={console.log('Add new plan')}
                >
                Add
                </Button>
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