import React, { useState } from "react";
import { Applicant, ApplicantStatus } from "../../../types/Applicant";
import { Button, TextField, Input } from '@mui/material';
import useStyles from './InfoSubmissionPage.module';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    margin_left: '50px',
  },
  applicant: {
    display: 'flex',
    flex_direction: 'column',
    margin_right: '50%',
  },
  applicantInfoh4: {
    display: 'inline',
    padding_right: '10px',
  },
  applicantInfop: {
    display: 'inline',
    text_align: 'right',
  },
  applicantStatush4: {
    display: 'inline',
  },
  statusButton: {
    width: '126px;',
  },
  comments: {
    display: 'flex',
    flex_direction: 'column',
  },
  commentBox: {
    padding: '10px',
    margin_bottom: '15px',
  },
  commentSubmit: {
    width: '126px',
  },
}))

type infoSubmission = {
  payments: string,
  minimumService: string,
  customerContact: string,
  waterMeter: string,
  paymentHistory: string,
  usageHistory: string,
  pendingAdjustments: string,
  individualsInvolved: string,
  additionalInformation: string
}

const dummyApplicant: Applicant = {
  name: "applicant 1",
  utilityCompany: "City of Atlanta",
  accountId: "123456789",
  propertyAddress: "123 George Burdell Blvd",
  applied: new Date(),
  status: ApplicantStatus.AwaitingAccessH2OAction,
}

const dummyInfoSub: infoSubmission = {
  payments: "Yes",
  minimumService: "No",
  customerContact: "Yes",
  waterMeter: "Yes",
  paymentHistory: "dummydoc.pdf",
  usageHistory: "dummydoc.pdf",
  pendingAdjustments: "We have a number of concerns",
  individualsInvolved: "spouse, lanlord, and children",
  additionalInformation: "No"
}

const InfoSubmissionPage = () => {

  const classes = useStyles()

  const [applicant, setApplicant] = useState(dummyApplicant)
  const [infoSub, setInfoSub] = useState(dummyInfoSub)
  const [applicantStatus, setApplicantStatus] = useState(dummyApplicant.status)
  const [comments, setComments] = useState("")

  // TODO fetch applicant data based on applicantId
  // TODO fetch information submission based on applicantId?
  // TODO save comments somewhere

  const updateStatus = (event) => {
    setApplicantStatus(event.target.value)
  }

  return (
    <div className={classes.root}>
      <div className={classes.applicant}>
        <h2>{applicant.name}</h2>
        <div className={classes.applicantInfo}>
          <h4 className={classes.applicantInfoh4}>Utility</h4>
          <p className={classes.applicantInfop}>applicant.utilityCompany</p>
        </div>
        <div className={classes.applicantInfo}>
          <h4>Account Id</h4>
          <p>{applicant.accountId}</p>
        </div>
        <div className={classes.applicantInfo}>
          <h4>Property Address</h4>
          <p>{applicant.propertyAddress}</p>
        </div>
        <div className={classes.applicantStatus}>
          <h4 className={classes.applicantStatush4}>Applicant Status</h4>
          <Input type="radio" value={ApplicantStatus.Incomplete} checked={applicantStatus == ApplicantStatus.Incomplete} onChange={updateStatus} /> Incomplete
          <Input type="radio" value={ApplicantStatus.AwaitingUtilityAction} checked={applicantStatus == ApplicantStatus.AwaitingUtilityAction} onChange={updateStatus} /> AwaitingUtilityAction
          <Input type="radio" value={ApplicantStatus.AwaitingAccessH2OAction} checked={applicantStatus == ApplicantStatus.AwaitingAccessH2OAction} onChange={updateStatus} /> AwaitingAccessH2OAction
          <Input type="radio" value={ApplicantStatus.Approved} checked={applicantStatus == ApplicantStatus.Approved} onChange={updateStatus} /> Approved
          <Input type="radio" value={ApplicantStatus.Completed} checked={applicantStatus == ApplicantStatus.Completed} onChange={updateStatus} /> Completed
          <Input type="radio" value={ApplicantStatus.Denied} checked={applicantStatus == ApplicantStatus.Denied } onChange={updateStatus} /> Denied
          <Input type="radio" value={ApplicantStatus.Terminated} checked={applicantStatus == ApplicantStatus.Terminated} onChange={updateStatus}/> Terminated
        </div>
        <Button className={classes.statusButton}>Update Applicant</Button>
      </div>

      <div className={classes.eligibility}>
        <h3>Eligibility</h3>
        <h4>Has the customer made at least 3 payments?</h4>
        <p>{infoSub.payments}</p>
        <h4>Does the customer have a minimum of 12 months of service?</h4>
        <p>{infoSub.minimumService}</p>
        <h4>Has the customer been in contact with your utility company?</h4>
        <p>{infoSub.customerContact}</p>
        <h4>Does the property with dedicated water meter?</h4>
        <p>{infoSub.waterMeter}</p>
      </div>

      <div className={classes.document}>
        <h3>Document Submission</h3>
        <h4>Payment History</h4>
        <h4>Usuage History</h4>
      </div>

      <div className={classes.other}>
        <h3>Other</h3>
        <h4>Are there any pending adjustments?</h4>
        <p>{infoSub.pendingAdjustments}</p>
        <h4>What (if any) other individuals are involved (spouse, landlord, dependents)?</h4>
        <p>{infoSub.individualsInvolved}</p>
        <h4>Is there any additional information we should know about the account?</h4>
        <p>{infoSub.additionalInformation}</p>
      </div>

      <div className={classes.comments}>
        <h3>Request Additional Information</h3>
        <TextField
          className={classes.commentBox} 
          placeholder="Request additional information from utility companies"
          value={comments}
          onChange={(event) => setComments(event.target.value)}
          rows={10}
        />
        <Button className={classes.commentSubmit}>Submit</Button>
      </div>
    </div>
  );
}

export default InfoSubmissionPage;
