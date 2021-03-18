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
      <footer class="bg-secondary page-footer font-small blue">
        <div class="footer-copyright text-center py-3">
          Made by BobDaBuilder<br />
          MIT License, 2021 <br />
          <a href="#">Github: BobDaBuilder</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
