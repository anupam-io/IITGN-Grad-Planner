import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import './Navbar.css'
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Dashboard from '../pages/Dashboard';

function NavBar()
{
    return (
        <MemoryRouter>
        <Container className="p-3">
            <h1 className="header">Welcome To Your Graduation Planner</h1>
            <h2>
            <ButtonToolbar className="custom-btn-toolbar">
                <LinkContainer to="/login">
                <Button>Login</Button>
                </LinkContainer>
                <LinkContainer to="/plans">
                <Button>Plans</Button>
                </LinkContainer>
                <LinkContainer to="/logout">
                <Button>Logout</Button>
                </LinkContainer>
            </ButtonToolbar>
            </h2>
            <h2>
            <Switch>
                <Route path="/login">
                <Login />
                </Route>
                <Route path="/plans">
                <Dashboard allPlans= {["Plan1", "Plan2", "Plan3"]}/>
                </Route>
                <Route path="/logout">
                <Logout />
                </Route>
            </Switch>
            </h2>
        </Container>
        </MemoryRouter>
    );
}

export default NavBar;