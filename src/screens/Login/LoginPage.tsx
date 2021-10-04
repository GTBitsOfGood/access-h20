import React, { useState } from "react";
import Router from "next/router";
import { login, signUp } from "../../actions/User";
import urls from "../../../utils/urls";
import classes from "./LoginPage.module.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Image from 'material-ui-image'
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { OutlinedInput } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isRegistering, setIsReg] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword); 

  const handleSubmit = (event: { preventDefault: () => void; }) => {
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
      <div className={classes.logo}/>
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
          <TextField
            className={classes.input}
            required
            variant="outlined"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="password" className={classes.inputLabel}>
            Password
          </label>
          <OutlinedInput
            className={classes.input}
            required
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
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
    </div>
  );
};

export default LoginPage;
