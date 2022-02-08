import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { ApplicantStatus, ApplicantStatusColor } from '../../types/Applicant'
import { Box, Checkbox, FormControlLabel } from '@mui/material'
import EditInfoSubmissionModal from 'src/components/EditInfoSubmissionModal'

interface Applicant {
  name: string
  utilityCompany: string
  accountId: string
  propertyAddress: string
  applied: Date
  status: ApplicantStatus
}

const dummyData: Applicant = {
  name: 'Ashley Miller',
  utilityCompany: 'Durham',
  accountId: '50000123',
  propertyAddress: '2886 Lime St Durham, NC 27704',
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
    <div style = {{ padding: '25px', border: '75px solid #CFEBFD' }}>
      <div>
        <div className='accountModal'>
          <a onClick={handleBackToDash}>Back to Dashboard</a>
          <EditInfoSubmissionModal shouldShowModal={showModal} onClose={closeModalHandler}/>
        </div>
        <h1>{dummyData.name}</h1>
        <div>
          <div style = {{ display: 'flex', width: '500px', height: '35px' }}>
            <div style = {{ flex: '150px' }}>
              <h4>Status</h4>
            </div>
            <div style = {{ flex: '100px' }}>
              <h4>Account ID</h4>
            </div>
            <div style = {{ flex: '100px' }}>
              <h4>Address</h4>
            </div>
          </div>
          <div style = {{ display: 'flex', width: '500px' }}>
            <div style = {{ flex: '150px' }}>
              <h4 style = {{ fontWeight: 'normal', backgroundColor: setStatusColor(dummyData.status), width: '85%', textAlign: 'center', borderRadius: '8px' }}>{dummyData.status}</h4>
            </div>
            <div style = {{ flex: '100px' }}>
              <h4 style = {{ fontWeight: 'normal' }}>{dummyData.accountId}</h4>
            </div>
            <div style = {{ flex: '100px' }}>
              <h4 style = {{ fontWeight: 'normal' }}>{dummyData.propertyAddress}</h4>
            </div>
          </div>
        </div>
      </div>

      <hr style = {{ width: '100%', border: '1px solid #DADADA' }}/>

      <div style = {{ display: 'flex', width: '500px', height: '35px' }}>
        <div style = {{ flex: '150px' }}>
          <h3>Notes</h3>
        </div>
        <div style = {{ flex: '150px' }}>
          <a style = {{ fontWeight: 'normal', color: '#4DBAEA', textDecoration: 'none', fontFamily: 'Roboto', padding: '15px' }}>+ Add Note</a>
        </div>
      </div>

      <hr style = {{ width: '100%', border: '1px solid #DADADA', marginTop: '30px', marginBottom: '30px' }}/>

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

        <h3>Eligibility</h3>
        <div>
          <div style = {{ display: 'flex', width: '1000px' }}>
            <div style = {{ flex: '50px' }}>
              <Checkbox checked={paymentAns} onChange={() => setPaymentAns(!paymentAns)} disabled={!formEditable}/>
            </div>
            <div style = {{ flex: '700px' }}>
              <p style = {{ fontWeight: 'bold' }}>Payments</p>
              <p style = {{ fontWeight: 'lighter' }}>Has the client made a minimum of 3 payments over the last 12 months?</p>
            </div>
          </div>
          <div style = {{ display: 'flex', width: '1000px' }}>
            <div style = {{ flex: '50px' }}>
              <Checkbox checked={servicesAns} onChange={() => setServicesAns(!servicesAns)} disabled={!formEditable}/>
            </div>
            <div style = {{ flex: '700px' }}>
              <p style = {{ fontWeight: 'bold' }}>Minimum Services</p>
              <p style = {{ fontWeight: 'lighter' }}>Does the customer have a minimum of 12 months of service?</p>
            </div>
          </div>
          <div style = {{ display: 'flex', width: '1000px' }}>
            <div style = {{ flex: '50px' }}>
              <Checkbox checked={contactAns} onChange={() => setContactAns(!contactAns)} disabled={!formEditable}/>
            </div>
            <div style = {{ flex: '700px' }}>
              <p style = {{ fontWeight: 'bold' }}>Customer Contact</p>
              <p style = {{ fontWeight: 'lighter' }}>Has the customer been in contact with your utility company?</p>
            </div>
          </div>
          <div style = {{ display: 'flex', width: '1000px' }}>
            <div style = {{ flex: '50px' }}>
              <Checkbox checked={waterAns} onChange={() => setWaterAns(!waterAns)} disabled={!formEditable}/>
            </div>
            <div style = {{ flex: '700px' }}>
              <p style = {{ fontWeight: 'bold' }}>Water Meter</p>
              <p style = {{ fontWeight: 'lighter' }}>Does the property with dedicated water meter?</p>
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
  )
}

export default InfoSubmissionPage
