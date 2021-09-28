import * as React from "react";
import Button from "@material-ui/core/Button";
import classes from "./ApplicantModal.module.css";
import TextField from "@material-ui/core/TextField";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";

export const ApplicantModal = ({ showModal, close }) => {
  return (
    <div>
      <div>
        <Modal open={showModal} onClose={close}>
          <div className={classes.modalwrapper}>
            <div className={classes.modalheader}>
              <h3>Please enter customer information.</h3>
              <span onClick={close} className={classes.closemodalbtn}>
                X
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
              <Button onClick={close} className="btn-submit">
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
  showModal: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};
