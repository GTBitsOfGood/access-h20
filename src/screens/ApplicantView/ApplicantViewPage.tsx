import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ApplicantTable from "../../components/ApplicantTable";
import { ApplicantModal } from "src/components/ApplicantModal/ApplicantModal";
import urls from "../../../utils/urls";

function ApplicantViewPage() {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  return (
    <>
      <h1>Applicant View Page</h1>
      <ApplicantTable
        isUtilityView={true}
        infoSubmissionEndpoint={urls.pages.infosubmit}
      />
      <div>
        <Button onClick={() => setShouldShowModal(true)} className="modalBtn">
          Add Customer
        </Button>
        <ApplicantModal
          shouldShowModal={shouldShowModal}
          onClose={() => setShouldShowModal(false)}
        />
      </div>
    </>
  );
}

export default ApplicantViewPage;
