import React from "react";
import { Create } from "./Create";
import { Blogs } from "./Blogs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <h1>hello</h1>
      <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
      </Switch>
    </Router>
  );
};
