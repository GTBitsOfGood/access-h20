import React, { useState } from "react";
import Router from "next/router";
import { login, signUp } from "../../actions/User";
import urls from "../../../utils/urls";
import classes from "./LoginPage.module.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsReg] = useState(false);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (isRegistering) {
      return signUp(username, password)
        .then(() => Router.replace(urls.pages.app.home))
        .catch((error) => window.alert(error.message));
    }

    return login(username, password)
      .then(() => Router.replace(urls.pages.app.home))
      .catch((error) => window.alert(error.message));
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h2 className={classes.welcomeText}>Welcome!</h2>
        <h3 className={classes.infoText}>
          {isRegistering
            ? "Register a new account and use our app today!"
            : "Login to an existing account."}
        </h3>
        <div className={classes.inputContainer}>
          <label htmlFor="username" className={classes.inputLabel}>
            Username
          </label>
          <TextField
            className={classes.input}
            required
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="password" className={classes.inputLabel}>
            Password
          </label>
          <TextField
            className={classes.input}
            required
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button className={classes.bttn} type="submit">
          {isRegistering ? "Register" : "Login"}
        </Button>
        {isRegistering ? (
          <p className={classes.switchText}>
            Already have an account?
            <a className={classes.buttonText} onClick={() => setIsReg(false)}>
              Login now
            </a>
          </p>
        ) : (
          <p className={classes.switchText}>
            {"Don't have an account?"}
            <a className={classes.buttonText} onClick={() => setIsReg(true)}>
              Register now
            </a>
          </p>
        )}
      </form>
      <div className={classes.image} />
    </div>
  );
};

export default LoginPage;
