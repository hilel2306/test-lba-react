import React from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const Login = ({ handleChange, input }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className="connection">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="email"
          value={input.email}
          onChange={event => handleChange(event, "email")}
        />

        <TextField
          id="filled-basic"
          label="password"
          variant="filled"
          type="password"
          value={input.password}
          onChange={event => handleChange(event, "password")}
        />
      </form>
      <Button
        variant="contained"
        onClick={async event => {
          event.preventDefault();
          try {
            const response = await Axios.post(
              "http://localhost:3000/user/login",
              input
            );

            if (response.data.token) {
              // If the user exist, Navigation to home page
              history.push("/home");
            } else {
              alert("Entrez un email et un mot de passe valides.");
            }
          } catch (e) {
            alert("email ou mot de passe invalide");
          }
        }}
      >
        Se connecter
      </Button>
    </div>
  );
};
export default Login;
