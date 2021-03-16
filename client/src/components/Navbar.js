import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { LinkContainer } from 'react-router-bootstrap';

import './Navbar.css'
import Login from '..//login';
import Logout from '../pages/Logout';

const Plans = () => <span>About</span>;
pages

function NavBar()
{
    return (
        <MemoryRouter>
        <Container className="p-3">
        <Jumbotron>
            <h1 className="header">Welcome To React-Bootstrap</h1>
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
                <Plans />
                </Route>
                <Route path="/logout">
                <Logout />
                </Route>
            </Switch>
            </h2>
        </Jumbotron>
        </Container>
        </MemoryRouter>
    );
}

export default NavBar;