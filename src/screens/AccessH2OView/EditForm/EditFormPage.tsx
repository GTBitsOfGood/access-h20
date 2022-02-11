import { Button, Divider, TextField } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import React, { useState } from 'react'
import classes from './EditForm.module.css'


const eligibilityStatuses = [
    {
      title: "Payments",
      question: "Has the customer made at least 3 payments?"
    },
    {
      title: "Minimum Service",
      question: "Does the customer have a minimum of 12 months of service?"
    },
  ]
const documents = [
    {
      title: "Payment History",
      description: "Please upload the customer’s payment history over the last 12 months.",
    },
    {
      title: "Usage History",
      description: "Please upload the customer’s usage history over the last 12 months.",
    },
  ]
const otherQuestions = [
    {
      question: "Are there any pending adjustments?",
    },
    {
      question: "What (if any) other individuals are involved (spouse, landlord, dependents)?",
    },
    {
      question: "Is there any additional information we should know about the account?",
    },
  ]


const EditFormPage = (): JSX.Element => {

  const [statusQuestions, setStatusQuestions] = useState(eligibilityStatuses)
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

  const enableStatusEdit = (index: number) => {
    const newEdit = editStatus.slice()
    newEdit[index] = !newEdit[index]
    setEditStatus(newEdit)
  }
  const addStatusEdit = () => {
    const newEdit = editStatus.slice()
    newEdit.push(true)
    setEditStatus(newEdit)
  }
  const addStatusQuestion = () => {
    const dummyData = [{
      title: newStatusTitle,
      question: newStatusQuestion
    }]
    setStatusShowAdd(false)
    addStatusEdit()
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

  const enableDocEdit = (index: number) => {
    const newEdit = editDoc.slice()
    newEdit[index] = !newEdit[index]
    setEditDoc(newEdit)
  }
  const addDocEdit = () => {
    const newEdit = editDoc.slice()
    newEdit.push(true)
    setEditDoc(newEdit)
  }
  const addDocQuestion = () => {
    const dummyData = [{
      title: newDocTitle,
      description: newDocDescription
    }]
    setDocShowAdd(false)
    addDocEdit()
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

  const enableAdditEdit = (index: number) => {
    const newEdit = editAddit.slice()
    newEdit[index] = !newEdit[index]
    setEditAddit(newEdit)
  }
  const addAdditEdit = () => {
    const newEdit = editAddit.slice()
    newEdit.push(true)
    setEditAddit(newEdit)
  }
  const addAdditQuestion = () => {
    const dummyData = [{
      question: newAdditQuestion,
    }]
    setAdditShowAdd(false)
    addAdditEdit()
    setAdditQuestions(additQuestions.concat(dummyData))
    setNewAdditQuestion('')
  }
  const handleAdditChange = (e: any): void => {
    setNewAdditQuestion(e.target.value)
  }



  return (
    <div className={classes.background}>
      <div className={classes.body}>
        <Button>{"<"} Back to Dashboard</Button>
        <h1>Edit Form</h1>
        <div className={classes.questionType}>
          <div className={classes.edit}>
            <h3>Eligibility</h3>
          </div>
          {statusQuestions.map((question, index) => (
            <div className={classes.section}>
              <CreateIcon className={classes.editButton} onClick={() => enableStatusEdit(index)}/>
              {editStatus[index] ? 
              <div className={classes.questions}>
                <p>{question.title}</p>
                <p>{question.question}</p>
              </div> :
                  <div className={classes.questions}>
                  <TextField
                    InputProps={{
                      classes:{
                        root: classes.inputRoot,
                        disabled: classes.disabled
                      },
                      disableUnderline: true
                    }}
                    value={question.title}
                    disabled={editStatus[index]}
                    multiline
                  />
                  <TextField
                    InputProps={{
                      classes:{
                        root: classes.inputRoot,
                        disabled: classes.disabled
                      },
                      disableUnderline: true
                    }}
                    value={question.question}
                    disabled={editStatus[index]}
                  />
                </div>
              }

            </div>
          ))}
          { showStatusAdd ? 
              <div className={classes.questions}>
              <TextField
                InputProps={{
                  classes:{
                    root: classes.inputRoot,
                    disabled: classes.disabled
                  },
                  disableUnderline: true
                }}
                value={newStatusTitle}
                onChange={handleStatusTitleChange}
                label="Question Title"
              />
              <TextField
                InputProps={{
                  classes:{
                    root: classes.inputRoot,
                    disabled: classes.disabled
                  },
                  disableUnderline: true
                }}
                value={newStatusQuestion}
                onChange={handleStatusQuestionChange}
                multiline
                label="Add brief description of required question"
              />
              <Button onClick={addStatusQuestion}>Save</Button>
              <Button onClick = {() => setStatusShowAdd(false)} className={classes.cancel}>Cancel</Button>
            </div> :
            <Button onClick = {() => setStatusShowAdd(true)}>+ Add Requirement</Button>
          }
        </div>
        <Divider />
        <div className={classes.questionType}>
          <div className={classes.edit}>
            <h3>Document Submission</h3>
          </div>
          {docQuestions.map((question, index) => (
            <div className={classes.section}>
              <CreateIcon className={classes.editButton} onClick={() => enableDocEdit(index)}/>
              {editDoc[index] ? 
              <div className={classes.questions}>
                <p>{question.title}</p>
                <p>{question.description}</p>
              </div> :
                  <div className={classes.questions}>
                  <TextField
                    InputProps={{
                      classes:{
                        root: classes.inputRoot,
                        disabled: classes.disabled
                      },
                      disableUnderline: true
                    }}
                    value={question.title}
                    disabled={editDoc[index]}
                    multiline
                  />
                  <TextField
                    InputProps={{
                      classes:{
                        root: classes.inputRoot,
                        disabled: classes.disabled
                      },
                      disableUnderline: true
                    }}
                    value={question.description}
                    disabled={editDoc[index]}
                  />
                </div>
              }

            </div>
          ))}
          { showDocAdd ? 
              <div className={classes.questions}>
              <TextField
                InputProps={{
                  classes:{
                    root: classes.inputRoot,
                    disabled: classes.disabled
                  },
                  disableUnderline: true
                }}
                value={newDocTitle}
                onChange={handleDocTitleChange}
                label="Document Title"
              />
              <TextField
                InputProps={{
                  classes:{
                    root: classes.inputRoot,
                    disabled: classes.disabled
                  },
                  disableUnderline: true
                }}
                value={newDocDescription}
                onChange={handleDocQuestionChange}
                multiline
                label="Add brief description of required document"
              />
              <Button onClick={addDocQuestion}>Save</Button>
              <Button onClick = {() => setDocShowAdd(false)} className={classes.cancel}>Cancel</Button>
            </div> :
            <Button onClick = {() => setDocShowAdd(true)}>+ Add Requirement</Button>
          }
        </div>
        <Divider />
        <div className={classes.questionType}>
          <div className={classes.edit}>
            <h3>Additional</h3>
          </div>
          {additQuestions.map((question, index) => (
            <div className={classes.section}>
              <CreateIcon className={classes.editButton} onClick={() => enableAdditEdit(index)}/>
              {editAddit[index] ? 
              <div className={classes.questions}>
                <p>{question.question}</p>
              </div> :
                  <div className={classes.questions}>
                  <TextField
                    InputProps={{
                      classes:{
                        root: classes.inputRoot,
                        disabled: classes.disabled
                      },
                      disableUnderline: true
                    }}
                    value={question.question}
                    disabled={editAddit[index]}
                    multiline
                  />
                  <TextField
                    InputProps={{
                      classes:{
                        root: classes.inputRoot,
                        disabled: classes.disabled
                      },
                      disableUnderline: true
                    }}
                    value={question.question}
                    disabled={editAddit[index]}
                  />
                </div>
              }

            </div>
          ))}
          { showAdditAdd ? 
              <div className={classes.questions}>
              <TextField
                InputProps={{
                  classes:{
                    root: classes.inputRoot,
                    disabled: classes.disabled
                  },
                  disableUnderline: true
                }}
                value={newAdditQuestion}
                onChange={handleAdditChange}
                multiline
                label="Add brief description of required question"
              />
              <Button onClick={addAdditQuestion}>Save</Button>
              <Button onClick = {() => setAdditShowAdd(false)} className={classes.cancel}>Cancel</Button>
            </div> :
            <Button onClick = {() => setAdditShowAdd(true)}>+ Add Requirement</Button>
          }
        </div>
      </div>

    </div>
  )
}

export default EditFormPage
