import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Home = () => {
  const history = useHistory();

  return (
    <div>
      <h1>HOME</h1>

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/product/1234567");
        }}
      >
        product
      </Button>
    </div>
  );
};

export default Home;
