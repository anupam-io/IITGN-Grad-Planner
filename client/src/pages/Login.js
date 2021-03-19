import React from "react";
import Container from "react-bootstrap/Container";
import { GoogleLogin } from "react-google-login";

const clientId = "YOUR_CLIENT_ID.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("Login Successful, currUser: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("Login Successful, currUser:", res.profileObj);
  };

  return (
    <div>
      <Container>
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In with IITGN Account"
          onSuccess={onSuccess}
          onFailure={onFailure}
          isSignedIn={true}
        />
        
      </Container>
    </div>
  );
}

export default Login;
