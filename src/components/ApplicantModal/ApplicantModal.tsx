import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import classes from './ApplicantModal.module.css'
import TextField from '@material-ui/core/TextField'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { AddRemoveModal } from '../AddRemoveModal/AddRemoveModal'
import { Select } from '@material-ui/core'

interface PropTypes {
  shouldShowModal: boolean
  onClose: () => void
}

export const ApplicantModal = ({ shouldShowModal, onClose }: PropTypes): JSX.Element => {
  /* eslint-disable */
  const firstNameTextInput= React.useRef(null)
  const lastNameTextInput = React.useRef(null)
  const utilCompanyNameTextInput = React.useRef(null)
  const addressTextInput = React.useRef(null)
  const zipTextInput = React.useRef(null)
  const cityNameTextInput = React.useRef(null)
  const notesTextInput = React.useRef(null)
  const stateNameTextInput = React.useRef(null)
  const phoneNumTextInput = React.useRef(null)
  /* eslint-enable */

  const [showAddRemoveModal, setShowAddRemoveModal] = useState(false)

  const [fName, setfName] = useState('')
  const [lName, setlName] = useState('')
  /* eslint-disable */
  const [uCompany, setuCompany] = useState('')
  const [myphoneNumber, setmyPhoneNumber] = useState('')
  const [propAddress, setpropAddress] = useState('')
  const [myzip, setmyZip] = useState('')
  const [mycity, setmyCity] = useState('')
  /* eslint-enable */

  function handleAdd (): void {
    // firstNameTextInput.current.value = "";
    // lastNameTextInput.current.value = "";
    // utilCompanyNameTextInput.current.value = ""
    // addressTextInput.current.value = ""
    // zipTextInput.current.value = ""
    // cityNameTextInput.current.value = ""
    // notesTextInput.current.value = ""
    // stateNameTextInput.current.value = ""
    // phoneNumTextInput.current.value = ""
    setShowAddRemoveModal(true)
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
                    inputRef={firstNameTextInput}
                    onChange={(e) => setfName(e.target.value)}
                  />
                  <TextField
                    id="last-name"
                    label="Last Name"
                    variant="outlined"
                    inputRef={lastNameTextInput}
                    onChange={(e) => setlName(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="account-id"
                    label="Account ID"
                    variant="outlined"
                    inputRef={lastNameTextInput}
                    onChange={(e) => setuCompany(e.target.value)}
                  />
                  <TextField
                    id="utility-company"
                    label="Utility Company"
                    variant="outlined"
                    inputRef={utilCompanyNameTextInput}
                    onChange={(e) => setuCompany(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="phoneNum"
                    label="Phone Number"
                    inputRef={phoneNumTextInput}
                    variant="outlined"
                    style = {{ width: 200 }}
                    onChange={(e) => setmyPhoneNumber(e.target.value)}
                  />
                  <TextField
                    id="property-address"
                    label="Property Address"
                    variant="outlined"
                    inputRef={addressTextInput}
                    style = {{ width: 450 }}
                    onChange={(e) => setpropAddress(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="zip-code"
                    label="Zip/Postal Code"
                    variant="outlined"
                    inputRef={zipTextInput}
                    style = {{ width: 200 }}
                    onChange={(e) => setmyZip(e.target.value)}
                  />
                  <TextField
                    id="city"
                    label="City"
                    inputRef={cityNameTextInput}
                    variant="outlined"
                    onChange={(e) => setmyCity(e.target.value)}
                  />
                  <Select className={classes.selector} variant="outlined" style = {{ width: 120 }} label="State">
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
                  </Select>
                </div>
                <div>
                  <TextField
                    id="notes-multiline"
                    label="Notes (Optional)"
                    multiline
                    rows={4}
                    variant="outlined"
                    inputRef={notesTextInput}
                    style = {{ width: 665 }}
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
              name = {fName + ' ' + lName}
              isSuccessful={true}
              modalAction={'added'}
              shouldShowModal={showAddRemoveModal}
              onClose={() => setShowAddRemoveModal(false)}
            />
          </div>
        </Modal>
      </div>
    </div>
  )
}
