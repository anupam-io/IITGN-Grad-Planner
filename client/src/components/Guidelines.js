import React from "react";

function Guidelines() {
  const advLink = "https://77db9e39-a-06282fac-s-sites.googlegroups.com/a/iitgn.ac.in/iitgn-forms/home/advisories/academic-affairs-advisories/Adv13_Norms%20for%20BTech%20Programme.pdf?attachauth=ANoY7cr8YrxQAYBjD3_7y_iJX1tSGG0jtbaLvXSf11QhoDrvX0-t23S1-VBQ67IazFPJ7fH90lhhPM8ZP4toy808KkXSLrK9iMSwXGgt-judfpzZ1WMMKOYiWOYZPK2dVcCVrk8bvZmp1tRnCdyBSuanUf1oK-87ihR4DTxdGBGQQcjvFbPgIACgDyFkjoTQ8JIQX1qWTuVzZK_GoE_QWm6PvJ6kOQ8IGjZv9BUFIZclS28u-EUgMcY69PH-cOxgW0DvWLwxBaWChc0pa3EI47YpDm5RW_ljDA0vMdP2E2TKu_7PswFKXrA%3D&attredirects=2"
  return (
    <div className="my-3 alert alert-primary text-center" role="alert">
      <h1>Guidelines for using Planner effectively</h1>
      <h4><a href={advLink} target="_blank" rel="noopener noreferrer">IITGN Advisory containing distribution of courses </a></h4>
    </div>
  );
}

export default Guidelines;
