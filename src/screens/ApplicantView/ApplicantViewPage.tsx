import React from 'react'
import ApplicantTable from '../../components/ApplicantTable'
import classes from './ApplicantView.module.css'
import urls from '../../../utils/urls'
import ApplicantNavLink from '../../components/ApplicantNavLink'
import { getUtilityCompany } from '../../actions/Client'
import { Applicant } from 'src/types/Applicant'

const ApplicantViewPage = ({ applicants }: { applicants: Applicant[] }): JSX.Element => {
  return (
    <>
      <ApplicantNavLink
        isUtilityView={true}
      />
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
  // TODO: change to get only the applicants for the particular utility company
  const applicants = await getUtilityCompany()
  return { applicants: applicants }
}

export default ApplicantViewPage
