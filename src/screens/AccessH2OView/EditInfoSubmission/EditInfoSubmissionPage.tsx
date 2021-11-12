import { Button, Divider, TextField } from '@material-ui/core'
import CreateIcon from '@mui/icons-material/Create';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { EligibilityQuestion } from 'server/models/EligibilityQuestion'
import { getEligibilityQuestions } from 'server/mongodb/actions/EligibilityQuestion'
import classes from './EditInfoSubmission.module.css'
import { v4 as uuidv4 } from 'uuid'

const questions =   {
  eligibilityStatuses: [
    {
      id: uuidv4().toString(),
      title: "Payments",
      question: "Has the customer made at least 3 payments?"
    },
    {
      id: uuidv4().toString(),
      title: "Minimum Service",
      question: "Does the customer have a minimum of 12 months of service?"
    },
  ],
  documents: [
    {
      id: uuidv4().toString(),
      title: "Payment History",
      description: "Please upload the customer’s payment history over the last 12 months.",
    },
    {
      id: uuidv4().toString(),
      title: "Usage History",
      description: "Please upload the customer’s usage history over the last 12 months.",
    },
  ],
  otherQuestions: [
    {
      id: uuidv4().toString(),
      question: "Are there any pending adjustments?",
    },
    {
      id: uuidv4().toString(),
      question: "What (if any) other individuals are involved (spouse, landlord, dependents)?",
    },
    {
      id: uuidv4().toString(),
      question: "Is there any additional information we should know about the account?",
    },
  ]
}

const EditInfoSubmissionPage = () => {
  const [eligibilityQuestions, setEligibilityQuestions] = useState<EligibilityQuestion[]>([])
  const [edit, setEdit] = useState(true)

  useEffect(() => {
    async function getQuestions() {
      const questions: EligibilityQuestion[] = await getEligibilityQuestions()
      setEligibilityQuestions(questions)
    }
  })

  function enableEdit() {
    setEdit(!edit);
  }

  function addRequirement() {
    

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
          {questions.eligibilityStatuses.map((question) => (
            <div className={classes.section}>
              <CreateIcon className={classes.editButton} onClick={enableEdit}/>
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
                  disabled={edit}
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
                  disabled={edit}
                />
              </div>
            </div>
          ))}
          <Button>+ Add Requirement</Button>
        </div>
        <Divider />
        <div className={classes.questionType}>
          <div className={classes.edit}>
            <h3>Document Submission</h3>
          </div>
          {questions.documents.map((question) => (
            <div className={classes.section}>
              <CreateIcon className={classes.editButton} onClick={enableEdit}/>
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
                  disabled={edit}
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
                  disabled={edit}
                />
              </div>
            </div>
          ))}
          <Button>+ Add Requirement</Button>
        </div>
        <Divider />
        <div className={classes.questionType}>
          <div className={classes.edit}>
            <h3>Additional</h3>
          </div>
          {questions.otherQuestions.map((question) => (
            <div className={classes.section}>
              <CreateIcon className={classes.editButton} onClick={enableEdit}/>
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
                  disabled={edit}
                />
              </div>
            </div>
          ))}
          <Button>+ Add Requirement</Button>
        </div>
        {/* <div className={classes.saveButton}>
          <Button type="button">
              Save
          </Button>
        </div> */}
      </div>
      
    </div>

  )
}

export default EditInfoSubmissionPage
