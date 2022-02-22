import { Button, Divider, Link, TextField } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import React, { useState } from 'react'
import classes from './EditForm.module.css'
import { buttonStyles, linkStyle, dividerStyle, deleteStyle } from './EditFormMUIStyles'

const eligibilityQuestions = [
  {
    title: 'Payments',
    question: 'Has the customer made at least 3 payments?'
  },
  {
    title: 'Minimum Service',
    question: 'Does the customer have a minimum of 12 months of service?'
  }
]
const documents = [
  {
    title: 'Payment History',
    description: 'Please upload the customer’s payment history over the last 12 months.'
  },
  {
    title: 'Usage History',
    description: 'Please upload the customer’s usage history over the last 12 months.'
  }
]
const otherQuestions = [
  {
    question: 'Are there any pending adjustments?'
  },
  {
    question: 'What (if any) other individuals are involved (spouse, landlord, dependents)?'
  },
  {
    question: 'Is there any additional information we should know about the account?'
  }
]

const EditFormPage = (): JSX.Element => {
  const [statusQuestions, setStatusQuestions] = useState(eligibilityQuestions)
  const [editStatus, setEditStatus] = useState<boolean[]>([true, true])
  const [newStatusTitle, setNewStatusTitle] = useState('')
  const [newStatusQuestion, setNewStatusQuestion] = useState('')
  const [showStatusAdd, setStatusShowAdd] = useState(false)

  const [docQuestions, setDocQuestions] = useState(documents)
  const [editDoc, setEditDoc] = useState<boolean[]>([true, true])
  const [newDocTitle, setNewDocTitle] = useState('')
  const [newDocDescription, setNewDocDescription] = useState('')
  const [showDocAdd, setDocShowAdd] = useState(false)

  const [additQuestions, setAdditQuestions] = useState(otherQuestions)
  const [editAddit, setEditAddit] = useState<boolean[]>([true, true, true])
  const [newAdditQuestion, setNewAdditQuestion] = useState('')
  const [showAdditAdd, setAdditShowAdd] = useState(false)

  // useEffect(() => {
  //   async function getQuestions() {
  //     const questions: EligibilityQuestion[] = await getEligibilityQuestions()
  //     setEligibilityQuestions(questions)
  //   }
  // })

  const enableStatusEdit = (index: number): void => {
    const newEdit = editStatus.slice()
    newEdit[index] = !newEdit[index]
    setEditStatus(newEdit)
  }
  const updateStatusQuestion = (index: number): void => {

  }
  const addStatus = (): void => {
    const newEdit = editStatus.slice()
    newEdit.push(true)
    setEditStatus(newEdit)
  }
  const addStatusQuestion = (): void => {
    const dummyData = [{
      title: newStatusTitle,
      question: newStatusQuestion
    }]
    setStatusShowAdd(false)
    addStatus()
    setStatusQuestions(statusQuestions.concat(dummyData))
    setNewStatusTitle('')
    setNewStatusQuestion('')
  }
  const handleStatusTitleChange = (e: any): void => {
    setNewStatusTitle(e.target.value)
  }
  const handleStatusQuestionChange = (e: any): void => {
    setNewStatusQuestion(e.target.value)
  }
  const deleteStatusQuestion = (index: number): void => {
    const removeEdit = editStatus.slice()
    removeEdit.splice(index, 1)
    setEditStatus(removeEdit)
    const removeQuestion = statusQuestions.slice()
    removeQuestion.splice(index, 1)
    setStatusQuestions(removeQuestion)
  }

  const enableDocEdit = (index: number): void => {
    const newEdit = editDoc.slice()
    newEdit[index] = !newEdit[index]
    setEditDoc(newEdit)
  }
  const updateDocQuestion = (index: number): void => {

  }
  const addDoc = (): void => {
    const newEdit = editDoc.slice()
    newEdit.push(true)
    setEditDoc(newEdit)
  }
  const addDocQuestion = (): void => {
    const dummyData = [{
      title: newDocTitle,
      description: newDocDescription
    }]
    setDocShowAdd(false)
    addDoc()
    setDocQuestions(docQuestions.concat(dummyData))
    setNewDocTitle('')
    setNewDocDescription('')
  }
  const handleDocTitleChange = (e: any): void => {
    setNewDocTitle(e.target.value)
  }
  const handleDocQuestionChange = (e: any): void => {
    setNewDocDescription(e.target.value)
  }
  const deleteDocQuestion = (index: number): void => {
    const removeEdit = editDoc.slice()
    removeEdit.splice(index, 1)
    setEditStatus(removeEdit)
    const removeQuestion = docQuestions.slice()
    removeQuestion.splice(index, 1)
    setDocQuestions(removeQuestion)
  }

  const enableAdditEdit = (index: number): void => {
    const newEdit = editAddit.slice()
    newEdit[index] = !newEdit[index]
    setEditAddit(newEdit)
  }
  const updateAdditQuestion = (index: number): void => {

  }
  const addAddit = (): void => {
    const newEdit = editAddit.slice()
    newEdit.push(true)
    setEditAddit(newEdit)
  }
  const addAdditQuestion = (): void => {
    const dummyData = [{
      question: newAdditQuestion
    }]
    setAdditShowAdd(false)
    addAddit()
    setAdditQuestions(additQuestions.concat(dummyData))
    setNewAdditQuestion('')
  }
  const handleAdditChange = (e: any): void => {
    setNewAdditQuestion(e.target.value)
  }
  const deleteAdditQuestion = (index: number): void => {
    const removeEdit = editAddit.slice()
    removeEdit.splice(index, 1)
    setEditStatus(removeEdit)
    const removeQuestion = additQuestions.slice()
    removeQuestion.splice(index, 1)
    setAdditQuestions(removeQuestion)
  }

  return (
    <div className={classes.background}>
      <div className={classes.body}>
        <Link href='/applicants' underline="none" style={linkStyle}>{'<'} Back to Dashboard</Link>
        <h1 className={classes.pageTitle}>Edit Form</h1>
        <div className={classes.questionType}>
          <h3 className={classes.sectionTitle}>Eligibility</h3>
          <div className={classes.statusSection}>
          {statusQuestions.map((question, index) => (
            <div className={classes.questions}>
              <CreateIcon className={classes.editButton} onClick={() => enableStatusEdit(index)}/>
              {editStatus[index]
                ? <div>
                <p className={classes.title}>{question.title}</p>
                <p className={classes.description}>{question.question}</p>
              </div>
                : <div>
                  <div className={classes.editQuestions}>
                    <div className={classes.delete}>
                      <TextField
                        InputProps={{
                          classes: {
                            root: classes.inputRoot
                          }
                        }}
                        value={question.title}
                        fullWidth
                        multiline
                        size='small'
                      />
                      <DeleteForeverIcon sx={deleteStyle} onClick={() => deleteStatusQuestion(index)}/>
                    </div>
                    <TextField
                      InputProps={{
                        classes: {
                          root: classes.inputRoot
                        }
                      }}
                      value={question.question}
                      fullWidth
                      multiline
                      size='small'
                    />
                  </div>
                  <Button onClick={() => updateStatusQuestion(index)} sx={buttonStyles} variant="contained">Save</Button>
                  <Button onClick = {() => enableStatusEdit(index)} sx={buttonStyles} variant="text">Cancel</Button>
                </div>
              }
            </div>
          ))}
          { showStatusAdd
            ? <div className={classes.editQuestionsContainer}>
              <div>
                <TextField
                  InputProps={{
                    classes: {
                      root: classes.inputRoot
                    }
                  }}
                  value={newStatusTitle}
                  onChange={handleStatusTitleChange}
                  multiline
                  fullWidth
                  label="Question Title"
                  size='small'
                />
                <TextField
                  InputProps={{
                    classes: {
                      root: classes.inputRoot
                    }
                  }}
                  value={newStatusQuestion}
                  onChange={handleStatusQuestionChange}
                  multiline
                  fullWidth
                  label="Add brief description of required question"
                  size='small'
                />
              </div>
              <Button onClick={addStatusQuestion} sx={buttonStyles} variant="contained">Save</Button>
              <Button onClick = {() => setStatusShowAdd(false)} sx={buttonStyles} variant="text">Cancel</Button>
            </div>
            : <Button onClick = {() => setStatusShowAdd(true)} sx={buttonStyles} variant="outlined">+ Add Requirement</Button>
          }
          </div>
        </div>
        <Divider style={dividerStyle} />
        <div className={classes.questionType}>
          <h3 className={classes.sectionTitle}>Documents</h3>
          <div className={classes.docSection}>
          {docQuestions.map((question, index) => (
            <div className={classes.questions}>
              <CreateIcon className={classes.editButton} onClick={() => enableDocEdit(index)}/>
              {editDoc[index]
                ? <div>
                <p className={classes.title}>{question.title}</p>
                <p className={classes.description}>{question.description}</p>
              </div>
                : <div>
                  <div className={classes.editQuestions}>
                    <div className={classes.delete}>
                      <TextField
                        InputProps={{
                          classes: {
                            root: classes.inputRoot
                          }
                        }}
                        value={question.title}
                        multiline
                        fullWidth
                        size='small'
                      />
                      <DeleteForeverIcon sx={deleteStyle} onClick={() => deleteDocQuestion(index)}/>
                    </div>
                    <TextField
                      InputProps={{
                        classes: {
                          root: classes.inputRoot
                        }
                      }}
                      value={question.description}
                      multiline
                      fullWidth
                      size='small'
                    />
                  </div>
                <Button onClick={() => updateDocQuestion(index)} sx={buttonStyles} variant="contained">Save</Button>
                <Button onClick = {() => enableDocEdit(index)} sx={buttonStyles} variant="text">Cancel</Button>
                </div>
              }

            </div>
          ))}
          { showDocAdd
            ? <div className={classes.editQuestionsContainer}>
              <div>
                <TextField
                  InputProps={{
                    classes: {
                      root: classes.inputRoot
                    }
                  }}
                  value={newDocTitle}
                  onChange={handleDocTitleChange}
                  multiline
                  fullWidth
                  label="Document Title"
                  size='small'
                />
                <TextField
                  InputProps={{
                    classes: {
                      root: classes.inputRoot
                    }
                  }}
                  value={newDocDescription}
                  onChange={handleDocQuestionChange}
                  multiline
                  fullWidth
                  label="Add brief description of required document"
                  size='small'
                />
              </div>
              <Button onClick={addDocQuestion} sx={buttonStyles} variant="contained">Save</Button>
              <Button onClick = {() => setDocShowAdd(false)} sx={buttonStyles} variant="text">Cancel</Button>
            </div>
            : <Button onClick = {() => setDocShowAdd(true)} sx={buttonStyles} variant="outlined">+ Add Document Requirement</Button>
          }
          </div>
        </div>
        <Divider style={dividerStyle} />
        <div className={classes.questionType}>
          <h3 className={classes.sectionTitle}>Additional</h3>
          <div className={classes.additSection}>
          {additQuestions.map((question, index) => (
            <div className={classes.questions}>
              <CreateIcon className={classes.editButton} onClick={() => enableAdditEdit(index)}/>
              {editAddit[index]
                ? <div>
                <p className={classes.title}>{question.question}</p>
              </div>
                : <div>
                <div className={classes.editQuestions}>
                  <div className={classes.delete}>
                    <TextField
                      InputProps={{
                        classes: {
                          root: classes.inputRoot
                        }
                      }}
                      value={question.question}
                      multiline
                      fullWidth
                      size='small'
                    />
                    <DeleteForeverIcon sx={deleteStyle} onClick={() => deleteAdditQuestion(index)}/>
                  </div>
                </div>
                <Button onClick={() => updateAdditQuestion(index)} sx={buttonStyles} variant="contained">Save</Button>
                <Button onClick = {() => enableAdditEdit(index)} sx={buttonStyles} variant="text">Cancel</Button>
              </div>
              }
            </div>
          ))}
          { showAdditAdd
            ? <div className={classes.editQuestionsContainer}>
              <div>
                <TextField
                  InputProps={{
                    classes: {
                      root: classes.inputRoot
                    }
                  }}
                  value={newAdditQuestion}
                  onChange={handleAdditChange}
                  multiline
                  fullWidth
                  label="Add brief description of required question"
                  size='small'
                />
              </div>
              <Button onClick={addAdditQuestion} sx={buttonStyles} variant="contained">Save</Button>
              <Button onClick = {() => setAdditShowAdd(false)} sx={buttonStyles} variant="text">Cancel</Button>
            </div>
            : <Button onClick = {() => setAdditShowAdd(true)} sx={buttonStyles} variant="outlined">+ Add Question</Button>
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditFormPage
