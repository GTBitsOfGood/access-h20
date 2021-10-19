import React, { useState } from "react";
import Router from "next/router";
import { login, signUp } from "../../actions/User";
import urls from "../../../utils/urls";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Image from 'material-ui-image'
import FormControl from '@material-ui/core/FormControl'
import InputAdornment from "@material-ui/core/InputAdornment";
import Link from '@material-ui/core/Link'
import IconButton from "@material-ui/core/IconButton";
import { OutlinedInput } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: 'calc(100% + 32px)',
        height: 'calc(100% + 32px)',
        display: 'flex',
        flexDirection: 'column',
        margin: '-16px'
    },
    welcomeText: {
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '0'
    },
    infoText: {
        fontSize: '15px',
        fontWeight: 'bolder',
        alignSelf: 'center'
    },
    form: {
        flex: '5 0',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px',
        background: '#ffffff',
        marginTop:'-35px'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 10px 8px',
        borderRadius: '4px',
        marginBottom: '20px',
        transition: '0.3s',
        alignSelf:'center',
        width:'70%',
        maxWidth: '700px'
    },
    input: {
        outline: '0px',
        border: '0px',
        padding: '4px 0px 0px',
        fontSize: '14px'
    },
    inputLabel: {
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing:'0.7px',
        color: 'black',
        transition: '0.3s',
        fontWeight: 'bolder'
    },
    bttn: {
        padding: '8px 16px',
        outline: 'none',
        color: '#ffffff',
        backgroundColor: '#4DBAEA',
        border: '0',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: '0.3s',
        fontSize: '24px',
        maxWidth: '100px',
        alignSelf: 'center',
        marginBottom: '20px',
    },
    bttnhover: {
        background: '#239edb'
    },
    logo: {
        flex: '2 0',
        background: 'url("../../assets/images/access-h20-logo.jpg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'bottom',
        paddingTop:'32%',
        maxWidth:'100%',
        marginTop:'-35px',
        marginBottom:'-35x',
        height:'auto',
    },
    image: {
        flex: '2 0',
        backgroundImage: 'url("https://source.unsplash.com/collection/4695781")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'top',
        paddingLeft: '100px',
        width:'auto',
    },
    centerText: {
        textAlign: 'center'
    },
    buttonText: {
        marginLeft: '8px',
        textDecoration: 'underline',
        cursor: 'pointer'
    },
    switchText: {
        marginTop: 'auto',
        textAlign: 'center'
    }
}))


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isRegistering, setIsReg] = useState(false);

  const classes = useStyles();

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
      <FormControl className={classes.form} onSubmit={handleSubmit}>
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
        <Button className={classes.bttn} type="submit">
          {isRegistering ? "Register" : "Login"}
        </Button>
        {isRegistering ? (
          <p className={classes.switchText}>
            Already have an account?
            <Link className={classes.buttonText} onClick={() => setIsReg(false)}>
              Login now
            </Link>
          </p>
        ) : (
          <p className={classes.switchText}>
            {"Don't have an account?"}
            <Link className={classes.buttonText} onClick={() => setIsReg(true)}>
              Register now
            </Link>
          </p>
        )}
      </FormControl>
    </div>
  );
};

export default LoginPage;
