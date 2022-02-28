import { Button, Divider, Link, TextField } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import React, { useEffect, useState } from 'react'
import classes from './EditForm.module.css'
import { buttonStyles, linkStyle, dividerStyle, deleteStyle } from './EditFormMUIStyles'

import { eligibilityQuestion } from 'server/models/EligibilityQuestion'
import { documentQuestion } from 'server/models/DocumentQuestion'
import { otherQuestion } from 'server/models/OtherQuestion'
import { addDocumentQuestion, addEligibilityQuestion, addOtherQuestion, getDocumentQuestions, getEligibilityQuestions, getOtherQuestions, removeDocumentQuestion, removeEligibilityQuestion, removeOtherQuestion } from 'src/actions/FormQuestions'
import { Types } from 'mongoose'

const EditFormPage = (): JSX.Element => {
  const [eligibilityQuestions, setEligibilityQuestions] = useState<eligibilityQuestion[]>()
  const [editEligibility, setEditEligibility] = useState<boolean[]>([])
  const [newEligibilityTitle, setNewEligibilityTitle] = useState('')
  const [newEligibilityQuestion, setNewEligibilityQuestion] = useState('')
  const [showNewEligibility, setShowNewEligibility] = useState(false)

  const [documentQuestions, setDocumentQuestions] = useState<documentQuestion[]>()
  const [editDocument, setEditDocument] = useState<boolean[]>([])
  const [newDocumentTitle, setNewDocumentTitle] = useState('')
  const [newDocumentDescription, setNewDocumentDescription] = useState('')
  const [showNewDocument, setShowNewDocument] = useState(false)

  const [otherQuestions, setOtherQuestions] = useState<otherQuestion[]>()
  const [editOther, setEditOther] = useState<boolean[]>([])
  const [newOtherQuestion, setNewOtherQuestion] = useState('')
  const [showNewOther, setShowNewOther] = useState(false)

  useEffect(() => {
    const getEligibility = async (): Promise<void> => {
      const questions = await getEligibilityQuestions()
      setEligibilityQuestions(questions)
      // const duplicate = []
      // for(let i = 0; i < questions.length; i++) {
      //   duplicate.push(true)
      // }
      // setEditEligibility(duplicate)
    }
    const getDocument = async (): Promise<void> => {
      const questions = await getDocumentQuestions()
      setDocumentQuestions(questions)
    }
    const getOther = async (): Promise<void> => {
      const questions = await getOtherQuestions()
      setOtherQuestions(questions)
    }
    void getEligibility()
    void getDocument()
    void getOther()
  })

  const enableEditEligibility = (index: number): void => {
    const duplicate = editEligibility.slice()
    duplicate[index] = !duplicate[index]
    setEditEligibility(duplicate)
  }
  const updateEligibilityQuestion = (index: number): void => {

  }
  const addNewEligibilityQuestion = (): void => {
    const addQuestion = async (): Promise<void> => {
      await addEligibilityQuestion({
        title: newEligibilityTitle,
        question: newEligibilityQuestion
      })
    }
    void addQuestion()
    setShowNewEligibility(false)
    setNewEligibilityTitle('')
    setNewEligibilityQuestion('')

    const duplicate = editEligibility.slice()
    duplicate.push(true)
    setEditEligibility(duplicate)
  }
  const handleEligibilityTitleChange = (e: any): void => {
    setNewEligibilityTitle(e.target.value)
  }
  const handleEligibilityQuestionChange = (e: any): void => {
    setNewEligibilityQuestion(e.target.value)
  }
  const deleteEligibilityQuestion = (id: Types.ObjectId, index: number): void => {
    const removeQuestion = async (): Promise<void> => {
      await removeEligibilityQuestion(id)
    }
    void removeQuestion()

    const duplicate = editEligibility.slice()
    duplicate.splice(index, 1)
    setEditEligibility(duplicate)
  }

  const enableEditDocument = (index: number): void => {
    const duplicate = editDocument.slice()
    duplicate[index] = !duplicate[index]
    setEditDocument(duplicate)
  }
  const updateDocumentQuestion = (index: number): void => {

  }
  const addNewDocumentQuestion = (): void => {
    const addQuestion = async (): Promise<void> => {
      await addDocumentQuestion({
        title: newDocumentTitle,
        description: newDocumentDescription
      })
    }
    void addQuestion()
    setShowNewDocument(false)
    setNewDocumentTitle('')
    setNewDocumentDescription('')

    const duplicate = editDocument.slice()
    duplicate.push(true)
    setEditDocument(duplicate)
  }
  const handleDocumentTitleChange = (e: any): void => {
    setNewDocumentTitle(e.target.value)
  }
  const handleDocumentDescriptionChange = (e: any): void => {
    setNewDocumentDescription(e.target.value)
  }
  const deleteDocumentQuestion = (id: Types.ObjectId, index: number): void => {
    const removeQuestion = async (): Promise<void> => {
      await removeDocumentQuestion(id)
    }
    void removeQuestion()

    const duplicate = editDocument.slice()
    duplicate.splice(index, 1)
    setEditDocument(duplicate)
  }

  const enableEditOther = (index: number): void => {
    const duplicate = editOther.slice()
    duplicate[index] = !duplicate[index]
    setEditOther(duplicate)
  }
  const updateOtherQuestion = (index: number): void => {

  }
  const addNewOtherQuestion = (): void => {
    const addQuestion = async (): Promise<void> => {
      await addOtherQuestion({
        question: newOtherQuestion
      })
    }
    void addQuestion()
    setShowNewOther(false)
    setNewOtherQuestion('')

    const duplicate = editOther.slice()
    duplicate.push(true)
    setEditOther(duplicate)
  }
  const handleOtherQuestionChange = (e: any): void => {
    setNewOtherQuestion(e.target.value)
  }
  const deleteOtherQuestion = (id: Types.ObjectId, index: number): void => {
    const removeQuestion = async (): Promise<void> => {
      await removeOtherQuestion(id)
    }
    void removeQuestion()

    const duplicate = editOther.slice()
    duplicate.splice(index, 1)
    setEditOther(duplicate)
  }

  return (
    <div className={classes.background}>
      <div className={classes.body}>
        <Link href='/applicants' underline="none" style={linkStyle}>{'<'} Back to Dashboard</Link>
        <h1 className={classes.pageTitle}>Edit Form</h1>
        <div className={classes.questionType}>
          <h3 className={classes.sectionTitle}>Eligibility</h3>
          <div className={classes.statusSection}>
          {eligibilityQuestions?.map((question, index) => (
            <div className={classes.questions}>
              <CreateIcon className={classes.editButton} onClick={() => enableEditEligibility(index)}/>
              {editEligibility[index]
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
                      {/* <DeleteForeverIcon sx={deleteStyle} onClick={() => deleteEligibilityQuestion(question?._id, index)}/> */}
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
                  <Button onClick={() => updateEligibilityQuestion(index)} sx={buttonStyles} variant="contained">Save</Button>
                  <Button onClick = {() => enableEditEligibility(index)} sx={buttonStyles} variant="text">Cancel</Button>
                </div>
              }
            </div>
          ))}
          { showNewEligibility
            ? <div className={classes.editQuestionsContainer}>
              <div>
                <TextField
                  InputProps={{
                    classes: {
                      root: classes.inputRoot
                    }
                  }}
                  value={newEligibilityTitle}
                  onChange={handleEligibilityTitleChange}
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
                  value={newEligibilityQuestion}
                  onChange={handleEligibilityQuestionChange}
                  multiline
                  fullWidth
                  label="Add brief description of required question"
                  size='small'
                />
              </div>
              <Button onClick={addNewEligibilityQuestion} sx={buttonStyles} variant="contained">Save</Button>
              <Button onClick = {() => setShowNewEligibility(false)} sx={buttonStyles} variant="text">Cancel</Button>
            </div>
            : <Button onClick = {() => setShowNewEligibility(true)} sx={buttonStyles} variant="outlined">+ Add Requirement</Button>
          }
          </div>
        </div>
        <Divider style={dividerStyle} />
        <div className={classes.questionType}>
          <h3 className={classes.sectionTitle}>Documents</h3>
          <div className={classes.docSection}>
          {documentQuestions?.map((question, index) => (
            <div className={classes.questions}>
              <CreateIcon className={classes.editButton} onClick={() => enableEditDocument(index)}/>
              {editDocument[index]
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
                      {/* <DeleteForeverIcon sx={deleteStyle} onClick={() => deleteDocumentQuestion(question._id, index)}/> */}
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
                <Button onClick={() => updateDocumentQuestion(index)} sx={buttonStyles} variant="contained">Save</Button>
                <Button onClick = {() => enableEditDocument(index)} sx={buttonStyles} variant="text">Cancel</Button>
                </div>
              }

            </div>
          ))}
          { showNewDocument
            ? <div className={classes.editQuestionsContainer}>
              <div>
                <TextField
                  InputProps={{
                    classes: {
                      root: classes.inputRoot
                    }
                  }}
                  value={newDocumentTitle}
                  onChange={handleDocumentTitleChange}
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
                  value={newDocumentDescription}
                  onChange={handleDocumentDescriptionChange}
                  multiline
                  fullWidth
                  label="Add brief description of required document"
                  size='small'
                />
              </div>
              <Button onClick={addNewDocumentQuestion} sx={buttonStyles} variant="contained">Save</Button>
              <Button onClick = {() => setShowNewDocument(false)} sx={buttonStyles} variant="text">Cancel</Button>
            </div>
            : <Button onClick = {() => setShowNewDocument(true)} sx={buttonStyles} variant="outlined">+ Add Document Requirement</Button>
          }
          </div>
        </div>
        <Divider style={dividerStyle} />
        <div className={classes.questionType}>
          <h3 className={classes.sectionTitle}>Additional</h3>
          <div className={classes.additSection}>
          {otherQuestions?.map((question, index) => (
            <div className={classes.questions}>
              <CreateIcon className={classes.editButton} onClick={() => enableEditOther(index)}/>
              {editOther[index]
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
                    {/* <DeleteForeverIcon sx={deleteStyle} onClick={() => deleteOtherQuestion(question._id, index)}/> */}
                  </div>
                </div>
                <Button onClick={() => updateOtherQuestion(index)} sx={buttonStyles} variant="contained">Save</Button>
                <Button onClick = {() => enableEditOther(index)} sx={buttonStyles} variant="text">Cancel</Button>
              </div>
              }
            </div>
          ))}
          { showNewOther
            ? <div className={classes.editQuestionsContainer}>
              <div>
                <TextField
                  InputProps={{
                    classes: {
                      root: classes.inputRoot
                    }
                  }}
                  value={newOtherQuestion}
                  onChange={handleOtherQuestionChange}
                  multiline
                  fullWidth
                  label="Add brief description of required question"
                  size='small'
                />
              </div>
              <Button onClick={addNewOtherQuestion} sx={buttonStyles} variant="contained">Save</Button>
              <Button onClick = {() => setShowNewOther(false)} sx={buttonStyles} variant="text">Cancel</Button>
            </div>
            : <Button onClick = {() => setShowNewOther(true)} sx={buttonStyles} variant="outlined">+ Add Question</Button>
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditFormPage
