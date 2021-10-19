import React from "react";
import ApplicantTable from "../../components/ApplicantTable";
import urls from "../../../utils/urls";

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    header: {
        margin: '48px 0px 45px 55px',
        font_family: 'Arial',
    },  
}))

function ApplicantViewPage() {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.header}>Dashboard</h1>
      <ApplicantTable
        isUtilityView={false}
        infoSubmissionEndpoint={urls.pages.infosubmit}
      />
    </>
  );
}

export default ApplicantViewPage;
