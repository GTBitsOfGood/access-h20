import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import classes from './ApplicantModal.module.css'
import TextField from '@material-ui/core/TextField'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { AddRemoveModal } from '../AddRemoveModal/AddRemoveModal'

interface PropTypes {
  shouldShowModal: boolean
  onClose: () => void
}

interface Customer {
  firstName: string
  lastName: string
  accountID: string
  utilityCompany: string
  propertyAddress: string
  zip: string
  city: string
}

export const ApplicantModal = ({ shouldShowModal, onClose }: PropTypes): JSX.Element => {

  const [showAddRemoveModal, setShowAddRemoveModal] = useState(false)

  const [fName, setfName] = useState('')
  const [lName, setlName] = useState('')
  const [uCompany, setuCompany] = useState('')
  const [propAddress, setpropAddress] = useState('')
  const [myzip, setmyZip] = useState('')
  const [mycity, setmyCity] = useState('')

  function handleAdd(): void {
    const data: Customer = {
      firstName: fName,
      lastName: lName,
      accountID: uCompany,
      utilityCompany: propAddress,
      propertyAddress: myzip,
      zip: myzip,
      city: mycity
    }
    setShowAddRemoveModal(true);
  }

  function setFullName(): string {
    return fName + lName
  }

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
                    id="first_name"
                    label="First Name"
                    variant="outlined"
                    onChange={(e) => setfName(e.target.value)}
                  />
                  <TextField
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    onChange={(e) => setlName(e.target.value)}
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
                  onClick={() => handleAdd()}
                  variant="contained"
                  style={{
                    backgroundColor: '#3F78B5',
                    color: '#FFFFFF',
                    borderRadius: '8px'
                  }}
                  >
                    Add New Customer
                  </Button>
                </div>
            </Box>
            <AddRemoveModal 
              name = {fName + " " + lName}
              isSuccessful={true}
              modalAction={"added"}
              shouldShowModal={showAddRemoveModal}
              onClose={() => setShowAddRemoveModal(false)} 
            />
          </div>
        </Modal>
      </div>
    </div>
  )
}
