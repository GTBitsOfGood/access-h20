import { Button, Divider, Link, TextField } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import React, { useEffect, useState } from 'react'
import classes from './EditForm.module.css'
import { buttonStyles, linkStyle, dividerStyle, deleteStyle } from './EditFormMUIStyles'

import { eligibilityQuestion } from 'server/models/EligibilityQuestion'
import { documentQuestion } from 'server/models/DocumentQuestion'
import { otherQuestion } from 'server/models/OtherQuestion'
import { addDocumentQuestion, addEligibilityQuestion, addOtherQuestion, editEligibilityQuestion, getDocumentQuestions, getEligibilityQuestions, getOtherQuestions, removeDocumentQuestion, removeEligibilityQuestion, removeOtherQuestion } from 'src/actions/FormQuestions'
import { Types } from 'mongoose'

const EditFormPage = ({ eligibility, document, other }: {eligibility: eligibilityQuestion[], document: documentQuestion[], other: otherQuestion[]}): JSX.Element => {
  const [eligibilityQuestions, setEligibilityQuestions] = useState<eligibilityQuestion[]>(eligibility)
  const [editEligibility, setEditEligibility] = useState<boolean[]>([])
  const [newEligibilityTitle, setNewEligibilityTitle] = useState('')
  const [newEligibilityQuestion, setNewEligibilityQuestion] = useState('')
  const [showNewEligibility, setShowNewEligibility] = useState(false)

  const [documentQuestions, setDocumentQuestions] = useState<documentQuestion[]>(document)
  const [editDocument, setEditDocument] = useState<boolean[]>([])
  const [newDocumentTitle, setNewDocumentTitle] = useState('')
  const [newDocumentDescription, setNewDocumentDescription] = useState('')
  const [showNewDocument, setShowNewDocument] = useState(false)

  const [otherQuestions, setOtherQuestions] = useState<otherQuestion[]>(other)
  const [editOther, setEditOther] = useState<boolean[]>([])
  const [newOtherQuestion, setNewOtherQuestion] = useState('')
  const [showNewOther, setShowNewOther] = useState(false)

  const enableEditEligibility = (index: number): void => {
    // const duplicate = editEligibility.slice()
    // duplicate[index] = !duplicate[index]
    // setEditEligibility(duplicate)
    setNewEligibilityTitle('')
    setNewEligibilityQuestion('')
  }
  const updateEligibilityQuestion = (index: number, id: Types.ObjectId): void => {
    const addQuestion = async (): Promise<void> => {
      await editEligibilityQuestion({
        _id: id,
        title: eligibilityQuestions[index].title,
        question: eligibilityQuestions[index].question
      })
    }
    void addQuestion()
    setTimeout(() => { window.location.reload() }, 1500)
  }
  const addNewEligibilityQuestion = (): void => {
    const addQuestion = async (): Promise<void> => {
      await addEligibilityQuestion({
        // _id: id,
        title: newEligibilityTitle,
        question: newEligibilityQuestion
      })
    }
    void addQuestion()
    setShowNewEligibility(false)
    setNewEligibilityTitle('')
    setNewEligibilityQuestion('')
    setTimeout(() => { window.location.reload() }, 1500)

    // const duplicate = editEligibility.slice()
    // duplicate.push(true)
    // setEditEligibility(duplicate)
  }
  const handleEligibilityTitleChange = (text: any, id: Types.ObjectId, index: number): void => {
    if (id === '') { setNewEligibilityTitle(text.target.value) } else {
      const duplicate = eligibilityQuestions.slice()
      duplicate[index].title = text.target.value
      setEligibilityQuestions(duplicate)
    }
  }
  const handleEligibilityQuestionChange = (text: any, id: Types.ObjectId, index: number): void => {
    if (id === '') { setNewEligibilityQuestion(text.target.value) } else {
      const duplicate = eligibilityQuestions.slice()
      duplicate[index].question = text.target.value
      setEligibilityQuestions(duplicate)
    }
  }
  const deleteEligibilityQuestion = (id: Types.ObjectId, index: number): void => {
    const removeQuestion = async (): Promise<void> => {
      await removeEligibilityQuestion(id)
    }
    void removeQuestion()
    setTimeout(() => { window.location.reload() }, 1500)

    // const duplicate = editEligibility.slice()
    // duplicate.splice(index, 1)
    // setEditEligibility(duplicate)
  }
  const enableShowNewEligibility = (): void => {
    setShowNewEligibility(false)
    setNewEligibilityTitle('')
    setNewEligibilityQuestion('')
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

    // const duplicate = editDocument.slice()
    // duplicate.push(true)
    // setEditDocument(duplicate)
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

    // const duplicate = editDocument.slice()
    // duplicate.splice(index, 1)
    // setEditDocument(duplicate)
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

    // const duplicate = editOther.slice()
    // duplicate.push(true)
    // setEditOther(duplicate)
  }
  const handleOtherQuestionChange = (e: any): void => {
    setNewOtherQuestion(e.target.value)
  }
  const deleteOtherQuestion = (id: Types.ObjectId, index: number): void => {
    const removeQuestion = async (): Promise<void> => {
      await removeOtherQuestion(id)
    }
    void removeQuestion()

    // const duplicate = editOther.slice()
    // duplicate.splice(index, 1)
    // setEditOther(duplicate)
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
                        onChange={(title) => handleEligibilityTitleChange(title, question._id, index)}
                        fullWidth
                        multiline
                        size='small'
                      />
                      <DeleteForeverIcon sx={deleteStyle} onClick={() => deleteEligibilityQuestion(question._id, index)}/>
                    </div>
                    <TextField
                      InputProps={{
                        classes: {
                          root: classes.inputRoot
                        }
                      }}
                      value={question.question}
                      onChange={(title) => handleEligibilityQuestionChange(title, question._id, index)}
                      fullWidth
                      multiline
                      size='small'
                    />
                  </div>
                  <Button onClick={() => updateEligibilityQuestion(index, question._id)} sx={buttonStyles} variant="contained">Save</Button>
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
                  onChange={(text) => handleEligibilityTitleChange(text, '', -1)}
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
                  onChange={(text) => handleEligibilityQuestionChange(text, '', -1)}
                  multiline
                  fullWidth
                  label="Add brief description of required question"
                  size='small'
                />
              </div>
              <Button onClick={addNewEligibilityQuestion} sx={buttonStyles} variant="contained">Save</Button>
              <Button onClick = {enableShowNewEligibility} sx={buttonStyles} variant="text">Cancel</Button>
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

EditFormPage.getInitialProps = async () => {
  const eligibilityQuestions = await getEligibilityQuestions()
  const documentQuestions = await getDocumentQuestions()
  const otherQuestions = await getOtherQuestions()
  return {
    eligibility: eligibilityQuestions,
    document: documentQuestions,
    other: otherQuestions
  }
}

export default EditFormPage
