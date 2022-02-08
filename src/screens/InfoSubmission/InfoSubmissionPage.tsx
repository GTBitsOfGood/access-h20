import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ApplicantStatus, ApplicantStatusColor } from "../../types/Applicant";
import { Checkbox } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import style from "./InfoSubmission.module.css";

interface Applicant {
  name: string;
  utilityCompany: string;
  accountId: string;
  propertyAddress: string;
  applied: Date;
  status: ApplicantStatus;
  phoneNumber: string; // Get this checked with Charlie, shoudl applicant have phone num?
}

const dummyData: Applicant = {
  name: "Ashley Miller",
  utilityCompany: "Durham",
  accountId: "50000123",
  propertyAddress: "2886 Lime St Durham, NC 27704",
  applied: new Date("2019-01-16"),
  status: ApplicantStatus.AwaitingUtility,
  phoneNumber: "(111)111-1111",
};

const setStatusColor = (status: ApplicantStatus): string => {
  return ApplicantStatusColor[status];
};

const back = "&nbsp;&nbsp;&nbsp;&nbsp;Back to Dashboard";

interface PropTypes {
  applicantId: string;
}

const InfoSubmissionPage = ({ applicantId }: PropTypes): JSX.Element => {
  //Status
  const [values, setValues] = useState([
    "Terminated",
    "Denied",
    "Completed",
    "Approved",
    "Awaiting AccessH2O",
    "Awaiting Utility",
  ]);
  const [status, setStatus] = useState("Awaiting Utility");

  //Notes
  const initArr: string[] = [];
  const [textFieldDisplayed, setTextFieldDisplayed] = useState(false);
  const [currentInput, setCurrentInput] = useState("");
  const [notes, setNotes] = useState(initArr);

  // const [showNotes, setShowNotes] = useState(false);
  // const [notes, setNotes] = useState([]);

  // Yes or No
  const [paymentAns, setPaymentAns] = useState(false);
  const [servicesAns, setServicesAns] = useState(false);
  const [contactAns, setContactAns] = useState(false);
  const [waterAns, setWaterAns] = useState(false);

  // File
  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [usageFile, setUsageFile] = useState<File | null>(null);

  // Short answer
  const [adjustAns, setAdjustAns] = useState("");
  const [infoAns, setInfoAns] = useState("");
  const [indivAns, setIndivAns] = useState("");

  const generateInfoSubmission = (): Object => {
    return {
      payments: booleanToYesOrNo(paymentAns),
      minimumService: booleanToYesOrNo(servicesAns),
      customerContact: booleanToYesOrNo(contactAns),
      waterMeter: booleanToYesOrNo(waterAns),
      paymentFile: paymentFile,
      usageFile: usageFile,
      pendingAdjustments: adjustAns,
      individualsInvolved: indivAns,
      additionalInformation: infoAns,
    };
  };

  const handleStatusClick = (event: any) => {
    setStatus(event.target.value);
    console.log(event.target.value);
  };

  const booleanToYesOrNo = (input: boolean): string => {
    if (input) {
      return "Yes";
    }
    return "No";
  };

  return (
    <div className={style.infoSubmissionBackground}>
      <div className={style.infoSubmissionContent}>
        <a className={style.goBack} href="./">
          &lt;&nbsp;&nbsp;&nbsp;&nbsp;Back to Dashboard
        </a>
        <h1>{dummyData.name}</h1>
        <div className={style.customerInfo}>
          <div className={style.customerComponentList}>
            <div className={style.customerComponent}>
              <h4>Status</h4>
              <Select
                id="status-menu"
                onChange={handleStatusClick}
                value={status}
              >
                <MenuItem value={"Awaiting Utility"}>Awaiting Utility</MenuItem>
                <MenuItem value={"Terminated"}>Terminated</MenuItem>
                <MenuItem value={"Denied"}>Denied</MenuItem>
                <MenuItem value={"Completed"}>Completed</MenuItem>
                <MenuItem value={"Approved"}>Approved</MenuItem>
                <MenuItem value={"Awaiting AccessH2O"}>
                  Awaiting AccessH2O
                </MenuItem>
              </Select>
            </div>
            <div className={style.customerComponent}>
              <h5>Account ID</h5>
              <h4>{dummyData.accountId}</h4>
            </div>
            <div className={style.customerComponent}>
              <h4>Phone Number</h4>
              <h4>{dummyData.phoneNumber}</h4>
            </div>
            <div className={style.customerComponent}>
              <h4>Address</h4>
              <h4>{dummyData.propertyAddress}</h4>
            </div>
          </div>
        </div>

        <hr />

        <div className={style.sectionContainer}>
          <div className={style.sectionTitleContainer}>
            <h3>Notes</h3>
          </div>

          <div className={style.sectionNotesContainer}>
            <div className={style.noteStack}>
              {notes.map((note) => (
                <TextField
                  id="savedNotes"
                  variant="filled"
                  defaultValue={note}
                  className={style.stickyNote}
                  InputProps={{ readOnly: true, disableUnderline: true }}
                ></TextField>
              ))}
            </div>

            <div>
              {textFieldDisplayed ? (
                <TextField
                  id="notesField"
                  label="Add your note here"
                  variant="outlined"
                  onChange={(e) => setCurrentInput(e.target.value)}
                  value={currentInput}
                ></TextField>
              ) : (
                <a onClick={() => setTextFieldDisplayed(true)}> + Add Note </a>
              )}
            </div>
            <div>
              <Button
                id="note"
                onClick={() => {
                  if (textFieldDisplayed) {
                    setNotes([...notes, currentInput]);
                    setCurrentInput("");
                    setTextFieldDisplayed(false);
                  }
                }}
                variant="contained"
                component="label"
              >
                Add Note
              </Button>

              <Button
                id="note"
                onClick={() => {
                  setTextFieldDisplayed(false);
                }}
                variant="contained"
                component="label"
              >
                Cancel
              </Button>
            </div>
          </div>
          <div className={style.sectionRightFiller}></div>
        </div>

        <hr />
        <div className={style.sectionContainer}>
          <div className={style.sectionTitleContainer}>
            <h3>Eligibility</h3>
          </div>

          <div className={style.sectionEligibilityContainer}>
            <div className={style.eligibilityStack}>
              <div>
                <Checkbox
                  checked={paymentAns}
                  onChange={() => setPaymentAns(!paymentAns)}
                />
              </div>
              <div>
                <p>Payments</p>
                <p>
                  Has the client made a minimum of 3 payments over the last 12
                  months?
                </p>
              </div>
              <div>
                <Checkbox
                  checked={servicesAns}
                  onChange={() => setServicesAns(!servicesAns)}
                />
              </div>
              <div>
                <p>Minimum Services</p>
                <p>Does the customer have a minimum of 12 months of service?</p>
              </div>
              <div>
                <Checkbox
                  checked={contactAns}
                  onChange={() => setContactAns(!contactAns)}
                />
              </div>
              <div>
                <p>Customer Contact</p>
                <p>
                  Has the customer been in contact with your utility company?
                </p>
              </div>
              <div>
                <Checkbox
                  checked={waterAns}
                  onChange={() => setWaterAns(!waterAns)}
                />
              </div>
              <div>
                <p>Water Meter</p>
                <p>Does the property with dedicated water meter?</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className={style.sectionContainer}>
          <div className={style.sectionTitleContainer}>
            <h3>Documents</h3>
          </div>

          <div className={style.sectionDocumentsContainer}>
            <div className={style.documentStack}>
              <div>
                <Button variant="contained" component="label">
                  Upload
                  <input
                    id="paymentFile"
                    type="file"
                    hidden
                    onChange={(e) => {
                      if (
                        e.target.files === null ||
                        e.target.files.length < 1
                      ) {
                        alert("Please upload a valid file.");
                        return;
                      }

                      setPaymentFile(e.target.files[0]);
                    }}
                  />
                </Button>
                <p>Payment History</p>
              </div>

              <div>
                <Button id="usageFile" variant="contained" component="label">
                  Upload
                  <input
                    id="paymentFile"
                    type="file"
                    hidden
                    onChange={(e) => {
                      if (
                        e.target.files === null ||
                        e.target.files.length < 1
                      ) {
                        alert("Please upload a valid file.");
                        return;
                      }

                      setUsageFile(e.target.files[0]);
                    }}
                  />
                </Button>
                <p>Usage History</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <h3>Additional</h3>
        <div>
          <p>Are there any pending adjustments?</p>
          <TextField id="notesField" variant="outlined"></TextField>

          <p>
            What (if any) other individuals are involved (spouse, landlord,
            dependent)?
          </p>
          <TextField
            id="indivAns"
            onChange={(e) => setIndivAns(e.target.value)}
          />
        </div>
        <div>
          <p>
            Is there any additional information we should know about the
            account?
          </p>
          <TextField
            id="infoAns"
            onChange={(e) => setInfoAns(e.target.value)}
          />
        </div>
        <Button
          type="button"
          onClick={() => console.log(generateInfoSubmission())}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default InfoSubmissionPage;
