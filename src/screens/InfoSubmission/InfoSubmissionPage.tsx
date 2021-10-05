import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


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

let paymentAns: string = '';
let servicesAns: string = '';
let contactAns: string = '';
let waterAns: string = '';

let adjustAns: string = '';
let infoAns: string = '';
let indivAns: string = '';

let file1: File = {};
let file2: File = {};

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
}

function setVar(id: string, ans) {
  ans = document.getElementById(id)?.value
}

function saveFile(id: string, file: File) {
  file = document.getElementById(id).value
}

function setStatusColor() {
    if (dummyData.status == ApplicantStatus.AwaitingUtilityAction) {
      return "#F2E3BD";
    }
    else if (dummyData.status == ApplicantStatus.Approved) {
      return "#BEF2BD";
    }
    else if (dummyData.status == ApplicantStatus.AwaitingAccessH2OAction) {
      return "#BDECF2";
    }
    else if (dummyData.status == ApplicantStatus.Completed) {
      return "#D4BDF2";
    }
    else if (dummyData.status == ApplicantStatus.Denied) {
      return "#F2BDBD";
    }
    else if (dummyData.status == ApplicantStatus.Terminated) {
      return "#C5C7CA";
    }
}

const styles = {
  hidden: {
    display: "none",
  },
  importLabel: {
    color: "black",
  },
};

const back = "<   Back to Dashboard"

function InfoSubmissionPage() {
  return (
    <div style = {{padding: "25px", border: "75px solid #CFEBFD"}}>
      <div>
        <a href="./" style = {{fontWeight: "normal", color: "#9A9A9A", textDecoration: "none", fontFamily:  "Roboto"}}>{back}</a>
        <h1>{dummyData.name}</h1>
        <div>
          <div style = {{display: "flex", width: "500px", height: "35px"}}>
            <div style = {{flex: "150px"}}>
              <h4>Status</h4>
            </div>
            <div style = {{flex: "100px"}}>
              <h4>Account ID</h4>
            </div>
            <div style = {{flex: "100px"}}>
              <h4>Address</h4>
            </div>
          </div>
          <div style = {{display: "flex", width: "500px"}}>
            <div style = {{flex: "150px"}}>
              <h4 style = {{fontWeight: "normal", backgroundColor: setStatusColor(), width: "85%", textAlign: "center", borderRadius: "8px"}}>{dummyData.status}</h4>
            </div>
            <div style = {{flex: "100px"}}>
              <h4 style = {{fontWeight: "normal"}}>{dummyData.accountId}</h4>
            </div>
            <div style = {{flex: "100px"}}>
              <h4 style = {{fontWeight: "normal"}}>{dummyData.propertyAddress}</h4>
            </div>
          </div>
        </div>
      </div>

      <hr style = {{width: "100%", border: "1px solid #DADADA"}}></hr>


      <div style = {{display: "flex", width: "500px", height: "35px"}}>
        <div style = {{flex: "150px"}}>
          <h3>Notes</h3>
        </div>
        <div style = {{flex: "150px"}}>
          <h3></h3>
          <a style = {{fontWeight: "normal", color: "#4DBAEA", textDecoration: "none", fontFamily:  "Roboto", padding: "15px"}}>+ Add Note</a>
        </div>
      </div>

      <hr style = {{width: "100%", border: "1px solid #DADADA", marginTop: "30px", marginBottom: "30px"}}></hr>

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
            <Button type="button" id = "yes2" onClick = {() => toggleButton(servicesAns, "yes2", "no2", true)}>Yes</Button>
            <Button type="button" id = "no2" onClick = {() => toggleButton(servicesAns, "yes2", "no2", false)}>No</Button>
          </div>
          <div style = {{flex: "700px"}}>
            <p style = {{fontWeight: "bold"}}>Minimum Services</p>
            <p style = {{fontWeight: "lighter"}}>Does the customer have a minimum of 12 months of service?</p>
          </div>
        </div>
        <div style = {{display: "flex", width: "1000px"}}>
          <div style = {{flex: "50px"}}>
            <Button type="button" id = "yes3" onClick = {() => toggleButton(contactAns, "yes3", "no3", true)}>Yes</Button>
            <Button type="button" id = "no3"  onClick = {() => toggleButton(contactAns, "yes3", "no3", false)}>No</Button>
          </div>
          <div style = {{flex: "700px"}}>
            <p style = {{fontWeight: "bold"}}>Customer Contact</p>
            <p style = {{fontWeight: "lighter"}}>Has the customer been in contact with your utility company?</p>
          </div>
        </div>
        <div style = {{display: "flex", width: "1000px"}}>
          <div style = {{flex: "50px"}}>
            <Button type="button" id = "yes4" onClick = {() => toggleButton(waterAns, "yes4", "no4", true)}>Yes</Button>
            <Button type="button" id = "no4" onClick = {() => toggleButton(waterAns, "yes4", "no4", false)}>No</Button>
          </div>
          <div style = {{flex: "700px"}}>
            <p style = {{fontWeight: "bold"}}>Water Meter</p>
            <p style = {{fontWeight: "lighter"}}>Does the property with dedicated water meter?</p>
          </div>
        </div>
      </div>
      <h3>Document Submission</h3>
      <div style = {{display: "flex", width: "300px", justifyContent: "space-between"}}>
        <Button  variant="contained" component="label" style = {{flex: "50px", width: "75px", height: "50px"}}>
          Upload
          <input id="paymentFile" type="file" hidden onChange = {() => saveFile("paymentFile",file1)}/>
        </Button>
        <p style = {{flex: "50px", padding: "10px"}}>Payment History</p>
      </div>
      <div style = {{display: "flex", width: "300px", justifyContent: "space-between"}}>
        <Button id="usageFile" variant="contained" component="label" style = {{flex: "50px", width: "75px", height: "50px"}}>
          Upload
          <input id="usageFile" type="file" hidden onChange = {() => saveFile("usageFile",file2)}/>
        </Button>
        <p style = {{flex: "50px", padding: "10px"}}>Usage History</p>
      </div>

      <h3>Other</h3>
      <div>
        <p>Are there any pending adjustments?</p>
        <textarea id="adjustAns" type= "text" style= {{width: "75%", height: "150px"}} onChange = {() => setVar("adjustAns", adjustAns)}></textarea>
      </div>
      <div>
        <p>What (if any) other individuals are involved (spouse, landlord, dependent)?</p>
        <TextField id="indivAns" onChange = {() => setVar("indivAns", indivAns)}></TextField>
      </div>
      <div>
        <p>Is there any additional information we should know about the account?</p>
        <textarea id="infoAns" type= "text" style= {{width: "75%", height: "150px"}} onChange = {() => setVar("infoAns", infoAns)}></textarea>
      </div>
      <Button type="button" onClick = {(() => console.log(information))}>
          Save
      </Button>
    </div>

  )
}


const information: Object = {
  YesNoAns: {
    payment: paymentAns,
    service: servicesAns,
    contact: contactAns,
    water: waterAns
  },
  Files: {
    payment: file1,
    usage: file2
  },
  ShortAns: {
    adjustments: adjustAns,
    involvements: indivAns,
    additionalInfo: infoAns
  }
}

export default InfoSubmissionPage;
