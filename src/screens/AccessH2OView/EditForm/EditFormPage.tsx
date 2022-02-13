import { Button, Divider, Link, TextField } from '@mui/material'
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
  const updateStatusQuestion = (index: number) => {
    
  }
  const addStatus = () => {
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

  const enableDocEdit = (index: number) => {
    const newEdit = editDoc.slice()
    newEdit[index] = !newEdit[index]
    setEditDoc(newEdit)
  }
  const updateDocQuestion = (index: number) => {
    
  }
  const addDoc = () => {
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

  const enableAdditEdit = (index: number) => {
    const newEdit = editAddit.slice()
    newEdit[index] = !newEdit[index]
    setEditAddit(newEdit)
  }
  const updateAdditQuestion = (index: number) => {
    
  }
  const addAddit = () => {
    const newEdit = editAddit.slice()
    newEdit.push(true)
    setEditAddit(newEdit)
  }
  const addAdditQuestion = () => {
    const dummyData = [{
      question: newAdditQuestion,
    }]
    setAdditShowAdd(false)
    addAddit()
    setAdditQuestions(additQuestions.concat(dummyData))
    setNewAdditQuestion('')
  }
  const handleAdditChange = (e: any): void => {
    setNewAdditQuestion(e.target.value)
  }



  return (
    <div className={classes.body}>
      <Link href='/applicants' className={classes.backButton}>{"<"} Back to Dashboard</Link>
      <h1 className={classes.pageTitle}>Edit Form</h1>
      <div className={classes.questionType}>
        <h3 className={classes.sectionTitle}>Eligibility</h3>
        <div className={classes.statusSection}>
        {statusQuestions.map((question, index) => (
          <div className={classes.questions}>
            <CreateIcon className={classes.editButton} onClick={() => enableStatusEdit(index)}/>
            {editStatus[index] ? 
            <div>
              <p className={classes.title}>{question.title}</p>
              <p className={classes.description}>{question.question}</p>
            </div> :
              <div>
                <div className={classes.editQuestions}>
                  <TextField
                    InputProps={{
                      classes:{
                        root: classes.inputRoot,
                      },
                    }}
                    value={question.title}
                    disabled={editStatus[index]}
                    multiline
                    size='small'
                  />
                  <TextField
                    InputProps={{
                      classes:{
                        root: classes.inputRoot,
                      },
                    }}
                    value={question.question}
                    disabled={editStatus[index]}
                    multiline
                    size='small'
                  />
                </div>
                <Button onClick={() => updateStatusQuestion(index)} className={classes.save}>Save</Button>
                <Button onClick = {() => enableStatusEdit(index)} className={classes.cancel}>Cancel</Button>
              </div>
            }
          </div>
        ))}
        { showStatusAdd ? 
          <div className={classes.editQuestionsContainer}>
            <div className={classes.editQuestions}>
              <TextField
                InputProps={{
                  classes:{
                    root: classes.inputRoot,
                  },
                }}
                value={newStatusTitle}
                onChange={handleStatusTitleChange}
                multiline
                label="Question Title"
                size='small'
              />
              <TextField
                InputProps={{
                  classes:{
                    root: classes.inputRoot,
                  },
                }}
                value={newStatusQuestion}
                onChange={handleStatusQuestionChange}
                multiline
                label="Add brief description of required question"
                size='small'
              />
            </div>
            <Button onClick={addStatusQuestion} className={classes.save}>Save</Button>
            <Button onClick = {() => setStatusShowAdd(false)} className={classes.cancel}>Cancel</Button>
          </div> :
          <Button onClick = {() => setStatusShowAdd(true)} className={classes.reqButton}>+ Add Requirement</Button>
        }
        </div>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.questionType}>
        <h3 className={classes.sectionTitle}>Documents</h3>
        <div className={classes.docSection}>
        {docQuestions.map((question, index) => (
          <div className={classes.questions}>
            <CreateIcon className={classes.editButton} onClick={() => enableDocEdit(index)}/>
            {editDoc[index] ? 
            <div>
              <p className={classes.title}>{question.title}</p>
              <p className={classes.description}>{question.description}</p>
            </div> :
              <div>
                <div className={classes.editQuestions}>
                  <TextField
                    InputProps={{
                      classes:{
                        root: classes.inputRoot,
                      },
                    }}
                    value={question.title}
                    disabled={editDoc[index]}
                    multiline
                    size='small'
                  />
                  <TextField
                    InputProps={{
                      classes:{
                        root: classes.inputRoot,
                      },
                    }}
                    value={question.description}
                    disabled={editDoc[index]}
                    multiline
                    size='small'
                  />
                </div>
              <Button onClick={() => updateDocQuestion(index)} className={classes.save}>Save</Button>
              <Button onClick = {() => enableDocEdit(index)} className={classes.cancel}>Cancel</Button>
              </div>
            }

          </div>
        ))}
        { showDocAdd ? 
          <div className={classes.editQuestionsContainer}>
            <div className={classes.editQuestions}>
              <TextField
                InputProps={{
                  classes:{
                    root: classes.inputRoot,
                  },
                }}
                value={newDocTitle}
                onChange={handleDocTitleChange}
                multiline
                label="Document Title"
                size='small'
              />
              <TextField
                InputProps={{
                  classes:{
                    root: classes.inputRoot,
                  },
                }}
                value={newDocDescription}
                onChange={handleDocQuestionChange}
                multiline
                label="Add brief description of required document"
                size='small'
              />
            </div>
            <Button onClick={addDocQuestion} className={classes.save}>Save</Button>
            <Button onClick = {() => setDocShowAdd(false)} className={classes.cancel}>Cancel</Button>
          </div> :
          <Button onClick = {() => setDocShowAdd(true)} className={classes.reqButton}>+ Add Requirement</Button>
        }
        </div>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.questionType}>
        <h3 className={classes.sectionTitle}>Additional</h3>
        <div className={classes.additSection}>
        {additQuestions.map((question, index) => (
          <div className={classes.questions}>
            <CreateIcon className={classes.editButton} onClick={() => enableAdditEdit(index)}/>
            {editAddit[index] ? 
            <div>
              <p className={classes.title}>{question.question}</p>
            </div> :
            <div>
              <div className={classes.editQuestions}>
                <TextField
                  InputProps={{
                    classes:{
                      root: classes.inputRoot,
                    },
                  }}
                  value={question.question}
                  disabled={editAddit[index]}
                  multiline
                  size='small'
                />
              </div>
              <Button onClick={() => updateAdditQuestion(index)} className={classes.save}>Save</Button>
              <Button onClick = {() => enableAdditEdit(index)} className={classes.cancel}>Cancel</Button>
            </div>
            }
          </div>
        ))}
        { showAdditAdd ? 
          <div className={classes.editQuestionsContainer}>
            <div className={classes.editQuestions}>
              <TextField
                InputProps={{
                  classes:{
                    root: classes.inputRoot,
                  },
                }}
                value={newAdditQuestion}
                onChange={handleAdditChange}
                multiline
                label="Add brief description of required question"
                size='small'
              />
            </div>
            <Button onClick={addAdditQuestion} className={classes.save}>Save</Button>
            <Button onClick = {() => setAdditShowAdd(false)} className={classes.cancel}>Cancel</Button>
          </div> :
          <Button onClick = {() => setAdditShowAdd(true)} className={classes.reqButton}>+ Add Requirement</Button>
        }
        </div>
      </div>
    </div>
  )
}

export default EditFormPage
