import React, { useState } from 'react'
import ApplicantTable from '../../../components/ApplicantTable'
import classes from './ApplicantView.module.css'
import urls from '../../../../utils/urls'
import AccountCreationModal from '../../../components/AccountCreationModal'
import { Button } from '@material-ui/core'


const ApplicantViewPage = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false)

  const closeModalHandler = (): void => setShowModal(false)
  return (
    <>
      <div  className={classes.accountModal}>
        <Button onClick={() => setShowModal(true)}>Account Creation</Button>
        <AccountCreationModal shouldShowModal={showModal} onClose={closeModalHandler}/>
      </div>
      <h1 className={classes.header}>Dashboard</h1>
      <ApplicantTable
        isUtilityView={false}
        infoSubmissionEndpoint={urls.pages.infosubmit}
      />
    </>
  )
}

export default ApplicantViewPage
