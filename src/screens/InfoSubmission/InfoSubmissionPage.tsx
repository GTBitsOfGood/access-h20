import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {withStyles, createStyles} from "@material-ui/core/styles";

enum ApplicantStatus {
  Incomplete = "Incomplete",
  AwaitingUtilityAction = "Awaiting Utility Action",
  AwaitingAccessH2OAction = "Awaiting AccessH2O Action",
  Approved = "Approved",
  Completed = "Completed",
  Denied = "Denied",
  Terminated = "Terminated",
}

type Applicant = {
  name: string;
  utilityCompany: string;
  accountId: string;
  propertyAddress: string;
  applied: Date;
  status: ApplicantStatus;
};

let dummyData: Applicant
dummyData = {name: 'Ashley Miller', utilityCompany: 'Durham', accountId: '50000123', 
propertyAddress: '2886 Lime St Durham, NC 27704', applied: new Date("2019-01-16"),
status: ApplicantStatus.AwaitingUtilityAction}

function InfoSubmissionPage() {
  return (
    <div>
      <div>
        <h1>{dummyData.name}</h1>
        <div>
          <h3>Utility {dummyData.utilityCompany}</h3>
          <h3>Account ID {dummyData.accountId}</h3>
          <h3>Address {dummyData.propertyAddress}</h3>
          <h3>Status {dummyData.status}</h3>
        </div>
      </div>
      <h2>Eligibility</h2>
      <div>
        <p>Has the client made a minimum of 3 payments over the last 12 months?</p>
        <Button type="button">
          Yes
        </Button>
        <Button type="button">
          No
        </Button>
        <p>Has the client contacted you in the past few months?</p>
        <Button type="button">
          Yes
        </Button>
        <Button type="button">
          No
        </Button>
        <p>Does the client have another account in their name, thefts of service, anything to be aware of?</p>
        <Button type="button">
          Yes
        </Button>
        <Button type="button">
          No
        </Button>
        <p>If so, then please elaborate: </p>
        <TextField>
        </TextField>
        <p>Are there signs of a leak that is not abated?</p>
        <Button type="button">
          Yes
        </Button>
        <Button type="button">
          No
        </Button>
        <p>Additional comments?</p>
        <TextField>
        </TextField>
      </div>
      {/* <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Has the client made a minimum of 3 payments over the last 12 months?" labelPlacement="start" style={{justifyContent:'left'}}/>
        <FormControlLabel control={<Checkbox />} label="Has the client contacted you in the past few months?" labelPlacement="start" style={{justifyContent:'left'}}/>
        <FormControlLabel control={<Checkbox />} label="Does the client have another account in their name, thefts of service, anything to be aware of?" labelPlacement="start" style={{justifyContent:'left'}}/>
        <FormControlLabel control={<TextField />} label="If so, then please elaborate." labelPlacement="start" style={{justifyContent:'left'}}/>
        <FormControlLabel control={<Checkbox />} label="Are there signs of a leak that is not abated? " labelPlacement="start" style={{justifyContent:'left'}}/>
        <FormControlLabel control={<TextField />} label="Additional comments/documentation?" labelPlacement="start" style={{justifyContent:'left'}}/>
      </FormGroup> */}
      <h2>Document Submission</h2>
      <h2>Other</h2>
    </div>

  );
}

export default InfoSubmissionPage;
