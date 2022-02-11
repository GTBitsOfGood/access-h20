import * as React from 'react'
import classes from './NotesModal.module.css'
import TextField from '@material-ui/core/TextField'
import { Divider, Link } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import Modal from '@mui/material/Modal'
import { useState, useEffect } from 'react'
import urls from 'utils/urls'
import { Note } from 'server/models/Note'
import { testFunction2 } from 'src/actions/Notes'

interface PropTypes {
  shouldShowModal: boolean
  onClose: () => void
}

const starterNote: Note[] = [
  {
    sender: 'AccessH20',
    receiver: 'Utility',
    date: new Date('02/03/2022'),
    message: 'First Note'
  }
]
export const NotesModal = ({ shouldShowModal, onClose }: PropTypes): JSX.Element => {
  const [notes, setNotes] = useState(starterNote)
  const [newNote, setNewNote] = useState('')
  const [showAdd, setShowAdd] = useState(false)

  const [test, setTest] = useState('hHAHAHAHAHAHHAHAHAHA')

  // TODO utilize mongodb action getNotes()
  useEffect(() => {
    const getNotes = async (): Promise<void> => {
      const message = await testFunction2()
      setTest(message)
    }

    void getNotes()
  })

  const handleTextChange = (e: any): void => {
    setNewNote(e.target.value)
  }

  const addNote = (): void => {
    // TODO: utilize mongodb action addNote()
    const dummyDate: Note[] = [{
      sender: 'Utility',
      receiver: 'AccessH20',
      date: new Date(),
      message: newNote
    }]
    setShowAdd(false)
    setNotes(notes.concat(dummyDate))
    setNewNote('')
  }

  return (
    <div>
      <div>
        <Modal open={shouldShowModal} onClose={onClose}>
          <div className={classes.modalwrapper}>
            <div className={classes.modalheader}>
              <h3>Notes {test}</h3>
              <span onClick={onClose} className={classes.closemodalbtn}>
                &#10799;
              </span>
            </div>
            <div className={classes.modalcontent}>
            <Divider />
              {notes.map((note) => (
                <div>
                  <div className={classes.noteHeader}>
                    <p className={classes.sender}>{note.sender}</p>
                    <p className={classes.date}>{note.date.getMonth()}/{note.date.getDate()}/{note.date.getFullYear()}</p>
                  </div>
                  <p className={classes.message}>{note.message}</p>
                  <Divider />
                </div>
              ))}

              {showAdd
                ? <div>
                  <div className={classes.newNoteContainer}>
                    <TextField
                    value={newNote}
                    onChange={handleTextChange}
                    variant="outlined"
                    multiline
                    fullWidth
                    minRows={2} />
                  </div>
                  <div className={classes.addNoteButtons}>
                    <button className = {classes.saveNote} onClick={addNote}>Add Note</button>
                    <button onClick = {() => setShowAdd(false)} className={classes.cancel}>Cancel</button>
                  </div>
                </div>
                : <button onClick = {() => setShowAdd(true)} className={classes.plusNote}>+ Add Note</button>
              }
              {/* TODO: Once table & infoSubmit are linked to backend, change link to match correct customer info */}
              <div className={classes.customer}>
                <Link href={urls.pages.infosubmit + '/' + uuidv4().toString()} className={classes.customerButton}>View Customer Info</Link>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}
