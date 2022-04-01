/* eslint-disable  @typescript-eslint/no-misused-promises */

import React, { useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import classes from './InfoSubmissionPage.module.css'
import notestyle from '../../components/NotesModal/NotesModal.module.css'
import { ApplicantStatus, ApplicantStatusColor } from '../../types/Applicant'
import { Checkbox, FormLabel, Select, MenuItem, FormControl } from '@mui/material'
import EditInfoSubmissionModal from 'src/components/EditInfoSubmissionModal'
import { Edit } from '@mui/icons-material'
import Stack from '@mui/material/Stack'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import { getClient, changeStatus } from '../../actions/Client'
import { update, getInfo, addInfo } from '../../actions/InfoSubmission'
import { addNote, getNote } from 'src/actions/Note'
import { Note } from 'server/models/Note'
import { Info } from 'server/models/InfoSubmission'
import { Status } from 'server/models/Client'

const setStatusColor = (status: ApplicantStatus): string => {
  return ApplicantStatusColor[status]
}

interface PropTypes {
  applicantId: string
}

const InfoSubmissionPage = ({ applicantId }: PropTypes): JSX.Element => {
  // Status
  const [accountiD, setAccountID] = useState(applicantId)
  const [status, setStatus] = useState(ApplicantStatus.AwaitingUtility)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('Not exist')

  // Notes
  const initArr: Note[] = []
  const [editNote, setEditNote] = useState(false)
  const [currentInput, setCurrentInput] = useState('')
  const [notes, setNotes] = useState(initArr)

  // Form Control
  const [showModal, setShowModal] = useState(false)
  const [formEditable, setFormEditable] = useState(false)
  const [createInfo, setCreateInfo] = useState(false)

  // Checkbox selector
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

  const [rendered] = useState(false)
  useEffect(() => {
    void getapplicants()
    void getInfoPake()
    void getNotes()
  }, [rendered])

  const getapplicants = async (): Promise<void> => {
    const applicant = await getClient(applicantId)
    setName(applicant.name)
    setAccountID(applicantId)
    setAddress(applicant.propertyAddress)
    setStatus(applicant.status)
    setPhone(applicant.phone)
    if (applicant.note != null) {
      setNotes(applicant.note)
    }
  }

  const getInfoPake = async (): Promise<void> => {
    const info = await getInfo(applicantId)
    if (info === null) {
      setCreateInfo(true)
      return
    }
    setPaymentAns(info.paymentAns)
    setServicesAns(info.servicesAns)
    setContactAns(info.contactAns)
    setWaterAns(info.waterAns)
    setAdjustAns(info.adjustAns)
    setInfoAns(info.infoAns)
    setIndivAns(info.indivAns)
  }

  const updateInfo = async (): Promise<void> => {
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

    const data: Info = {
      accountId: accountiD,
      paymentAns: paymentAns,
      servicesAns: servicesAns,
      contactAns: contactAns,
      waterAns: waterAns,
      adjustAns: adjustAns,
      infoAns: infoAns,
      indivAns: indivAns

    }
    if (createInfo) {
      await addInfo(data)
      return
    }
    await update(data)
  }

  const updateStatus = async (newStatus: ApplicantStatus): Promise<void> => {
    setStatus(newStatus)
    const data: Status = {
      accountId: accountiD,
      status: newStatus
    }
    console.log(data)
    await changeStatus(data)
  }

  const addNewNote = async (): Promise<void> => {
    const data: Note = {
      accountID: accountiD,
      sender: 'Utility',
      receiver: 'AccessH20',
      date: new Date(),
      message: currentInput
    }
    await addNote(data)
    setNotes(notes.concat(data))
    setCurrentInput('')
  }

  const getNotes = async (): Promise<void> => {
    const data = await getNote(accountiD)
    setNotes(notes.concat(data))
  }

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

  return (
    <div className={classes.bacoground}>
      <div className={classes.mainContainer}>
        <div>
          <div className='accountModal'>
            <div className={classes.topContainer}>
              <a className={classes.back} onClick={handleBackToDash}>&lt;&nbsp;&nbsp;&nbsp;&nbsp;Back to Dashboard</a>
              {!formEditable
                ? <div className={classes.last_item}>
                <Button
                startIcon={<Edit />}
                onClick={() => setFormEditable(!formEditable)}
                variant="contained"
                color = "primary"
                style={{ textTransform: 'none' }}
              >
                Update Info
              </Button>
              </div>
                : <div className={classes.last_item}>
                  <Button
                  type="button"
                  variant = "contained"
                  color = "primary"
                  disabled={(paymentFile === null || usageFile === null || infoAns === '' || indivAns === '' || adjustAns === '')}
                  style={{ textTransform: 'none' }}
                  onClick = {(() => console.log(updateInfo()))}>
                      Save
                  </Button>
                  <Button
                  type="button"
                  variant = "text"
                  style={{ textTransform: 'none', marginLeft: '8px' }}
                  onClick = {handleClick}>
                      Cancel
                  </Button>
                </div>}
            </div>
            <EditInfoSubmissionModal shouldShowModal={showModal} onClose={closeModalHandler}/>
          </div>
          <h1>{name}</h1>
          <div>
            <div className={classes.header}>
              <div className={classes.headerInfoBox}>
                <h4 className={classes.headerNoMargin}>Status</h4>
                <FormControl variant='outlined' sx={{ m: 1, minWidth: 120 }}>
                  <Select
                  className={classes.mui}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 'bottom',
                      horizontal: 'left'
                    },
                    transformOrigin: {
                      vertical: 'top',
                      horizontal: 'left'
                    }
                  }}
                  value={status}
                  style = {{ borderStyle: 'hidden', backgroundColor: setStatusColor(status), width: '13rem', textAlign: 'center', borderRadius: '8px', height: '2rem' }}
                  onChange={async (e) => await updateStatus(e.target.value as ApplicantStatus)}>
                    <MenuItem value={ApplicantStatus.AwaitingUtility}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.AwaitingUtility), width: '7rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                      Awaiting Utility</MenuItem>
                    <MenuItem value={ApplicantStatus.AwaitingAccessH2O}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.AwaitingAccessH2O), width: '10rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                      Awaiting AccessH2O</MenuItem>
                    <MenuItem value={ApplicantStatus.Completed}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.Completed), width: '6rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                      Completed</MenuItem>
                    <MenuItem value={ApplicantStatus.Approved}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.Approved), width: '5rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                      Approved</MenuItem>
                    <MenuItem value={ApplicantStatus.Denied}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.Denied), width: '4rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                        Denied</MenuItem>
                    <MenuItem value={ApplicantStatus.Terminated}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.Terminated), width: '6rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                      Terminated</MenuItem>
                    <MenuItem value={ApplicantStatus.Incomplete}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.Incomplete), width: '6rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                      Incomplete</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.headerInfoBox}>
                <h4 className={classes.headerNoMargin}>Account ID</h4>
                <p>{accountiD}</p>
              </div>
              <div className={classes.headerInfoBox}>
                <h4 className={classes.headerNoMargin}>Phone Number</h4>
                <p>{phone}</p>
              </div>
              <div className={classes.headerInfoBox}>
                <h4 className={classes.headerNoMargin}>Address</h4>
                <p className={classes.streetAddress}>{address}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.noteContainer}>
            <h3 className={classes.noteHead}>Notes</h3>
            <div className={classes.noteBody}>
              {notes.map((note) => (
                  <div className={classes.stickyNote}>
                  <div className={notestyle.noteHeader}>
                    <p className={notestyle.sender}>{note.sender}</p>
                    <p className={notestyle.date}>{new Date(note.date).getMonth() + 1}/{new Date(note.date).getDate()}/{new Date(note.date).getFullYear()}</p>
                  </div>
                  <p className={classes.message}>{note.message}</p>
                </div>
              ))}
              {editNote
                ? (
                <Stack direction="column" spacing={2}>
                  <TextField
                    id="notesField"
                    label="Add your note here"
                    minRows="5"
                    multiline
                    variant="outlined"
                    style={{ width: '38rem' }}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    value={currentInput}
                  />
                  <Stack direction="row" spacing={2}>
                  <Button
                  type="button"
                  disabled={(currentInput === '')}
                  variant = "contained"
                  color = "primary"
                  style={{ textTransform: 'none' }}
                  onClick={() => {
                    void addNewNote()
                  }}>
                      Add Note
                  </Button>
                  <Button
                  type="button"
                  variant = "text"
                  style={{ textTransform: 'none' }}
                  onClick = {() => setEditNote(false)}>
                      Cancel
                  </Button>
                </Stack>
                </Stack>
                  )
                : <a onClick={() => setEditNote(true)} className={classes.addNote}>+ Add Note</a>}
            </div>
        </div>
          <div className={classes.scetionContainer}>
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

          <div className={classes.scetionContainer}>
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
            onClick = {(() => console.log(updateInfo()))}>
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
