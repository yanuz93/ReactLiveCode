import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "../pages/Article";
import Category from "../pages/Category";
import SignIn from "../pages/Singin";
import Profile from "../pages/Profile";

const MainRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={News} />
        <Route exact path="/masuk" component={SignIn} />
        <Route exact path="/profil" component={Profile} />
        <Route path="/:source_name" component={Category} />
      </Switch>
    </Router>
  );
};

export default MainRoutes;
