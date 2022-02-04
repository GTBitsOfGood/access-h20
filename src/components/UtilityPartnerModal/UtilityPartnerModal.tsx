import * as React from "react";
import classes from "./NotesModal.module.css";
import TextField from "@material-ui/core/TextField";
import { Divider } from '@mui/material';
import { v4 as uuidv4 } from 'uuid'
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
// import { getPartner } from 'server/mongodb/actions/Note'
import { Link } from "@mui/material";
import urls from "utils/urls";
// import { Partner } from "server/models/Note"

interface PropTypes {
    shouldShowModal: boolean
    onClose: () => void
}

const dummyPartner: Partner[] = [
    {
      sender: "AccessH20",
      receiver: "Utility",
      date: new Date("02/03/2022"),
      message: "First Note"
    }
  ]

export const UtilityPartnerModal = ({ shouldShowModal, onClose }: PropTypes): JSX.Element => {
    const [partner, setPartner] = useState(starterNote);
}