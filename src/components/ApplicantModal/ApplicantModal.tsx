import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import classes from './ApplicantModal.module.css'
import TextField from '@material-ui/core/TextField'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { AddRemoveModal } from '../AddRemoveModal/AddRemoveModal'
import { Select } from '@material-ui/core'
import { Client } from 'server/models/Client'
import { ApplicantStatus } from 'src/types/Applicant'
import { addClient } from 'src/actions/Client'

import { getEligibilityQuestions, getDocumentQuestions, getOtherQuestions } from 'src/actions/FormQuestions'
import { addInfo } from 'src/actions/InfoSubmission'

import { eligibilityQuestion, eligibilityQA } from 'server/models/EligibilityQuestion'
import { documentQuestion, documentQA } from 'server/models/DocumentQuestion'
import { otherQuestion, otherQA } from 'server/models/OtherQuestion'
import { Info } from 'server/models/InfoSubmission'

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
  const stateNameTextInput = React.useRef(null)
  const phoneNumTextInput = React.useRef(null)
  /* eslint-enable */

  const [showAddRemoveModal, setShowAddRemoveModal] = useState(false)

  const [fName, setfName] = useState('')
  const [lName, setlName] = useState('')
  const [accountID, setAccountID] = useState('')
  /* eslint-disable */
  const [note, setNote] = useState('')
  const [state, setState] = useState('')
  const [uCompany, setuCompany] = useState('')
  const [myphoneNumber, setmyPhoneNumber] = useState('')
  const [propAddress, setpropAddress] = useState('')
  const [myzip, setmyZip] = useState('')
  const [mycity, setmyCity] = useState('')
  /* eslint-enable */

  async function handleAdd (): Promise<void> {
    const data: Client = {
      accountId: accountID,
      name: fName + ' ' + lName,
      status: ApplicantStatus.AwaitingAccessH2O,
      phoneNumber: myphoneNumber,
      propertyAddress: propAddress,
      utilityCompany: uCompany,
      applied: new Date()
    }

    setShowAddRemoveModal(true)

    const eligibilityQuestionsPromise = getEligibilityQuestions()
    const documentQuestionsPromise = getDocumentQuestions()
    const otherQuestionsPromise = getOtherQuestions()

    const values = await Promise.all([eligibilityQuestionsPromise, documentQuestionsPromise, otherQuestionsPromise])
    const eligibilityQuestions = values[0]
    const documentQuestions = values[1]
    const otherQuestions = values[2]

    const eligibilityQuestionAnswer: eligibilityQA[] = eligibilityQuestions.map((question: eligibilityQuestion) => {
      return {
        question: question,
        answer: false
      }
    })

    const documentQuestionAnswer: documentQA[] = documentQuestions.map((question: documentQuestion) => {
      return {
        question: question,
        answer: Buffer.from('')
      }
    })

    const otherQuestionAnswer: otherQA[] = otherQuestions.map((question: otherQuestion) => {
      return {
        question: question,
        answer: ''
      }
    })

    const info: Info = {
      accountId: accountID,
      eligibilityQuestions: eligibilityQuestionAnswer,
      documents: documentQuestionAnswer,
      otherQuestions: otherQuestionAnswer
    }

    console.log(data)
    console.log(info)

    await addInfo(info)
    await addClient(data)
    //  window.location.reload()
  }

  return (
    <div>
      <div>
        <Modal className={classes.modalOverflow} open={shouldShowModal} onClose={onClose}>
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
                    onChange={(e) => setAccountID(e.target.value)}
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
                  <Select onChange={(e) => setState(e.target.value as string)} className={classes.selector} variant="outlined" style = {{ width: 120 }} label="State">
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
                <div className={classes.modalfooter}>
                  <Button
                  onClick={(async () => await handleAdd())}
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
