import * as React from "react";
import classes from "./UtilityPartnerModal.module.css";
import { Button, Modal, TextField, FormControl } from "@material-ui/core";
import PropTypes from "prop-types";
import { useState } from "react";
// import { getPartner } from 'server/mongodb/actions/Partner'
// import { Partner } from "server/models/Partner"
import Stack from '@mui/material/Stack'

interface PropTypes {
    shouldShowModal: boolean
    onClose: () => void
}

interface Partner {
  companyName: string
  email: string
  phone: string
  street: string
  city: string
  state: string
  zip: string
  notes: string
}

export const UtilityPartnerModal = ({ shouldShowModal, onClose }: PropTypes): JSX.Element => {
    const [showSucess, setShowSucess] = useState(false)
    const [showAdd, setShowAdd] = useState(true)

    const [companyN, setCompanyN] = useState('')
    const [newemail, setEmail] = useState('')
    const [newphone, setPhone] = useState('')
    const [newstreet, setStreet] = useState('')
    const [newcity, setCity] = useState('')
    const [newstate, setState] = useState('')
    const [newzip, setZip] = useState('')
    const [newnotes, setNotes] = useState("")

    const addPartner = () => {
      // TODO: implement backend submissions
      const data: Partner = {
        companyName: companyN,
        email: newemail,
        phone: newphone,
        street: newstreet,
        city: newcity,
        state: newstate,
        zip: newzip,
        notes: newnotes
      }
      setShowAdd(false)
    }

    const finished = () => {
      setShowAdd(true)
      onClose()
    }
    return (
      <Modal className={classes.modalOverflow} open={shouldShowModal} onClose={onClose}>
        {showAdd ?
      <div className={classes.modalWrapper}>
        <div className={classes.modalHeader}>
          <h1>Add Utility Partner</h1>
          <span onClick={onClose} className={classes.closeButton}>&times;</span>
        </div>
        <div className={classes.modalContent}>
          
          <FormControl>
            <div className={classes.inputContainer}>
              <label htmlFor="company">Company Name</label>
              <TextField
                required
                variant="outlined"
                id="company"
                onChange={(e) => setCompanyN(e.target.value)}
              />
            </div>
            <div className={classes.rowContainer}>
              <div className={classes.inputContainer}>
                <label htmlFor="email">Email Address</label>
                <TextField
                  required
                  variant="outlined"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={classes.inputContainer}>
                <label htmlFor="phone">Phone Number</label>
                <TextField
                  required
                  variant="outlined"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className={classes.inputContainer}>
                <label htmlFor="street">Property Address</label>
                <TextField
                  required
                  variant="outlined"
                  id="street"
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className={classes.rowContainer}>
                <div className={classes.inputContainer}>
                  <label htmlFor="city">City</label>
                  <TextField
                    required
                    variant="outlined"
                    id="city"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <label htmlFor="state">State</label>
                  <TextField
                    required
                    variant="outlined"
                    id="state"
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <label htmlFor="zip">Zip</label>
                  <TextField
                    required
                    variant="outlined"
                    id="zip"
                    onChange={(e) => setZip(e.target.value)}
                  />
                </div>
              </div>
              <div className={classes.inputContainer}>
                  <label htmlFor="notes">Notes(Optional)</label>
                  <TextField
                    minRows="5"
                    variant="outlined"
                    id="notes"
                    multiline
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
                <Stack
                  className={classes.formSubmitContainer}
                  direction="row-reverse"
                  alignItems="flex-end"
                  spacing={2}
                >
                  <Button variant="contained" className="btn-submit" onClick={addPartner}
                  style={{
                    width: "10%",
                    backgroundColor: "#4DBAEA", 
                    color: '#FFFFFF'
                }}>Add</Button>
                  <Button variant="text" onClick={() => onClose()}>Cancel</Button>
                </Stack>
          </FormControl>
        </div>
      </div> :
        <div className={classes.modalWrapper2}>
          <div className={classes.logo}/>
          <h2>Utility Partner {companyN} has been successfully added</h2>
          <Button 
              onClick={finished} 
              className={classes.btnSubmit}
              variant="contained"
              style={{
                  width: "10%",
                  backgroundColor: "#4DBAEA", 
                  color: '#FFFFFF'
              }}
              >
                  Continue
              </Button>
      </div>
    }
    </Modal>
    )
}