import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import classes from './InfoSubmissionPage.module.css'
import { ApplicantStatus, ApplicantStatusColor } from '../../types/Applicant'
import { Box, Checkbox, FormControlLabel } from '@mui/material'
import EditInfoSubmissionModal from 'src/components/EditInfoSubmissionModal'

interface Applicant {
  name: string
  utilityCompany: string
  accountId: string
  streetAddress: string
  cityAddress: string
  phone: string
  applied: Date
  status: ApplicantStatus
}

const dummyData: Applicant = {
  name: 'Ashley Miller',
  utilityCompany: 'Durham',
  accountId: '50000123',
  streetAddress: '2886 Lime St',
  cityAddress: 'Durham, NC 27704',
  phone: '(404)123-4567',
  applied: new Date('2019-01-16'),
  status: ApplicantStatus.AwaitingUtility
}

const setStatusColor = (status: ApplicantStatus): string => {
  return ApplicantStatusColor[status]
}

interface PropTypes {
  applicantId: string
}

const InfoSubmissionPage = ({ applicantId }: PropTypes): JSX.Element => {
  // Yes or No
  const [showModal, setShowModal] = useState(false)
  const [formEditable, setFormEditable] = useState(false)
  const [paymentAns, setPaymentAns] = useState(false)
  const [servicesAns, setServicesAns] = useState(false)
  const [contactAns, setContactAns] = useState(false)
  const [waterAns, setWaterAns] = useState(false)

  // File
  const [paymentFile, setPaymentFile] = useState<File | null>(null)
  const [usageFile, setUsageFile] = useState<File | null>(null)

  // Short answer
  const [adjustAns, setAdjustAns] = useState('')
  const [infoAns, setInfoAns] = useState('')
  const [indivAns, setIndivAns] = useState('')

  function handleClick (): void {
    setFormEditable(!formEditable)
  }

  function handleBackToDash (): void {
    if (formEditable) { setShowModal(formEditable) } else { window.location.href = 'javascript:history.back()' }
  }

  const closeModalHandler = (): void => setShowModal(false)

  const generateInfoSubmission = (): Object => {
    setFormEditable(false)
    return {
      payments: booleanToYesOrNo(paymentAns),
      minimumService: booleanToYesOrNo(servicesAns),
      customerContact: booleanToYesOrNo(contactAns),
      waterMeter: booleanToYesOrNo(waterAns),
      paymentFile: paymentFile,
      usageFile: usageFile,
      pendingAdjustments: adjustAns,
      individualsInvolved: indivAns,
      additionalInformation: infoAns
    }
  }

  const booleanToYesOrNo = (input: boolean): string => {
    if (input) {
      return 'Yes'
    }
    return 'No'
  }

  return (
    <div className={classes.bacoground}>
      <div className={classes.mainContainer}>
        <div>
          <div className='accountModal'>
            <div>
              <a className={classes.back} onClick={handleBackToDash}>{"< Back to Dashboard"}</a>

            </div>
            <EditInfoSubmissionModal shouldShowModal={showModal} onClose={closeModalHandler}/>
          </div>
          <h1>{dummyData.name}</h1>
          <div>
            <div className={classes.header}>
              <div className={classes.headerInfoBox}>
                <h4 className={classes.headerNoMargin}>Status</h4>
                <p style = {{ backgroundColor: setStatusColor(dummyData.status), width: '9rem', textAlign: 'center', borderRadius: '8px' }}>{dummyData.status}</p>
              </div>
              <div className={classes.headerInfoBox}>
                <h4 className={classes.headerNoMargin}>Account ID</h4>
                <p>{dummyData.accountId}</p>
              </div>
              <div className={classes.headerInfoBox}>
                <h4 className={classes.headerNoMargin}>Phone Number</h4>
                <p>{dummyData.phone}</p>
              </div>
              <div className={classes.headerInfoBox}>
                <h4 className={classes.headerNoMargin}>Address</h4>
                <p className={classes.streetAddress}>{dummyData.streetAddress}</p>
                <p className={classes.headerNoMargin}>{dummyData.cityAddress}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.noteContainer}>
            <h3 className={classes.noteHead}>Notes</h3>
            <a className={classes.addNote}>+ Add Note</a>
        </div>
        
        <Box sx={{ '& > button': { m: 1 } }}>
        <FormControlLabel
          sx={{
            display: 'block'
          }}
          control={
            <Button
              onClick={handleClick}
              variant="outlined"
              color = "primary"
            >
              Update Info
            </Button>
          }
          label=""
          />
          <div className={classes.eligibilityContainer}>
            <h3 className={classes.eligibilityHeader}>Eligibility</h3>
            <div className={classes.eligibilityBody}>
              <div className={classes.eligibilityCheckbox}>
                  <Checkbox checked={paymentAns} onChange={() => setPaymentAns(!paymentAns)} disabled={!formEditable}/>
                <div className={classes.eligibilityText}>
                  <h4 className={classes.headerNoMargin}>Payments</h4>
                  <p style = {{ fontWeight: 'lighter' }}>Has the client made a minimum of 3 payments over the last 12 months?</p>
                </div>
              </div>
              <div className={classes.eligibilityCheckbox}>
                  <Checkbox checked={servicesAns} onChange={() => setServicesAns(!servicesAns)} disabled={!formEditable}/>
                <div className={classes.eligibilityText}>
                  <h4 className={classes.headerNoMargin}>Minimum Services</h4>
                  <p style = {{ fontWeight: 'lighter' }}>Does the customer have a minimum of 12 months of service?</p>
                </div>
              </div>
              <div className={classes.eligibilityCheckbox}>
                  <Checkbox checked={contactAns} onChange={() => setContactAns(!contactAns)} disabled={!formEditable}/>
                <div className={classes.eligibilityText}>
                  <h4 className={classes.headerNoMargin}>Customer Contact</h4>
                  <p style = {{ fontWeight: 'lighter' }}>Has the customer been in contact with your utility company?</p>
                </div>
              </div>
              <div className={classes.eligibilityCheckbox}>
                  <Checkbox checked={waterAns} onChange={() => setWaterAns(!waterAns)} disabled={!formEditable}/>
                <div className={classes.eligibilityText}>
                  <h4 className={classes.headerNoMargin}>Water Meter</h4>
                  <p style = {{ fontWeight: 'lighter' }}>Does the property with dedicated water meter?</p>
                </div>
              </div>
            </div>
          </div>

          <h3>Document Submission</h3>
          <div style = {{ display: 'flex', width: '300px', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              component="label"
              disabled={!formEditable}
              style = {{ flex: '50px', width: '75px', height: '50px' }}>
              Upload
              <input id="paymentFile" type="file" hidden onChange = {(e) => {
                if (e.target.files === null || e.target.files.length < 1) {
                  alert('Please upload a valid file.')
                  return
                }

                setPaymentFile(e.target.files[0])
              }}/>
            </Button>
            <p style = {{ flex: '50px', padding: '10px' }}>Payment History</p>
          </div>
          <div style = {{ display: 'flex', width: '300px', justifyContent: 'space-between' }}>
            <Button
              id="usageFile"
              variant="outlined"
              disabled={!formEditable}
              component="label"
              style = {{ flex: '50px', width: '75px', height: '50px' }}>
              Upload
              <input id="paymentFile" type="file" hidden onChange = {(e) => {
                if (e.target.files === null || e.target.files.length < 1) {
                  alert('Please upload a valid file.')
                  return
                }

                setUsageFile(e.target.files[0])
              }}/>
            </Button>
            <p style = {{ flex: '50px', padding: '10px' }}>Usage History</p>
          </div>

          <h3>Other</h3>
          <div>
            <p>Are there any pending adjustments?</p>
            <TextField
              id="adjustAns"
              onChange= {(e) => setAdjustAns(e.target.value)}
              disabled={!formEditable}
              />

          <p>What (if any) other individuals are involved (spouse, landlord, dependent)?</p>
          <TextField
              id="indivAns"
              onChange={(e) => setIndivAns(e.target.value)}
              disabled={!formEditable}/>
          </div>
          <div>
              <p>Is there any additional information we should know about the account?</p>
              <TextField
                  id="infoAns"
                  onChange= {(e) => setInfoAns(e.target.value)}
                  disabled={!formEditable}/>
          </div>
            <Button
            type="button"
            variant = "outlined"
            onClick = {(() => console.log(generateInfoSubmission()))}>

                Save
            </Button>

        </Box>
      </div>
    </div>
  )
}

export default InfoSubmissionPage
