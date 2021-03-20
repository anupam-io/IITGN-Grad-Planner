import React from "react";
import Navigation from "./components/Navbar";
import Routes from "./Routes";
import "./App.css"
import Footer from './components/Footer';

function App() {
  return (
    <div
    style={{fontFamily: "ABeeZee"}}
    >
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <Navigation />
      <Routes />
      <Footer/>
    </div>
  );
}

export default App;
