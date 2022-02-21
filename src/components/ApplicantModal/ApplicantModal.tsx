import * as React from 'react'
import Button from '@material-ui/core/Button'
import classes from './ApplicantModal.module.css'
import TextField from '@material-ui/core/TextField'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

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
              <h3 className={classes.addcustomer}>Add Customer</h3>
              <span onClick={onClose} className={classes.closemodalbtn}>
                &#10799;
              </span>
            </div>

            <Box
              className={classes.modalcontent}
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '32ch' }
              }}
              noValidate
              autoComplete="off"
            >
                <div>
                  <TextField
                    className="first-name"
                    label="First Name"
                    defaultValue="Default Value"
                    variant="outlined"
                  />
                  <TextField
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="account-id"
                    label="Account ID"
                    variant="outlined"
                  />
                  <TextField
                    id="utility-company"
                    label="Property Address"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="property-address"
                    label="Property Address"
                    variant="outlined"
                    style = {{ width: 660 }}
                  />
                </div>
                <div>
                  <TextField
                    id="zip-code"
                    label="Zip/Postal Code"
                    variant="outlined"
                  />
                  <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    id="notes-multiline"
                    label="Notes (Optional)"
                    multiline
                    rows={4}
                    variant="outlined"
                    style = {{ width: 660 }}
                  />
                </div>
                <div className={classes.modalfooter}>
                  <Button
                  onClick={onClose} className="btn-submit"
                  variant="contained"
                  style={{
                    backgroundColor: '#4DBAEA',
                    color: '#FFFFFF'
                  }}
                  >
                    Add New Customer
                  </Button>
                </div>
            </Box>

          </div>
        </Modal>
      </div>
    </div>
  )
}
