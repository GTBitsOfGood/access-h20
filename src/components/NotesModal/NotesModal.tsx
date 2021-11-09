import * as React from 'react'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import classes from './NotesModal.module.css'
import TextField from '@material-ui/core/TextField'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';

interface PropTypes {
  shouldNotesModal: boolean
  close: () => void
}

let notes = [
  ["Note 1 blah blah blah", "9/12/21"],
  ["Note 2 blah blah blah", "9/12/21"],
  ["Note 3 blah blah blah", "9/12/21"]
];

export const NotesModal = ({ shouldNotesModal, close }: PropTypes): JSX.Element => {
  const [newNote, setNewNote] = useState('')

  function addNewNote() {
    notes.push([newNote, "9/12/21".toString()])
  }
  return (
    <div>
      <div>
        <Modal open={shouldNotesModal} onClose={close}>
          <div className={classes.modalwrapper}>
            <div className={classes.modalheader}>
              <h3 className={classes.addcustomer}>Notes</h3>
              <span onClick={() => close} className={classes.closemodalbtn}>
                &#10799;
              </span>
            </div>

            <Box
              className={classes.modalcontent}
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '32ch' },
              }}
              noValidate
              autoComplete="off"
            >
                <div>
                  <hr style = {{ width: '100%', border: '1px solid #DADADA' }}/>
                  <p>09/26/21</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id imperdiet massa, luctus faucibus nulla.</p>
                  <hr style = {{ width: '100%', border: '1px solid #DADADA' }}/>
                  <p>09/23/21</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id imperdiet massa, luctus faucibus nulla.</p>
                  <hr style = {{ width: '100%', border: '1px solid #DADADA' }}/>
                 
                </div>  
                <div>
                  <Button> + Add Note</Button>
                </div>
                <div className={classes.modalfooter}>
                  <Button 
                  onClick={close} className="btn-submit"
                  variant="contained"
                  style={{
                    backgroundColor: "#4DBAEA", 
                    color: '#FFFFFF'
                  }}
                  >
                    View Customer Info
                  </Button>
                </div>
            </Box>
          </div>
        </Modal>
      </div>
    </div>
  )
}