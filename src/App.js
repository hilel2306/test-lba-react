import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Product from "./containers/Product";
import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Loading state to drive the Home page's render
  const [input, setInput] = useState({}); // To send object to the database
  const [updated, setUpdated] = useState(false); // State to start UseEffect when there is a modification

  // To update Input
  const handleChange = (event, key) => {
    const newObj = { ...input };
    newObj[key] = event.target.value;
    setInput(newObj);
  };

  // To back to square one Input
  const handleChangeForm = () => {
    let newObj = { ...input };
    newObj = {};
    setInput(newObj);
  };

  return (
    // NAVIGATION
    <Router>
      <Switch>
        <Route path="/product/:id">
          <Product
            handleChange={handleChange}
            input={input}
            handleChangeForm={handleChangeForm}
            updated={updated}
            setUpdated={setUpdated}
          />
        </Route>
        <Route path="/home">
          <Home
            handleChange={handleChange}
            input={input}
            handleChangeForm={handleChangeForm}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            updated={updated}
            setUpdated={setUpdated}
          />
        </Route>
        <Route exact path="/">
          <Login handleChange={handleChange} input={input} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
