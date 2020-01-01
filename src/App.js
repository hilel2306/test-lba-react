import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Product from "./containers/Product";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
