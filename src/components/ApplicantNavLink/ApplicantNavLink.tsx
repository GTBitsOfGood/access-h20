import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import classes from "./ApplicantNavLink.module.css";
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Circle } from '@mui/icons-material';
import { UtilityPartnerModal } from "src/components/UtilityPartnerModal/UtilityPartnerModal";
import { useEffect, useState } from "react";

export default function ApplicantNavLink() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showUtilityPartnerModal, setShowUtilityPartnerModal] = useState(false)

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="transparent" className={classes.root}>
      <Toolbar>
        <div className={classes.logo1}/>
        <div className={classes.logo2}/>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mx: "auto" }}
        >
        </IconButton>
        <span onClick = {() => setShowUtilityPartnerModal(true)} className={classes.addPartner}>Add Utility Partner</span>
        <UtilityPartnerModal shouldShowModal={showUtilityPartnerModal} onClose={() => setShowUtilityPartnerModal(false)} />
        {auth && (
          <div>
            
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle color="action" className = {classes.profilebutton}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
    </Box>
  );
}