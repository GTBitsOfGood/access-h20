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
import { update, getInfo } from '../../actions/InfoSubmission'
import { addNote, getNote } from 'src/actions/Note'
import { Note } from 'server/models/Note'
import { otherQA } from 'server/models/OtherQuestion'
import { documentQA } from 'server/models/DocumentQuestion'
import { eligibilityQA } from 'server/models/EligibilityQuestion'
import { Info } from 'server/models/InfoSubmission'

interface Applicant {
  phone: String
  status: ApplicantStatus
}

interface Client {
  accountId: String
  status: ApplicantStatus
}

const dummyData: Applicant = {
  phone: '(404)123-4567',
  status: ApplicantStatus.AwaitingUtility
}

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

  // Notes
  const initArr: Note[] = []
  const [editNote, setEditNote] = useState(false)
  const [currentInput, setCurrentInput] = useState('')
  const [notes, setNotes] = useState(initArr)

  // Form Control
  const [showModal, setShowModal] = useState(false)
  const [formEditable, setFormEditable] = useState(false)

  // Questions
  const [eligibilityQuestions, setEligibilityQuestions] = useState<eligibilityQA[]>([])
  const [documentQuestions, setDocumentQuestions] = useState<documentQA[]>([])
  const [otherQuestions, setOtherQuestions] = useState<otherQA[]>([])
  const [oldEligibilityQuestions, setOldEligibilityQuestions] = useState<eligibilityQA[]>([])
  const [oldDocumentQuestions, setOldDocumentQuestions] = useState<documentQA[]>([])
  const [oldOtherQuestions, setOldOtherQuestions] = useState<otherQA[]>([])
  const [emptyDocumentQuestions, setEmptyDocumentQuestions] = useState<boolean[]>([])
  const [emptyOtherQuestions, setEmptyOtherQuestions] = useState<boolean[]>([])
  const [render, setRender] = useState(false)

  useEffect(() => {
    void getapplicants()
    void getNotes()
    void getInfoPack()
    void getEmptyBoxes()
    setRender(false)
  }, [oldEligibilityQuestions, oldDocumentQuestions, oldOtherQuestions, render])

  const getapplicants = async (): Promise<void> => {
    const applicant = await getClient(applicantId)
    setName(applicant.name)
    setAccountID(applicantId)
    setAddress(applicant.propertyAddress)
    setStatus(applicant.status)
    if (applicant.note != null) {
      setNotes(applicant.note)
    }
  }
  const getInfoPack = async (): Promise<void> => {
    const info = await getInfo(applicantId)
    setEligibilityQuestions(info.eligibilityQuestions)
    setDocumentQuestions(info.documents)
    setOtherQuestions(info.otherQuestions)
  }

  const getEmptyBoxes = (): void => {
    const document = []
    const other = []
    for (let i = 0; i < otherQuestions.length; i++) {
      if (otherQuestions[i].answer === '') { other.push(false) } else { other.push(true) }
    }
    for (let i = 0; i < documentQuestions.length; i++) {
      if (documentQuestions[i].answer === null) { document.push(false) } else { document.push(true) }
    }
    setEmptyDocumentQuestions(document)
    setEmptyOtherQuestions(other)
  }

  const updateEligibility = (check: any, index: number): void => {
    const duplicate = eligibilityQuestions.slice()
    duplicate[index].answer = check.target.checked
    setEligibilityQuestions(duplicate)
  }
  const updateDocument = (file: any, index: number): void => {
    const duplicate = documentQuestions.slice()
    duplicate[index].answer = file.target.files[0]
    const emptyDuplicate = emptyDocumentQuestions.slice()
    if (file.target.value === null) {
      emptyDuplicate[index] = false
    } else {
      emptyDuplicate[index] = true
    }
    setDocumentQuestions(duplicate)
    setEmptyDocumentQuestions(emptyDuplicate)
  }
  const updateOther = (text: any, index: number): void => {
    const duplicate = otherQuestions.slice()
    duplicate[index].answer = text.target.value
    const emptyDuplicate = emptyOtherQuestions.slice()
    if (text.target.value === '') {
      emptyDuplicate[index] = false
    } else {
      emptyDuplicate[index] = true
    }
    setOtherQuestions(duplicate)
    setEmptyOtherQuestions(emptyDuplicate)
  }
  const updateInfo = async (updateDatabase: boolean): Promise<void> => {
    let document = true
    let other = true
    for (let i = 0; i < emptyOtherQuestions.length; i++) {
      if (!emptyOtherQuestions[i]) { other = false }
    }
    for (let i = 0; i < emptyDocumentQuestions.length; i++) {
      if (!emptyDocumentQuestions[i]) { document = false }
    }
    if (!document || !other) {
      // add error modal here
      console.log('Answer all questions')
    } else {
      setFormEditable(!formEditable)
      setOldEligibilityQuestions(eligibilityQuestions)
      setOldDocumentQuestions(documentQuestions)
      setOldOtherQuestions(otherQuestions)
      if (updateDatabase) {
        const data: Info = {
          accountId: accountiD,
          eligibilityQuestions: eligibilityQuestions,
          documents: documentQuestions,
          otherQuestions: otherQuestions
        }
        await update(data)
        setRender(true)
      }
    }
  }

  const updateStatus = async (newStatus: ApplicantStatus): Promise<void> => {
    setStatus(newStatus)
    const data: Client = {
      accountId: accountiD,
      status: newStatus
    }
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
    setEligibilityQuestions(oldEligibilityQuestions)
    setDocumentQuestions(oldDocumentQuestions)
    setOtherQuestions(oldOtherQuestions)
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
                onClick={async () => await updateInfo(false)}
                variant="contained"
                color = "primary"
                style={{ textTransform: 'none', background: '#3f78b5', padding: '0.3rem 1.2rem', borderRadius: '8px' }}
              >
                Update Info
              </Button>
              </div>
                : <div className={classes.last_item}>
                  <Stack direction="row" spacing={2}>
                  <Button
                  type="button"
                  variant = "text"
                  style={{ textTransform: 'none', padding: '0.3rem 2rem', fontWeight: '400', borderRadius: '8px' }}
                  onClick = {handleClick}>
                      Cancel
                  </Button>
                  <Button
                  type="button"
                  variant = "contained"
                  color = "primary"
                  style={{ textTransform: 'none', background: '#3f78b5', padding: '0.3rem 2rem', fontWeight: '400', borderRadius: '8px' }}
                  onClick = {(() => console.log(updateInfo(true)))}>
                      Save
                  </Button>
                  </Stack>
                </div>}
            </div>
            <EditInfoSubmissionModal shouldShowModal={showModal} onClose={closeModalHandler}/>
          </div>
          <h1>{name}</h1>
          <div>
            <div className={classes.header}>
            <Stack direction="row" justifyContent="center" alignItems="flex-start" spacing="8rem">
              <Stack direction="column" spacing={2}>
                <h4 className={classes.headerNoMargin}>Status</h4>
                <FormControl variant='outlined' sx={{ m: 1, minWidth: '3rem' }}>
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
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.AwaitingUtility), width: '8rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                      Awaiting Utility</MenuItem>
                    <MenuItem value={ApplicantStatus.AwaitingAccessH2O}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.AwaitingAccessH2O), width: '11rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                      Awaiting AccessH2O</MenuItem>
                    <MenuItem value={ApplicantStatus.Completed}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.Completed), width: '7rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                      Completed</MenuItem>
                    <MenuItem value={ApplicantStatus.Approved}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.Approved), width: '6rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                      Approved</MenuItem>
                    <MenuItem value={ApplicantStatus.Denied}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.Denied), width: '5rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                        Denied</MenuItem>
                    <MenuItem value={ApplicantStatus.Terminated}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.Terminated), width: '7rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                      Terminated</MenuItem>
                    <MenuItem value={ApplicantStatus.Incomplete}
                    style = {{ backgroundColor: setStatusColor(ApplicantStatus.Incomplete), width: '7rem', textAlign: 'left', borderRadius: '8px', display: 'flex', margin: '7px' }}>
                      Incomplete</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Stack direction="column" spacing={2}>
                <h4 className={classes.headerNoMargin}>Account ID</h4>
                <p className={classes.headerNoMargin}>{accountiD}</p>
              </Stack>
              <Stack direction="column" spacing={2}>
                <h4 className={classes.headerNoMargin}>Phone Number</h4>
                <p className={classes.headerNoMargin}>{dummyData.phone}</p>
              </Stack>
              <Stack direction="column" spacing={2}>
                <h4 className={classes.headerNoMargin}>Address</h4>
                <p className={classes.headerNoMargin}>{address}</p>
              </Stack>
              </Stack>
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
                    <p className={notestyle.date}>{new Date(note.date).getMonth()}/{new Date(note.date).getDate()}/{new Date(note.date).getFullYear()}</p>
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
              {eligibilityQuestions.map((info, index) => (
                  <div className={classes.eligibilityCheckbox}>
                  {formEditable && <Checkbox
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<CheckCircleIcon />}
                                    checked={info.answer}
                                    onChange={(check) => updateEligibility(check, index)}
                                    disabled={!formEditable}/>}
                      {!formEditable && info.answer && <CheckCircleIcon color="success" />}
                      {!formEditable && !info.answer && <CancelIcon color="error" />}
                    <div className={classes.eligibilityText}>
                      <h4 className={classes.headerNoMargin}>{info.question.title}</h4>
                      <p style = {{ fontWeight: 'lighter' }}>{info.question.question}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          <div className={classes.scetionContainer}>
            <h3 className={classes.documentHeader}>Documents</h3>
            <div className={classes.documentBody}>
              {documentQuestions?.map((info, index) => (
                <div className={classes.documentSubmission}>
                <FormLabel style={{ fontWeight: 'bold' }} error={info.answer === null} htmlFor="infoAns">{info.question.title}</FormLabel>
                  <p style = {{ fontWeight: 'lighter' }}>{info.question.description}</p>
                  <div className={classes.submissionStack}>
                  {formEditable && <Button
                      variant="contained"
                      component="label"
                      disabled={!formEditable}
                      style = {{ width: '15%', textTransform: 'none', marginRight: '0.5rem', height: '2rem' }}>
                      Upload
                      <input id="info.answer" type="file" hidden onChange = {(e) => {
                        if (e.target.files === null || e.target.files.length < 1) {
                          alert('Please upload a valid file.')
                        }
                        updateDocument(e, index)
                      }}/>
                    </Button>}
                    {formEditable && info.answer !== null && <InsertDriveFileIcon color="disabled" />}
                    {formEditable && <p className={classes.fileFontColor}>{info.answer.name}</p>}
                    {!formEditable && info.answer !== null && <InsertDriveFileIcon color="primary" />}
                    {!formEditable && <p className={classes.displayFileColor}>{info.answer.name}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={classes.additionalContainer}>
            <h3 className={classes.additionalHeader}>Additional</h3>
            <div className={classes.additionalBody}>
              {otherQuestions?.map((info, index) => (
              <div className={classes.inputContainer}>
                <FormLabel style={{ fontWeight: 'bold' }} htmlFor="adjustAns">{info.question.question}</FormLabel>
                  {formEditable && <TextField
                    id="adjustAns"
                    value={info.answer}
                    required
                    error={info.answer === ''}
                    minRows="5"
                    multiline
                    variant="outlined"
                    onChange= {(text) => updateOther(text, index)}
                    disabled={!formEditable}
                    />}
                    {!formEditable && <p className={classes.additionalfontStyle}>{info.answer}</p>}
                </div>
              ))}
            </div>
          </div>
          {formEditable
            ? <Stack style={{ marginLeft: '12.5rem' }} direction="row" spacing={2}>
            <Button
            type="button"
            variant = "contained"
            color = "primary"
            style={{ textTransform: 'none', background: '#3f78b5', padding: '0.3rem 2rem', fontWeight: '400', borderRadius: '8px' }}
            onClick = {(() => console.log(updateInfo(true)))}>
                Save
            </Button>
            <Button
            type="button"
            variant = "text"
            style={{ textTransform: 'none', padding: '0.3rem 2rem', fontWeight: '400', borderRadius: '8px' }}
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
