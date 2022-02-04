import * as React from "react";
import classes from "./NotesModal.module.css";
import TextField from "@material-ui/core/TextField";
import { Divider } from '@mui/material';
import { v4 as uuidv4 } from 'uuid'
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import { getPartner } from 'server/mongodb/actions/Partner'
import { Link } from "@mui/material";
import urls from "utils/urls";
// import { Partner } from "server/models/Partner"

interface PropTypes {
    shouldShowModal: boolean
    onClose: () => void
}

interface Partner {
  companyName: string
  email: string
  phone: string
  street: string
  city: string
  state: string
  zip: string
  notes: string
}

const dummyPartner: Partner = {
      companyName: "dummy",
      email: "dummy",
      phone: "dummy",
      street: "dummy",
      city: "dummy",
      state: "dummy",
      zip: "dummy",
      notes: ""
    }

export const UtilityPartnerModal = ({ shouldShowModal, onClose }: PropTypes): JSX.Element => {
    const [partner, setPartner] = useState(dummyPartner);
    const [newPartner, setNewPartner] = useState("")

    const [companyN, setCompanyN] = useState('')
    const [newemail, setEmail] = useState('')
    const [newphone, setPhone] = useState('')
    const [newstreet, setStreet] = useState('')
    const [newcity, setCity] = useState('')
    const [newstate, setState] = useState('')
    const [newzip, setZip] = useState('')
    const [newnotes, setNotes] = useState('')

    const addPartner = () => {
      // TODO: implement backend submissions
      const dummyDate: Partner = {
        companyName: "dummy",
        email: "dummy",
        phone: "dummy",
        street: "dummy",
        city: "dummy",
        state: "dummy",
        zip: "dummy",
        notes: ""
      }
      setPartner(dummyDate)
      setNewPartner("")
    }

    return (
      <div>
        <div>
          <Modal open={shouldShowModal} onClose={onClose}>
            <h1>Add Utility Partner</h1>
            <form onSubmit={addPartner}>
              <div className={classes.inputContainer}>
                <label htmlFor="companyN">Company Name</label>
                <TextField
                className={classes.input}
                required
                variant="outlined"
                id="companyN"
                value={companyN}
                onChange={(event) => setCompanyN(event.target.value)}
                />
              </div>
              <div>
                <div className={classes.inputContainer}>
                  <label htmlFor="email">Email Address</label>
                  <TextField
                  className={classes.input}
                  required
                  variant="outlined"
                  id="email"
                  value={newemail}
                  onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className={classes.inputContainer}>
                  <label htmlFor="phone">Phone Number</label>
                  <TextField
                  className={classes.input}
                  required
                  variant="outlined"
                  id="phone"
                  value={newphone}
                  onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
                
              </div>

              <div className={classes.inputContainer}>
                  <label htmlFor="street">Property Address</label>
                  <TextField
                  className={classes.input}
                  required
                  variant="outlined"
                  id="street"
                  value={newstreet}
                  onChange={(event) => setStreet(event.target.value)}
                  />
              </div>
                <div>
                  <div className={classes.inputContainer}>
                  <label htmlFor="city">City</label>
                  <TextField
                  className={classes.input}
                  required
                  variant="outlined"
                  id="city"
                  value={newcity}
                  onChange={(event) => setCity(event.target.value)}
                  />
                  </div>

                  <div className={classes.inputContainer}>
                  <label htmlFor="state">State</label>
                  <TextField
                  className={classes.input}
                  required
                  variant="outlined"
                  id="state"
                  value={newstate}
                  onChange={(event) => setState(event.target.value)}
                  />
                  </div>
                  
                  <div className={classes.inputContainer}>
                  <label htmlFor="zip">Zip</label>
                  <TextField
                  className={classes.input}
                  required
                  variant="outlined"
                  id="zip"
                  value={newzip}
                  onChange={(event) => setZip(event.target.value)}
                  />
                  </div>
                </div>
                <div className={classes.inputContainer}>
                  <label htmlFor="notes">Notes(Optional)</label>
                  <TextField
                  className={classes.input}
                  variant="outlined"
                  id="notes"
                  value={newnotes}
                  onChange={(event) => setNotes(event.target.value)}
                  />
                </div>
            </form>
          </Modal>
        </div>
      </div>
    )
}