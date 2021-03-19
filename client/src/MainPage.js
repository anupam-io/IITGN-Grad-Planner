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
      <footer className="bg-secondary page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          Made by BobDaBuilder<br />
          MIT License, 2021 <br />
          <b>Github: BobDaBuilder</b>
        </div>
      </footer>
    </div>
  );
}

export default App;
