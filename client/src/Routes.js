import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import history from "./history";
import CreateNewPlan from "./pages/CreateNewPlan";

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/dashboard">
          {" "}
          <Dashboard allPlans={["Plan1", "Plan2", "Plan3"]} />{" "}
        </Route>
        <Route path="/create-new-plan">
          {" "}
          <CreateNewPlan />{" "}
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
