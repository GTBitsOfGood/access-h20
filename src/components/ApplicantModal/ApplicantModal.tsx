import * as React from "react";
import Button from "@material-ui/core/Button";
import classes from "./ApplicantModal.module.css";
import TextField from "@material-ui/core/TextField";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    modalwrapper: {
        boxSizing: 'border-box',
        background: 'lightgrey',
        width: '90%',
        maxWidth: '1000px',
        margin: '4rem auto'
    },
    
    modalheader: {
        background:'black',
        color: 'white',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    
    closemodalbtn: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'bold',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
    },
    
    modalcontent: {
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    
}));

export const ApplicantModal = ({ shouldShowModal, onClose }) => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Modal open={shouldShowModal} onClose={onClose}>
          <div className={classes.modalwrapper}>
            <div className={classes.modalheader}>
              <h3>Please enter customer information.</h3>
              <span onClick={onClose} className={classes.closemodalbtn}>
                &times;
              </span>
            </div>
            <TextField
              id="customer-name"
              label="Customer Name"
              variant="standard"
            />
            <TextField
              id="utility-company"
              label="Utility Company"
              variant="standard"
            />
            <TextField
              id="application-date"
              label="Application Date"
              variant="standard"
            />
            <TextField
              id="special-notes-multiline"
              label="Special Notes"
              multiline
              rows={4}
              variant="standard"
            />
            <div className={classes.modalfooter}>
              <Button onClick={onClose} className="btn-submit">
                Submit
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

ApplicantModal.propTypes = {
  shouldShowModal: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};
