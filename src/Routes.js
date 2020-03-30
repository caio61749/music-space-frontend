import React from "react";
import { Router, Switch, Route } from "react-router";

import LoginScreen from "./screens/login";
import HomeScreen from "./screens/home";
import NotFound from "./components/notFound";
import RegisterMeeting from "./screens/newMeeting";

import { history } from "./history";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={LoginScreen} exact path="/login" />
      <Route component={HomeScreen} exact path="/home" />
      <Route component={RegisterMeeting} exact path="/registerMeeting" />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
