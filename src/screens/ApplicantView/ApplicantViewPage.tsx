import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import ApplicantTable from "../../components/ApplicantTable";
import { ApplicantModal } from "src/components/ApplicantModal/ApplicantModal";

function ApplicantViewPage() {
  const [showModal, setShowModal] = useState(false);
  
  const closeModalHandler = () => setShowModal(false);

  return (
    <>
      <h1>Applicant View Page</h1>
      <ApplicantTable view={true}/>
      <div>
        <Button onClick={() => setShowModal(true)} className='modalBtn'>Add Customer</Button>
        <ApplicantModal showModal={showModal} close={closeModalHandler}/>
      </div>
    </>
  );
}

export default ApplicantViewPage;
