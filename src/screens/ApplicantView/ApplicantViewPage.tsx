import React from "react";
import ApplicantTable from "../../components/ApplicantTable";
import classes from "./ApplicantView.module.css";

function ApplicantViewPage() {
  return (
    <>
      <h1 className={classes.header}>Dashboard</h1>
      <ApplicantTable view={false}/>
    </>
  );
}

export default ApplicantViewPage;
