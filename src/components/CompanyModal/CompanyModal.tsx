import React, { useState } from 'react'
import classes from './CompanyModal.module.css'

// import { signUp } from 'src/actions/User'
import { Button, Modal, TextField } from '@material-ui/core'

interface PropTypes {
  shouldShowModal: boolean
  onClose: () => void
}

export const CompanyModal = ({ shouldShowModal, onClose }: PropTypes): JSX.Element => {
  const [companyName, setCompanyName] = useState('') // eslint-disable-line
  const [contactEmail, setContactEmail] = useState('') // eslint-disable-line

  const submitForm = (): void => {
    // todo: sign-up logic
    onClose()
  }

  return (
    <Modal open={shouldShowModal} onClose={onClose}>
      <div className={classes.modalWrapper}>
        <div className={classes.modalHeader}>
          <h3>Please enter company information.</h3>
          <span onClick={onClose} className={classes.closeButton}>&times;</span>
        </div>

        <div className={classes.modalContent}>
          <TextField
            variant="outlined"
            label="Company Name"
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Contact Email"
            onChange={(e) => setContactEmail(e.target.value)}
          />
          <div className={classes.submitContainer}>
            <Button variant="contained" onClick={submitForm}>Submit</Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
