import React, { useState, useEffect } from "react";
import Router from "next/router";
import urls from "utils/urls";

import { UserType } from "server/mongodb/models/User";
import { UserRoles } from "server/mongodb/models/UserRoles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

interface PropTypes {
  currentUser: UserType;
}

function InfoSubmissionPage({ currentUser }: PropTypes) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser || currentUser.role !== UserRoles.UTILITY_COMPANY)
      Router.replace(urls.pages.index);
    else setLoading(false);
  }, []);

  return (
    !loading && (
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Has the client made a minimum of 3 payments over the last 12 months?"
          labelPlacement="start"
          style={{ justifyContent: "left" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Has the client contacted you in the past few months?"
          labelPlacement="start"
          style={{ justifyContent: "left" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Does the client have another account in their name, thefts of service, anything to be aware of?"
          labelPlacement="start"
          style={{ justifyContent: "left" }}
        />
        <FormControlLabel
          control={<TextField />}
          label="If so, then please elaborate."
          labelPlacement="start"
          style={{ justifyContent: "left" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Are there signs of a leak that is not abated? "
          labelPlacement="start"
          style={{ justifyContent: "left" }}
        />
        <FormControlLabel
          control={<TextField />}
          label="Additional comments/documentation?"
          labelPlacement="start"
          style={{ justifyContent: "left" }}
        />
      </FormGroup>
    )
  );
}

export default InfoSubmissionPage;
