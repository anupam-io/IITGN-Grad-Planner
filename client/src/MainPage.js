import React from "react";
import Navigation from "./components/Navbar";
import Routes from "./Routes";

function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <Navigation />
      <Routes />
    </div>
  );
}

export default App;
