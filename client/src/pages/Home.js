import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="text-center mb-5">
      <h1 className="jumbotron display-4">
        Welcome to your graduation planner
      </h1>
      <h2>Features we offer</h2>
      <li>Add, Save, Update, Remove a plan</li>
      <li>Automatic constraint check</li>
      <li>Share a plan with a shareable link</li>
    </div>
  );
}

export default Home;
