import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from  "@material-ui/core/ButtonGroup";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {withStyles, createStyles} from "@material-ui/core/styles";
import { fontWeight } from "@mui/system";


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
  dummyData = {
  name: 'Ashley Miller', 
  utilityCompany: 'Durham', 
  accountId: '50000123', 
  propertyAddress: '2886 Lime St Durham, NC 27704', 
  applied: new Date("2019-01-16"),
  status: ApplicantStatus.AwaitingUtilityAction
}

let paymentAns: string;
let contactAns: string;
let accountAns: string;
let accountAnsMore: string;
let leakAns: string;
let comments: string;

function toggleButton(answer: string, id1: string, id2: string, set: boolean) {
  if (set) {
    answer = 'Yes';
    document.getElementById(id1).style.backgroundColor = "GRAY"
    document.getElementById(id2).style.backgroundColor = "WHITE"
    document.getElementById(id2).selected = false;
    document.getElementById(id1).selected = true;
  } else {
    answer = 'No'
    document.getElementById(id2).style.backgroundColor = "GRAY"
    document.getElementById(id1).style.backgroundColor = "WHITE"
    document.getElementById(id1).selected = false;
    document.getElementById(id2).selected = true;
  }
  console.log(answer)
}

function InfoSubmissionPage() {
  return (
    <div style = {{padding: "25px"}}>
      <div>
        <h1>{dummyData.name}</h1>
        <div>
          <div style = {{display: "flex", width: "300px"}}>
            <div style = {{flex: "50px"}}>
              <h4>Utility</h4>
            </div>
            <div style = {{flex: "50px"}}>
              <h4 style = {{fontWeight: "normal"}}>{dummyData.utilityCompany}</h4>
            </div>
          </div>
          <div style = {{display: "flex", width: "300px"}}>
            <div style = {{flex: "50px"}}>
              <h4>Account ID</h4>
            </div>
            <div style = {{flex: "50px"}}>
              <h4 style = {{fontWeight: "normal"}}>{dummyData.accountId}</h4>
            </div>
          </div>
          <div style = {{display: "flex", width: "300px"}}>
            <div style = {{flex: "50px"}}>
              <h4>Address</h4>
            </div>
            <div style = {{flex: "50px"}}>
              <h4 style = {{fontWeight: "normal"}}>{dummyData.propertyAddress}</h4>
            </div>
          </div>
          <div style = {{display: "flex", width: "300px"}}>
            <div style = {{flex: "50px"}}>
              <h4>Status</h4>
            </div>
            <div style = {{flex: "50px"}}>
              <h4 style = {{fontWeight: "normal"}}>{dummyData.status}</h4>
            </div>
          </div>
        </div>
      </div>
      <h3>Notes</h3>
      <TextField style = {{width: "75%"}}></TextField>
      <h3>Eligibility</h3>
      <div>
        <div style = {{display: "flex", width: "1000px"}}>
          <div style = {{flex: "50px"}}>
            <Button type="button" id = "yes1" onClick = {() => toggleButton(paymentAns, "yes1", "no1", true)}>Yes</Button>
            <Button type="button" id = "no1" onClick = {() => toggleButton(paymentAns, "yes1", "no1", false)}>No</Button>
          </div>
          <div style = {{flex: "700px"}}>
            <p style = {{fontWeight: "bold"}}>Payments</p>
            <p style = {{fontWeight: "lighter"}}>Has the client made a minimum of 3 payments over the last 12 months?</p>
          </div>
        </div>
        <div style = {{display: "flex", width: "1000px"}}>
          <div style = {{flex: "50px"}}>
            <Button type="button" id = "yes2" onClick = {() => toggleButton(contactAns, "yes2", "no2", true)}>Yes</Button>
            <Button type="button" id = "no2" onClick = {() => toggleButton(contactAns, "yes2", "no2", false)}>No</Button>
          </div>
          <div style = {{flex: "700px"}}>
            <p style = {{fontWeight: "bold"}}>Minimum Services</p>
            <p style = {{fontWeight: "lighter"}}>Does the customer have a minimum of 12 months of service?</p>
          </div>
        </div>
        <div style = {{display: "flex", width: "1000px"}}>
          <div style = {{flex: "50px"}}>
            <Button type="button" id = "yes3" onClick = {() => toggleButton(accountAns, "yes3", "no3", true)}>Yes</Button>
            <Button type="button" id = "no3"  onClick = {() => toggleButton(accountAns, "yes3", "no3", false)}>No</Button>
          </div>
          <div style = {{flex: "700px"}}>
            <p style = {{fontWeight: "bold"}}>Customer Contact</p>
            <p style = {{fontWeight: "lighter"}}>Has the customer been in contact with your utility company?</p>
          </div>
        </div>
        <div style = {{display: "flex", width: "1000px"}}>
          <div style = {{flex: "50px"}}>
            <Button type="button" id = "yes4" onClick = {() => toggleButton(accountAnsMore, "yes4", "no4", true)}>Yes</Button>
            <Button type="button" id = "no4" onClick = {() => toggleButton(accountAnsMore, "yes4", "no4", false)}>No</Button>
          </div>
          <div style = {{flex: "700px"}}>
            <p style = {{fontWeight: "bold"}}>Water Meter</p>
            <p style = {{fontWeight: "lighter"}}>Does the property with dedicated water meter?</p>
          </div>
        </div>
      </div>
      <h3>Document Submission</h3>
      <div style = {{display: "flex", width: "300px", justifyContent: "space-between"}}>
        <Button variant="contained" component="label" style = {{flex: "50px", width: "75px", height: "50px"}}>
          Upload
          <input type="file" hidden/>
        </Button>
        <p style = {{flex: "50px", padding: "10px"}}>Payment History</p>
      </div>
      <div style = {{display: "flex", width: "300px", justifyContent: "space-between"}}>
        <Button variant="contained" component="label" style = {{flex: "50px", width: "75px", height: "50px"}}>
          Upload
          <input type="file" hidden/>
        </Button>
        <p style = {{flex: "50px", padding: "10px"}}>Usage History</p>
      </div>

      <h3>Other</h3>
      <div>
        <p>Are there any pending adjustments?</p>
        <textarea type= "text" style= {{width: "75%", height: "150px"}}></textarea>
      </div>
      <div>
        <p>What (if any) other individuals are involved (spouse, landlord, dependent)?</p>
        <textarea type= "text" style= {{width: "75%", height: "150px"}}></textarea>
      </div>
      <div>
        <p>Is there any additional information we should know about the account?</p>
        <textarea type= "text" style= {{width: "75%", height: "150px"}}></textarea>
      </div>
      <Button type="button" onClick = {(() => console.log())}>
          Save
      </Button>
    </div>

  );
}

export default InfoSubmissionPage;
