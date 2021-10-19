import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { logout } from "../../../actions/User";
import urls from "../../../../utils/urls";
import {Button} from "@mui/material";
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flex_direction: 'column',
    },
    centerText: {
        text_align: 'center',
    },
    bttn: {
        align_self: 'flex_end',
        padding: '8px 16px',
        outline: 'none',
        color: '#ffffff',
        background_color: '#4f6474',
        cursor: 'pointer',
        border: '0',
        border_radius: '4px',
        transition:' 0.3s',
        font_size: '24px',
    },
    bttnhover: {
        background: '#122f3d',
    }
    
}))

const handleLogout = () =>
  logout()
    .then(() => Router.replace(urls.pages.index))
    .catch(() => window.alert("An error occurred while trying to logout!"));

const HomePage = ({ currentUser }) => 
  {const classes = useStyles()};
  {return (
    <div>
      <h2>Welcome to our app, {currentUser.email}!</h2>
      <h3>
        This page can only be accessed by logged-in users, because _app.js
        reroutes users who are not logged-in away from this page.
      </h3>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  )};

HomePage.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default HomePage;
