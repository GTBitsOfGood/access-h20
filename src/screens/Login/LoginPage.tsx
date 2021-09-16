import React, { useState } from "react";
import Router from "next/router";
import { login, signUp } from "../../actions/User";
import urls from "../../../utils/urls";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsReg] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isRegistering) {
      return signUp(email, password)
        .then(() => Router.replace(urls.pages.app.home))
        .catch((error) => window.alert(error.message));
    }

    return login(email, password)
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
          <label htmlFor="email" className={classes.inputLabel}>
            Email
          </label>
          <input
            className={classes.input}
            required
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="password" className={classes.inputLabel}>
            Password
          </label>
          <input
            className={classes.input}
            required
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className={classes.bttn} type="submit">
          {isRegistering ? "Register" : "Login"}
        </button>
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
