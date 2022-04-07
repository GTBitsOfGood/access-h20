import * as React from 'react'
import classes from './UtilityPartnerModal.module.css'
import { Button, Modal, TextField, FormControl } from '@material-ui/core'
import { useState } from 'react'
// import { getPartner } from 'server/mongodb/actions/Partner'
// import { Partner } from "server/models/Partner"
import Stack from '@mui/material/Stack'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

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
  const [showAdd, setShowAdd] = useState(true)

  const [companyN, setCompanyN] = useState('')
  const [newemail, setEmail] = useState('')
  const [newphone, setPhone] = useState('')
  const [newstreet, setStreet] = useState('')
  const [newcity, setCity] = useState('')
  const [newstate, setState] = useState('')
  const [newzip, setZip] = useState('')
  const [newnotes, setNotes] = useState('')

  const addPartner = (): void => {
    // TODO: implement backend submissions
    const data: Partner = { // eslint-disable-line
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

  const finished = (): void => {
    setShowAdd(true)
    onClose()
  }
  return (
      <Modal className={classes.modalOverflow} open={shouldShowModal} onClose={onClose}>
        {showAdd
          ? <div className={classes.modalWrapper}>
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
                  <select className={classes.selector} onChange={(e) => setState(e.target.value)}>
                    <option value=""></option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AS">American Samoa</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="UM-81">Baker Island</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="GU">Guam</option>
                    <option value="HI">Hawaii</option>
                    <option value="UM-84">Howland Island</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="UM-86">Jarvis Island</option>
                    <option value="UM-67">Johnston Atoll</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="UM-89">Kingman Reef</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="UM-71">Midway Atoll</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="UM-76">Navassa Island</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="UM-95">Palmyra Atoll</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="VI">United States Virgin Islands</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="UM-79">Wake Island</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
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
                  <Button variant="contained" onClick={addPartner}
                  style={{
                    backgroundColor: '#3F78B5',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    fontFamily: "Arial"
                  }}>Add Utility Partner</Button>
                  <Button variant="text" onClick={() => onClose()}>Cancel</Button>
                </Stack>
          </FormControl>
        </div>
      </div>
          : <div className={classes.modalWrapper2}>
          <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 50 }}/>
          <h2>Utility Partner {companyN} has been successfully added!</h2>
          <Button
              onClick={finished}
              variant="contained"
              style={{
                backgroundColor: '#3F78B5',
                color: '#FFFFFF',
                borderRadius: '8px'
              }}
              >
                  Continue
              </Button>
      </div>
    }
    </Modal>
  )
}
