import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField"
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {withStyles, createStyles} from "@material-ui/core/styles"

function InfoSubmissionPage() {
  const [selectedFile, setSelectedFile] = useState();

  const onChangeHandler = (e: React.ChangeEvent) => {
    if (e && e.target) {
      //@ts-ignore
      setSelectedFile(e.target.files[0]) 
    }
    
  }

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Has the client made a minimum of 3 payments over the last 12 months?" labelPlacement="start" style={{justifyContent:'left'}}/>
      <FormControlLabel control={<Checkbox />} label="Has the client contacted you in the past few months?" labelPlacement="start" style={{justifyContent:'left'}}/>
      <FormControlLabel control={<Checkbox />} label="Does the client have another account in their name, thefts of service, anything to be aware of?" labelPlacement="start" style={{justifyContent:'left'}}/>
      <FormControlLabel control={<TextField />} label="If so, then please elaborate." labelPlacement="start" style={{justifyContent:'left'}}/>
      <FormControlLabel control={<Checkbox />} label="Are there signs of a leak that is not abated? " labelPlacement="start" style={{justifyContent:'left'}}/>
      <FormControlLabel control={<TextField />} label="Additional comments/documentation?" labelPlacement="start" style={{justifyContent:'left'}}/>
      <Button
        variant="contained"
        component="label"
        style={{width:"400px"}}
      >
        Upload File:
        <input
          type="file"
          name="file"
          style={{padding:"5px"}}
          onChange={(e) => onChangeHandler(e)}
        />
      </Button>
    </FormGroup>
  );
}

export default InfoSubmissionPage;
