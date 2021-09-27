import * as React from "react";
import Button from '@material-ui/core/Button';
import classes from './ApplicantModal.module.css'
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField"
import Stack from "@mui/material/Stack";

export const ApplicantModal = ({showModal, close}) => {
    return (
        <div className={classes.modalwrapper}
            style={{
                opacity: showModal ? '1' : '0'
            }}
        >
            <div className={classes.modalheader}>
                <h3>Please enter customer information.</h3>
                <span onClick={close} className={classes.closemodalbtn}>X</span>
            </div>
            <div className={classes.modalcontent}>
                <Stack
                    component="form"
                    sx={{
                        width: '25ch',
                    }}
                    spacing={2}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField
                        id="customer-name"
                        label="Customer Name"
                        variant="standard"
                    />
                    <TextField
                        id="utility-company"
                        label="Utility Company"
                        variant="standard"
                    />
                    <TextField
                        id="application-date"
                        label="Application Date"
                        variant="standard"
                    />
                    <TextField
                        id="special-notes-multiline"
                        label="Special Notes"
                        multiline
                        rows={4}
                        variant='standard'
                    />
                </Stack>
            </div>
            <div className={classes.modalfooter}>
                <Button onClick={close} className='btn-submit'>Submit</Button>
            </div>
        </div>
    )
}