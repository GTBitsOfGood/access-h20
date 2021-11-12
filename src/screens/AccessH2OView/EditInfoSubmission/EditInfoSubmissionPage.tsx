import { Button, Divider, TextField } from '@material-ui/core'
import CreateIcon from '@mui/icons-material/Create';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { EligibilityQuestion } from 'server/models/EligibilityQuestion'
import { getEligibilityQuestions } from 'server/mongodb/actions/EligibilityQuestion'
import classes from './EditInfoSubmission.module.css'

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
                // value="Pay"
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
                // value="Pay"
                disabled={edit}
              />
              <Button>+ Add Requirement</Button>
            </div>
          </div>
        </div>
        <Divider />
        <div className={classes.questionType}>
          <div className={classes.edit}>
            <h3>Document Submission</h3>
          </div>
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
                // value="Pay"
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
                // value="Pay"
                disabled={edit}
              />
              <Button onClick={addRequirement}>+ Add Document Requirement</Button>

            </div>
          </div>
        </div>
        <Divider />
        <div className={classes.questionType}>
          <div className={classes.edit}>
            <h3>Additional</h3>
          </div>
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
                // value="Pay"
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
                // value="Pay"
                disabled={edit}
              />
              <Button>+ Add Question</Button>
            </div>
          </div>
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
