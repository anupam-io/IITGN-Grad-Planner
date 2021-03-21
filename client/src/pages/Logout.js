import React from 'react';
import Container from 'react-bootstrap/Container';
import {GoogleLogout} from 'react-google-login';

const clientId = "784982578023-p5e05sml014cns8qer72q0oo6cr9s00t.apps.googleusercontent.com";

function Logout()
{
    const onSuccess = (res) => {
        console.log('Login Successful, currUser: ', res.profileObj);
    }

    return (
        <div className="jumbotron">
            <Container>
                <GoogleLogout
                clientId={clientId}
                buttonText="Sign Out"
                onLogoutSuccess={onSuccess}
                >
                </GoogleLogout>
            </Container>
        </div>
    );
}

export default Logout;