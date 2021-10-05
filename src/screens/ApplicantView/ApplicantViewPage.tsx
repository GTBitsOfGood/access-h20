import React from "react";
import ApplicantTable from "../../components/ApplicantTable";
import classes from "./ApplicantView.module.css";
import urls from "../../../utils/urls";

function ApplicantViewPage() {
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
