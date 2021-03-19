import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import history from "./history";
import CreateNewPlan from "./pages/CreateNewPlan";
import Guidelines from './pages/Guidelines';
import NotFound from './pages/404';
import Home from './pages/Home';


function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/dashboard">
          <Dashboard allPlans={["Plan1", "Plan2", "Plan3"]} />{" "}
        </Route>
        <Route path="/create-new-plan" component={CreateNewPlan}/>
        <Route path="/guidelines" component={Guidelines}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default Routes;
