import React from "react";
import ApplicantTable from "../../components/ApplicantTable";

function ApplicantViewPage() {
  return (
    <>
      <h1>Applicant View Page</h1>
      <ApplicantTable view={true}/>
    </>
  );
}

export default ApplicantViewPage;
