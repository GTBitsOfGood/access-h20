import React from 'react'
import ApplicantTable from '../../components/ApplicantTable'
import classes from './ApplicantView.module.css'
import urls from '../../../utils/urls'
import ApplicantNavLink from '../../components/ApplicantNavLink'
import { getAll } from '../../actions/Client'
import { Applicant } from '../../types/Applicant'

const ApplicantViewPage = ({ applicants }): JSX.Element => {
  return (
    <>
      <ApplicantNavLink />
      <h1 className={classes.header}>Dashboard</h1>
      <ApplicantTable
        isUtilityView={true}
        infoSubmissionEndpoint={urls.pages.infosubmit}
        applicants={applicants}
      />
    </>
  )
}

ApplicantViewPage.getInitialProps = async () => {
  const applicants = await getAll()
  return { applicants: applicants }
}

export default ApplicantViewPage
