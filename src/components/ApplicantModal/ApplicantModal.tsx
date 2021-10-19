import * as React from 'react'
import Button from '@material-ui/core/Button'
import classes from './ApplicantModal.module.css'
import TextField from '@material-ui/core/TextField'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'

interface PropTypes {
  shouldShowModal: boolean
  onClose: () => void
}

export const ApplicantModal = ({ shouldShowModal, onClose }: PropTypes): JSX.Element => {
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
  )
}
