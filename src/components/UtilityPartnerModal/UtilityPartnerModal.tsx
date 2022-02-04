import * as React from "react";
import classes from "./UtilityPartnerModal.module.css";
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
import { SucessModal } from "src/components/SucessModal/SucessModal";
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
    const [showSucessModal, setShowSucessModal] = useState(false)

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
      onClose();
    }

    return (
      <Modal open={shouldShowModal} onClose={onClose}>
        <div className={classes.modalwrapper}>
          <div className={classes.modalheader}>
            <h1>Add Utility Partner</h1>
          </div>
        </div>
      </Modal>
    )
}