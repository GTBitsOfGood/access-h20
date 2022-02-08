import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {ApplicantStatus, ApplicantStatusColor} from '../../types/Applicant'
import { Checkbox } from '@mui/material'
import styled from 'styled-components'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';


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

const back = '<   Back to Dashboard'

interface PropTypes {
  applicantId: string
}

const InfoSubmissionPage = ({ applicantId }: PropTypes): JSX.Element => {
  //Status
  const [values, setValues] = useState([
    "Terminated",
    "Denied",
    "Completed",
    "Approved",
    "Awaiting AccessH2O",
    "Awaiting Utility"
  ]);
  const [status, setStatus] = useState("Awaiting Utility");


  //Notes
  const initArr: string[] = []
  const [textFieldDisplayed, setTextFieldDisplayed] = useState(false);
  const [currentInput, setCurrentInput] = useState("");
  const [notes, setNotes] = useState(initArr);

  // const [showNotes, setShowNotes] = useState(false);
  // const [notes, setNotes] = useState([]);

  // Yes or No
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

  const generateInfoSubmission = (): Object => {
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

  // const handleNoteClick = () => {
    
  //   setShowNotes(true)
  // }

  const handleStatusClick = (event: any) => {
    setStatus(event.target.value);
    console.log(event.target.value);
  } 

  const booleanToYesOrNo = (input: boolean): string => {
    if (input) {
      return 'Yes'
    }
    return 'No'
  }

  return (
    <div style = {{ padding: '25px', border: '75px solid #CFEBFD', position: 'absolute', width: '1050px', height: '2000px' }}>
      <div>
        <a href="./" style = {{ fontWeight: 'normal', color: '#9A9A9A', textDecoration: 'none', fontFamily: 'Roboto' }}>{back}</a>
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
          <div style = {{ display: 'flex', width: '500px', margin: '20px' }}>
            <div style = {{ flex: '150px', left: "79px" }}>             
              <Select 
                id = "status-menu"
                onChange={handleStatusClick}
              >
                <MenuItem value={"Awaiting Utility"}>Awaiting Utility</MenuItem>
                <MenuItem value={"Terminated"}>Terminated</MenuItem>
                <MenuItem value={"Denied"}>Denied</MenuItem>
                <MenuItem value={"Completed"}>Completed</MenuItem>
                <MenuItem value={"Approved"}>Approved</MenuItem>
                <MenuItem value={"Awaiting AccessH2O"}>Awaiting AccessH2O</MenuItem>
              </Select>
              <h4 style = {{ fontWeight: 'normal', backgroundColor: setStatusColor(dummyData.status), width: '85%', textAlign: 'center', borderRadius: '8px' }}>{status}</h4>
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
      
      <div style = {{ display: 'flex', width: '500px', height: '50px' }}>
        <div style = {{ flex: '150px' }}>
          <h3>Notes</h3>
        </div>
        <div style = {{ flex: '150px' }}>
          {
             textFieldDisplayed ? 
             <TextField id="notesField" label="Add your note here" variant="outlined" style={{height: '106px', width: '675px'}} onChange={(e) => setCurrentInput(e.target.value)} value={currentInput}></TextField> :
             <a style = {{ fontWeight: 'normal', color: '#4DBAEA', textDecoration: 'none', fontFamily: 'Roboto', padding: '15px' }}  onClick={() => setTextFieldDisplayed(true)}> + Add Note </a>
          }
        </div>
      </div>

      <div style = {{ display: 'flex', width: '300px', justifyContent: 'space-between' }}>
      </div>

      <div style = {{ display: 'flex', width: '300px', justifyContent: 'space-between' }}>
        <Button id="note" onClick={() => {setNotes([...notes, currentInput]); setCurrentInput(""); setTextFieldDisplayed(false)}} variant="contained" component="label" style = {{ backgroundColor: '#3f78b5', flex: '50px', width: '122px', height: '38px', 
          borderRadius: '8px', left: '388px', position: 'absolute', top: '850px', display: 'flex', flexDirection: 'row', }}>
          Add Note
        </Button>
        {
          notes.map(note => <TextField id="savedNotes" variant="filled" style={{height: '106px', width: '675px'}} defaultValue={note} InputProps={{readOnly: true,}}></TextField>)
        }
        <Button id="note" onClick={() => {setTextFieldDisplayed(false)}} variant="contained" component="label" style = {{ backgroundColor: '#ffffff', flex: '50px', width: '122px', height: '38px', 
          left: '561px', position: 'absolute', top: '850px' }}>
          Cancel
        </Button>

      </div>
      

      <hr style = {{ width: '100%', border: '1px solid #DADADA', marginTop: '50px', marginBottom: '30px', position: 'absolute', width: '1050px',
        top: '939px' }}/>

      <h3 style= {{position: 'absolute', width: '87px', height: '27px', top: '980px'}}>Eligibility</h3>
      <div>
        <div style = {{ display: 'flex', width: '1000px' }}>
          <div style = {{ flex: '50px' }}>
            <Checkbox checked={paymentAns} style={{position: 'absolute', width: '14.15px', left: '396.2px', top: '1015px'}}onChange={() => setPaymentAns(!paymentAns)} />
          </div>
          <div style = {{ flex: '700px' }}>
            <p style = {{ fontWeight: 'bold', position: 'absolute', width: '77px', height: '22px', left: '438px', top: '985px' }}>Payments</p>
            <p style = {{ fontWeight: 'lighter', position: 'absolute', width: '304px', height: '19px', left: '438px', top: '1003px' }}>Has the client made a minimum of 3 payments over the last 12 months?</p>
          </div>
        </div>
        <div style = {{ display: 'flex', width: '1000px' }}>
          <div style = {{ flex: '50px' }}>
            <Checkbox checked={servicesAns} style={{position: 'absolute', width: '14.15px', left: '396.2px', top: '1080px'}} onChange={() => setServicesAns(!servicesAns)} />
          </div>
          <div style = {{ flex: '700px' }}>
            <p style = {{ fontWeight: 'bold', position: 'absolute', width: '140px', height: '22px', left: '438px', top: '1050px' }}>Minimum Services</p>
            <p style = {{ fontWeight: 'lighter', position: 'absolute', width: '304px', height: '19px', left: '438px', top: '1068px' }}>Does the customer have a minimum of 12 months of service?</p>
          </div>
        </div>
        <div style = {{ display: 'flex', width: '1000px' }}>
          <div style = {{ flex: '50px' }}>
            <Checkbox checked={contactAns} style = {{position: 'absolute', width: '14.15px', left: '396.2px', top: '1145px'}} onChange={() => setContactAns(!contactAns)} />
          </div>
          <div style = {{ flex: '700px' }}>
            <p style = {{ fontWeight: 'bold', position: 'absolute', width: '140px', height: '22px', left: '438px', top: '1115px' }}>Customer Contact</p>
            <p style = {{ fontWeight: 'lighter', position: 'absolute', width: '304px', height: '19px', left: '438px', top: '1133px' }}>Has the customer been in contact with your utility company?</p>
          </div>
        </div>
        <div style = {{ display: 'flex', width: '1000px' }}>
          <div style = {{ flex: '50px' }}>
            <Checkbox checked={waterAns} style = {{position: 'absolute', width: '14.15px', left: '396.2px', top: '1210px'}} onChange={() => setWaterAns(!waterAns)} />
          </div>
          <div style = {{ flex: '700px' }}>
            <p style = {{ fontWeight: 'bold', position: 'absolute', width: '140px', height: '22px', left: '438px', top: '1180px' }}>Water Meter</p>
            <p style = {{ fontWeight: 'lighter', position: 'absolute', width: '304px', height: '19px', left: '438px', top: '1198px'  }}>Does the property with dedicated water meter?</p>
          </div>
        </div>
      </div>
      
      <hr style = {{ width: '100%', border: '1px solid #DADADA', marginTop: '50px', marginBottom: '30px', position: 'absolute', width: '1050px',
        top: '1200px' }}/>

      <h3 style={{position: 'absolute', width: '111px', height: '27px', top: '1250px'}}>Documents</h3>
      <div style = {{ display: 'flex', width: '300px', justifyContent: 'space-between' }}>
        <Button variant="contained" component="label" style = {{ flex: '50px', width: '75px', height: '50px', position: 'absolute', top: '1305px',
          left: '389px' }}>
          Upload
          <input id="paymentFile" type="file" hidden onChange = {(e) => {
            if (e.target.files === null || e.target.files.length < 1) {
              alert('Please upload a valid file.')
              return
            }

            setPaymentFile(e.target.files[0])
          }}/>
        </Button>
        <p style = {{ flex: '50px', padding: '10px', position: 'absolute', top: '1250px', left: '380px' }}>Payment History</p>
      </div>
      <div style = {{ display: 'flex', width: '300px', justifyContent: 'space-between' }}>
        <Button id="usageFile" variant="contained" component="label" style = {{ flex: '50px', width: '75px', height: '50px',
          top: '1405px', left: '389px', position: 'absolute' }}>
          Upload
          <input id="paymentFile" type="file" hidden onChange = {(e) => {
            if (e.target.files === null || e.target.files.length < 1) {
              alert('Please upload a valid file.')
              return
            }

            setUsageFile(e.target.files[0])
          }}/>
        </Button>
        <p style = {{ flex: '50px', padding: '10px', position: 'absolute', top: '1350px', left: '380px' }}>Usage History</p>
      </div>
      
      <hr style = {{ width: '100%', border: '1px solid #DADADA', marginTop: '50px', marginBottom: '30px', position: 'absolute', width: '1050px',
        top: '1420px' }}/>

      <h3 style= {{position: 'absolute', width: '87px', height: '27px', top: '1470px'}}>Additional</h3>
      <div>
        <p style = {{left: '390px', position: 'absolute', width: '280px', height: '22px', left: '389px', top: '1470px' }}>
          Are there any pending adjustments?</p>     
        <TextField id="notesField" style={{left: '390px', width: '628px', height: '151px', left: '389px', top: '1500px', position: 'absolute' }}
         variant="outlined" ></TextField>

        <p style = {{left: '390px', position: 'absolute', width: '550px', height: '22px', left: '389px', top: '1700px' }}>
          What (if any) other individuals are involved (spouse, landlord, dependent)?</p>
        <TextField id="indivAns" style={{left: '390px'}} onChange={(e) => setIndivAns(e.target.value)}/>
      </div>
      <div>
        <p style= {{left: '390px', position: 'absolute', width: '550px', height: '22px', left: '389px', top: '1930px' }}>Is there any additional information we should know about the account?</p>
        <TextField id="infoAns" style={{left: '390px'}} onChange= {(e) => setInfoAns(e.target.value)}/>
      </div>
      <Button type="button" onClick = {(() => console.log(generateInfoSubmission()))}>
          Save
      </Button>
    </div>

  )
}

export default InfoSubmissionPage
