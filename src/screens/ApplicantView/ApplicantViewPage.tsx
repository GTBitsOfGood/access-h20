import React from "react";
import ApplicantTable from "../../components/ApplicantTable";
import classes from "./ApplicantView.module.css";
import urls from "../../../utils/urls";
import ApplicantNavLink from "../../components/ApplicantNavLink"

function ApplicantViewPage() {
  return (
    <>
      <ApplicantNavLink />
      <h1 className={classes.header}>Dashboard</h1>
      <ApplicantTable
        isUtilityView={false}
        infoSubmissionEndpoint={urls.pages.infosubmit}
      />
    </>
  );
}

export default ApplicantViewPage;
