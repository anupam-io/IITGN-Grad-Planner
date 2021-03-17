
import React from 'react';
import {Container, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link, MemoryRouter, Route, Switch} from 'react-router-dom';

import PlanCard from '../components/PlanCard';
import CreateNewPlan from './CreateNewPlan';

function Dashboard({allPlans})
{

    return (
        <div>
            <Container>
                <h4>Add new plan</h4>
                {/* <MemoryRouter>
                    <LinkContainer>
                    <Button></Button>
                    </LinkContainer>
                    <Switch>
                        <Route path="/create-new-plan">
                            <CreateNewPlan />
                        </Route>
                    </Switch>
                </MemoryRouter> */}
                <Link to="/create-new-plan" className="btn btn-primary">Add</Link>
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