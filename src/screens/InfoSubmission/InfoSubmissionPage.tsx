import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function InfoSubmissionPage() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Has the client made a minimum of 3 payments over the last 12 months?" />
      <FormControlLabel control={<Checkbox />} label="Has the client contacted you in the past few months?" />
    </FormGroup>
  );
}

export default InfoSubmissionPage;
