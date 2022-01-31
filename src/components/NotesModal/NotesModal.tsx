import * as React from "react";
import Button from "@material-ui/core/Button";
import classes from "./NotesModal.module.css";
import TextField from "@material-ui/core/TextField";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import { getNotes } from '../../../server/mongodb/actions/Note'

interface PropTypes {
  shouldShowModal: boolean
  onClose: () => void
}

export const NotesModal = ({ shouldShowModal, onClose }: PropTypes): JSX.Element => {
  const [notes, setNotes] = useState();

  useEffect(() => {
    const messages = getNotes()
    console.log(messages)
  })
  
  return (
    <div>
      <div>
        <Modal open={shouldShowModal} onClose={onClose}>
          <div className={classes.modalwrapper}>
            <div className={classes.modalheader}>
              <h3 className={classes.addcustomer}>Notes</h3>
              <span onClick={onClose} className={classes.closemodalbtn}>
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

                <Button>+ Add Note</Button>

                <Button>View Customer Info</Button>
            </Box>
          </div>
        </Modal>
      </div>
    </div>
  )
}
