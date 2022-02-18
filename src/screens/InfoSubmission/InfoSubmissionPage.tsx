import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import classes from './InfoSubmissionPage.module.css'
import { ApplicantStatus, ApplicantStatusColor } from '../../types/Applicant'
import { Checkbox, FormLabel } from '@mui/material'
import EditInfoSubmissionModal from 'src/components/EditInfoSubmissionModal'
import { Edit } from '@mui/icons-material'
import Stack from '@mui/material/Stack'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'

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

  const [oldPaymentAns, setOldPaymentAns] = useState(false)
  const [oldServicesAns, setOldServicesAns] = useState(false)
  const [oldContactAns, setOldContactAns] = useState(false)
  const [oldWaterAns, setOldWaterAns] = useState(false)

  // File
  const [paymentFile, setPaymentFile] = useState<File | null>(null)
  const [usageFile, setUsageFile] = useState<File | null>(null)

  const [oldPaymentFile, setOldPaymentFile] = useState<File | null>(null)
  const [oldUsageFile, setOldUsageFile] = useState<File | null>(null)

  // Short answer
  const [adjustAns, setAdjustAns] = useState('')
  const [infoAns, setInfoAns] = useState('')
  const [indivAns, setIndivAns] = useState('')

  const [oldAdjustAns, setOldAdjustAns] = useState('')
  const [oldInfoAns, setOldInfoAns] = useState('')
  const [oldIndivAns, setOldIndivAns] = useState('')

  function handleClick (): void {
    setPaymentAns(oldPaymentAns)
    setServicesAns(oldServicesAns)
    setContactAns(oldContactAns)
    setWaterAns(oldWaterAns)
    setPaymentFile(oldPaymentFile)
    setUsageFile(oldUsageFile)
    setAdjustAns(oldAdjustAns)
    setInfoAns(oldInfoAns)
    setIndivAns(oldIndivAns)
    setFormEditable(!formEditable)
  }

  function handleBackToDash (): void {
    if (formEditable) { setShowModal(formEditable) } else { window.location.href = 'javascript:history.back()' }
  }

  const closeModalHandler = (): void => setShowModal(false)

  const generateInfoSubmission = (): Object => {
    setOldPaymentAns(paymentAns)
    setOldServicesAns(servicesAns)
    setOldContactAns(contactAns)
    setOldWaterAns(waterAns)
    setOldPaymentFile(paymentFile)
    setOldUsageFile(usageFile)
    setOldAdjustAns(adjustAns)
    setOldInfoAns(infoAns)
    setOldIndivAns(indivAns)
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
              <a className={classes.back} onClick={handleBackToDash}>{'< Back to Dashboard'}</a>

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
        {!formEditable
          ? <Button
          startIcon={<Edit />}
          onClick={() => setFormEditable(!formEditable)}
          variant="contained"
          color = "primary"
          style={{ textTransform: 'none' }}
        >
          Update Info
        </Button>
          : <Stack direction="row" spacing={2}>
            <Button
            type="button"
            variant = "contained"
            color = "primary"
            disabled={(paymentFile === null || usageFile === null || infoAns === '' || indivAns === '' || adjustAns === '')}
            style={{ textTransform: 'none' }}
            onClick = {(() => console.log(generateInfoSubmission()))}>
                Save
            </Button>
            <Button
            type="button"
            variant = "text"
            style={{ textTransform: 'none' }}
            onClick = {handleClick}>
                Cancel
            </Button>
          </Stack>
}
          <div className={classes.eligibilityContainer}>
            <h3 className={classes.eligibilityHeader}>Eligibility</h3>
            <div className={classes.eligibilityBody}>
              <div className={classes.eligibilityCheckbox}>
              {formEditable && <Checkbox
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                checked={paymentAns}
                                onChange={() => setPaymentAns(!paymentAns)}
                                disabled={!formEditable}/>}
                  {!formEditable && paymentAns && <CheckCircleIcon color="success" />}
                  {!formEditable && !paymentAns && <CancelIcon color="error" />}
                <div className={classes.eligibilityText}>
                  <h4 className={classes.headerNoMargin}>Payments</h4>
                  <p style = {{ fontWeight: 'lighter' }}>Has the client made a minimum of 3 payments over the last 12 months?</p>
                </div>
              </div>
              <div className={classes.eligibilityCheckbox}>
              {formEditable && <Checkbox
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                checked={servicesAns}
                                onChange={() => setServicesAns(!servicesAns)}
                                disabled={!formEditable}
                                />}
                  {!formEditable && servicesAns && <CheckCircleIcon color="success" />}
                  {!formEditable && !servicesAns && <CancelIcon color="error" />}
                <div className={classes.eligibilityText}>
                  <h4 className={classes.headerNoMargin}>Minimum Services</h4>
                  <p style = {{ fontWeight: 'lighter' }}>Does the customer have a minimum of 12 months of service?</p>
                </div>
              </div>
              <div className={classes.eligibilityCheckbox}>
              {formEditable && <Checkbox
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                checked={contactAns}
                                onChange={() => setContactAns(!contactAns)}
                                disabled={!formEditable}/>}
                  {!formEditable && contactAns && <CheckCircleIcon color="success" />}
                  {!formEditable && !contactAns && <CancelIcon color="error" />}
                <div className={classes.eligibilityText}>
                  <h4 className={classes.headerNoMargin}>Customer Contact</h4>
                  <p style = {{ fontWeight: 'lighter' }}>Has the customer been in contact with your utility company?</p>
                </div>
              </div>
              <div className={classes.eligibilityCheckbox}>
              {formEditable && <Checkbox
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                checked={waterAns}
                                onChange={() => setWaterAns(!waterAns)}
                                disabled={!formEditable}/>}
                  {!formEditable && waterAns && <CheckCircleIcon color="success" />}
                  {!formEditable && !waterAns && <CancelIcon color="error" />}
                <div className={classes.eligibilityText}>
                  <h4 className={classes.headerNoMargin}>Water Meter</h4>
                  <p style = {{ fontWeight: 'lighter' }}>Does the property with dedicated water meter?</p>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.documentContainer}>
            <h3 className={classes.documentHeader}>Documents</h3>
            <div className={classes.documentBody}>
              <div className={classes.documentSubmission}>
              <FormLabel style={{ fontWeight: 'bold' }} error={paymentFile === null} htmlFor="infoAns">Payment History</FormLabel>
                <p style = {{ fontWeight: 'lighter' }}>Please upload the customer's payment history over the last 12 months.</p>
                <div className={classes.submissionStack}>
                {formEditable && <Button
                    variant="contained"
                    component="label"
                    disabled={!formEditable}
                    style = {{ width: '15%', textTransform: 'none', marginRight: '0.5rem', height: '2rem' }}>
                    Upload
                    <input id="paymentFile" type="file" hidden onChange = {(e) => {
                      if (e.target.files === null || e.target.files.length < 1) {
                        alert('Please upload a valid file.')
                        return
                      }

                      setPaymentFile(e.target.files[0])
                    }}/>
                  </Button>}
                  {formEditable && paymentFile !== null && <InsertDriveFileIcon color="disabled" />}
                  {formEditable && <p className={classes.fileFontColor}>{paymentFile?.name}</p>}
                  {!formEditable && paymentFile !== null && <InsertDriveFileIcon color="primary" />}
                  {!formEditable && <p className={classes.displayFileColor}>{paymentFile?.name}</p>}
                </div>
              </div>

              <div className={classes.documentSubmission}>
              <FormLabel style={{ fontWeight: 'bold' }} error={usageFile === null} htmlFor="infoAns">Payment History</FormLabel>
                <p style = {{ fontWeight: 'lighter' }}>Please upload the customer's usage history over the last 12 months.</p>
                <div className={classes.submissionStack}>
                {formEditable && <Button
                    id="usageFile"
                    variant="contained"
                    disabled={!formEditable}
                    component="label"
                    style = {{ width: '15%', textTransform: 'none', marginRight: '0.5rem', height: '2rem' }}>
                    Upload
                    <input id="paymentFile" type="file" hidden onChange = {(e) => {
                      if (e.target.files === null || e.target.files.length < 1) {
                        alert('Please upload a valid file.')
                        return
                      }

                      setUsageFile(e.target.files[0])
                    }}/>
                  </Button>}
                    {formEditable && usageFile !== null && <InsertDriveFileIcon color="disabled" />}
                    {formEditable && <p className={classes.fileFontColor}>{usageFile?.name}</p>}
                    {!formEditable && usageFile !== null && <InsertDriveFileIcon color="primary" />}
                    {!formEditable && <p className={classes.displayFileColor}>{usageFile?.name}</p>}
                </div>
              </div>
            </div>
          </div>

          <div className={classes.additionalContainer}>
            <h3 className={classes.additionalHeader}>Additional</h3>
            <div className={classes.additionalBody}>
              <div className={classes.inputContainer}>
              <FormLabel style={{ fontWeight: 'bold' }} error={adjustAns === ''} htmlFor="adjustAns">Are there any pending adjustments?</FormLabel>
                {formEditable && <TextField
                  id="adjustAns"
                  value={adjustAns}
                  required
                  error={adjustAns === ''}
                  minRows="5"
                  multiline
                  variant="outlined"
                  onChange= {(e) => setAdjustAns(e.target.value)}
                  disabled={!formEditable}
                  />}
                  {!formEditable && <p className={classes.additionalfontStyle}>{adjustAns}</p>}
              </div>
              <div className={classes.inputContainer}>
              <FormLabel style={{ fontWeight: 'bold' }} error={indivAns === ''} htmlFor="indivAns">What (if any) other individuals are involved (spouse, landlord, dependent)?</FormLabel>
                {formEditable && <TextField
                    id="indivAns"
                    value={indivAns}
                    required
                    error={indivAns === ''}
                    minRows="5"
                    multiline
                    variant="outlined"
                    onChange={(e) => setIndivAns(e.target.value)}
                    disabled={!formEditable}/>}
                    {!formEditable && <p className={classes.additionalfontStyle}>{indivAns}</p>}
              </div>
              <div className={classes.inputContainer}>
                <FormLabel style={{ fontWeight: 'bold' }} error={infoAns === ''} htmlFor="infoAns">Is there any additional information we should know about the account?</FormLabel>
                  {formEditable && <TextField
                      id="infoAns"
                      value={infoAns}
                      required
                      error={infoAns === ''}
                      minRows="5"
                      multiline
                      variant="outlined"
                      onChange= {(e) => setInfoAns(e.target.value)}
                      disabled={!formEditable}/>}
                      {!formEditable && <p className={classes.additionalfontStyle}>{infoAns}</p>}
                      {(paymentFile === null || usageFile === null || infoAns === '' || indivAns === '' || adjustAns === '') && formEditable && <FormLabel style={{ fontWeight: 'bold', marginTop: '2rem' }} error>* Please fill all fields before updating customer info</FormLabel>}
              </div>
            </div>
          </div>
          {formEditable
            ? <Stack style={{ marginLeft: '11.5rem' }} direction="row" spacing={2}>
            <Button
            type="button"
            disabled={(paymentFile === null || usageFile === null || infoAns === '' || indivAns === '' || adjustAns === '')}
            variant = "contained"
            color = "primary"
            style={{ textTransform: 'none' }}
            onClick = {(() => console.log(generateInfoSubmission()))}>
                Save
            </Button>
            <Button
            type="button"
            variant = "text"
            style={{ textTransform: 'none' }}
            onClick = {handleClick}>
                Cancel
            </Button>
          </Stack>
            : <div></div>
}
      </div>
    </div>
  )
}

export default InfoSubmissionPage
