import { Button, Divider, Link, TextField } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import React, { useState } from 'react'
import classes from './EditForm.module.css'
import { buttonStyles, linkStyle, dividerStyle, deleteStyle } from './EditFormMUIStyles'

import { eligibilityQuestion } from 'server/models/EligibilityQuestion'
import { documentQuestion } from 'server/models/DocumentQuestion'
import { otherQuestion } from 'server/models/OtherQuestion'
import { addDocumentQuestion, addEligibilityQuestion, addOtherQuestion, editDocumentQuestion, editEligibilityQuestion, editOtherQuestion, getDocumentQuestions, getEligibilityQuestions, getOtherQuestions, removeDocumentQuestion, removeEligibilityQuestion, removeOtherQuestion } from 'src/actions/FormQuestions'
import { ObjectId, Types } from 'mongoose'

const EditFormPage = ({ eligibility, document, other, showEligibility, showDocument, showOther }: {eligibility: eligibilityQuestion[], document: documentQuestion[], other: otherQuestion[], showEligibility: boolean[], showDocument: boolean[], showOther: boolean[]}): JSX.Element => {
  const [eligibilityQuestions, setEligibilityQuestions] = useState<eligibilityQuestion[]>(eligibility)
  const [editEligibility, setEditEligibility] = useState<boolean[]>(showEligibility)
  const [newEligibilityTitle, setNewEligibilityTitle] = useState('')
  const [newEligibilityQuestion, setNewEligibilityQuestion] = useState('')
  const [showNewEligibility, setShowNewEligibility] = useState(false)

  const [documentQuestions, setDocumentQuestions] = useState<documentQuestion[]>(document)
  const [editDocument, setEditDocument] = useState<boolean[]>(showDocument)
  const [newDocumentTitle, setNewDocumentTitle] = useState('')
  const [newDocumentDescription, setNewDocumentDescription] = useState('')
  const [showNewDocument, setShowNewDocument] = useState(false)

  const [otherQuestions, setOtherQuestions] = useState<otherQuestion[]>(other)
  const [editOther, setEditOther] = useState<boolean[]>(showOther)
  const [newOtherQuestion, setNewOtherQuestion] = useState('')
  const [showNewOther, setShowNewOther] = useState(false)

  const enableEditEligibility = (index: number): void => {
    const duplicate = editEligibility.slice()
    duplicate[index] = !duplicate[index]
    setEditEligibility(duplicate)
  }
  const updateEligibilityQuestion = (index: number, id: Types.ObjectId): void => {
    const updateQuestion = async (): Promise<void> => {
      await editEligibilityQuestion({
        _id: id,
        title: eligibilityQuestions[index].title,
        question: eligibilityQuestions[index].question
      })
    }
    void updateQuestion()
    enableEditEligibility(index)
    setTimeout(() => { window.location.reload() }, 1500)
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
    setTimeout(() => { window.location.reload() }, 1500)

    const duplicate = editEligibility.slice()
    duplicate.push(true)
    setEditEligibility(duplicate)
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

    const duplicate = editEligibility.slice()
    duplicate.splice(index, 1)
    setEditEligibility(duplicate)
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
  const updateDocumentQuestion = (index: number, id: Types.ObjectId): void => {
    const updateQuestion = async (): Promise<void> => {
      await editDocumentQuestion({
        _id: id,
        title: documentQuestions[index].title,
        description: documentQuestions[index].description
      })
    }
    void updateQuestion()
    enableEditDocument(index)
    setTimeout(() => { window.location.reload() }, 1500)
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
    setTimeout(() => { window.location.reload() }, 1500)

    const duplicate = editDocument.slice()
    duplicate.push(true)
    setEditDocument(duplicate)
  }
  const handleDocumentTitleChange = (text: any, id: Types.ObjectId, index: number): void => {
    if (id === '') { setNewDocumentTitle(text.target.value) } else {
      const duplicate = documentQuestions.slice()
      duplicate[index].title = text.target.value
      setDocumentQuestions(duplicate)
    }
  }
  const handleDocumentDescriptionChange = (text: any, id: Types.ObjectId, index: number): void => {
    if (id === '') { setNewDocumentDescription(text.target.value) } else {
      const duplicate = documentQuestions.slice()
      duplicate[index].description = text.target.value
      setDocumentQuestions(duplicate)
    }
  }
  const deleteDocumentQuestion = (id: Types.ObjectId, index: number): void => {
    const removeQuestion = async (): Promise<void> => {
      await removeDocumentQuestion(id)
    }
    void removeQuestion()
    setTimeout(() => { window.location.reload() }, 1500)

    const duplicate = editDocument.slice()
    duplicate.splice(index, 1)
    setEditDocument(duplicate)
  }
  const enableShowNewDocument = (): void => {
    setShowNewDocument(false)
    setNewDocumentTitle('')
    setNewDocumentDescription('')
  }

  const enableEditOther = (index: number): void => {
    const duplicate = editOther.slice()
    duplicate[index] = !duplicate[index]
    setEditOther(duplicate)
  }
  const updateOtherQuestion = (index: number, id: Types.ObjectId): void => {
    const updateQuestion = async (): Promise<void> => {
      await editOtherQuestion({
        _id: id,
        question: otherQuestions[index].question
      })
    }
    void updateQuestion()
    enableEditOther(index)
    setTimeout(() => { window.location.reload() }, 1500)
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
    setTimeout(() => { window.location.reload() }, 1500)

    const duplicate = editOther.slice()
    duplicate.push(true)
    setEditOther(duplicate)
  }
  const handleOtherQuestionChange = (text: any, id: Types.ObjectId, index: number): void => {
    if (id === '') { setNewOtherQuestion(text.target.value) } else {
      const duplicate = otherQuestions.slice()
      duplicate[index].question = text.target.value
      setOtherQuestions(duplicate)
    }
  }
  const deleteOtherQuestion = (id: Types.ObjectId, index: number): void => {
    const removeQuestion = async (): Promise<void> => {
      await removeOtherQuestion(id)
    }
    void removeQuestion()
    setTimeout(() => { window.location.reload() }, 1500)

    const duplicate = editOther.slice()
    duplicate.splice(index, 1)
    setEditOther(duplicate)
  }
  const enableShowNewOther = (): void => {
    setShowNewOther(false)
    setNewOtherQuestion('')
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
                        onChange={(title) => handleEligibilityTitleChange(title, question._id as ObjectId, index)}
                        fullWidth
                        multiline
                        size='small'
                      />
                      <DeleteForeverIcon sx={deleteStyle} onClick={() => deleteEligibilityQuestion(question._id as ObjectId, index)}/>
                    </div>
                    <TextField
                      InputProps={{
                        classes: {
                          root: classes.inputRoot
                        }
                      }}
                      value={question.question}
                      onChange={(text) => handleEligibilityQuestionChange(text, question._id as ObjectId, index)}
                      fullWidth
                      multiline
                      size='small'
                    />
                  </div>
                  <Button onClick={() => updateEligibilityQuestion(index, question._id as ObjectId)} sx={buttonStyles} variant="contained">Save</Button>
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
                        onChange={(title) => handleDocumentTitleChange(title, question._id as ObjectId, index)}
                        multiline
                        fullWidth
                        size='small'
                      />
                      <DeleteForeverIcon sx={deleteStyle} onClick={() => deleteDocumentQuestion(question._id as ObjectId, index)}/>
                    </div>
                    <TextField
                      InputProps={{
                        classes: {
                          root: classes.inputRoot
                        }
                      }}
                      value={question.description}
                      onChange={(description) => handleDocumentDescriptionChange(description, question._id as ObjectId, index)}
                      multiline
                      fullWidth
                      size='small'
                    />
                  </div>
                <Button onClick={() => updateDocumentQuestion(index, question._id as ObjectId)} sx={buttonStyles} variant="contained">Save</Button>
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
                  onChange={(text) => handleDocumentTitleChange(text, '', -1)}
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
                  onChange={(text) => handleDocumentDescriptionChange(text, '', -1)}
                  multiline
                  fullWidth
                  label="Add brief description of required document"
                  size='small'
                />
              </div>
              <Button onClick={addNewDocumentQuestion} sx={buttonStyles} variant="contained">Save</Button>
              <Button onClick = {enableShowNewDocument} sx={buttonStyles} variant="text">Cancel</Button>
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
                      onChange={(text) => handleOtherQuestionChange(text, question._id as ObjectId, index)}
                      multiline
                      fullWidth
                      size='small'
                    />
                    <DeleteForeverIcon sx={deleteStyle} onClick={() => deleteOtherQuestion(question._id as ObjectId, index)}/>
                  </div>
                </div>
                <Button onClick={() => updateOtherQuestion(index, question._id as ObjectId)} sx={buttonStyles} variant="contained">Save</Button>
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
                  onChange={(text) => handleOtherQuestionChange(text, '', -1)}
                  multiline
                  fullWidth
                  label="Add brief description of required question"
                  size='small'
                />
              </div>
              <Button onClick={addNewOtherQuestion} sx={buttonStyles} variant="contained">Save</Button>
              <Button onClick = {enableShowNewOther} sx={buttonStyles} variant="text">Cancel</Button>
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

  const editEligibility = []
  const editDocument = []
  const editOther = []

  for (let i = 0; i < eligibilityQuestions.length; i++) {
    editEligibility.push(true)
  }
  for (let i = 0; i < documentQuestions.length; i++) {
    editDocument.push(true)
  }
  for (let i = 0; i < otherQuestions.length; i++) {
    editOther.push(true)
  }

  return {
    eligibility: eligibilityQuestions,
    document: documentQuestions,
    other: otherQuestions,
    showEligibility: editEligibility,
    showDocument: editDocument,
    showOther: editOther
  }
}

export default EditFormPage
