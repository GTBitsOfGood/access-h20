import React from 'react'
import ApplicantTable from '../../components/ApplicantTable'
import classes from './ApplicantView.module.css'
import urls from '../../../utils/urls'
import ApplicantNavLink from '../../components/ApplicantNavLink'
import { getAll } from '../../actions/Client'
import { Applicant } from 'src/types/Applicant'

const ApplicantViewPage = ({ applicants }: { applicants: Applicant[] }): JSX.Element => {
  return (
    <>
      <ApplicantNavLink
        isUtilityView={true}
      />
      <div className={classes.root}>
        <h1 className={classes.header1}>Dashboard</h1>
        <ApplicantTable
          isUtilityView={true}
          infoSubmissionEndpoint={urls.pages.infosubmit}
          applicants={applicants}
        />
        <h1 className={classes.header2}></h1>
      </div>
    </>
  )
}

ApplicantViewPage.getInitialProps = async () => {
  // TODO: change to get only the applicants for the particular utility company
  const applicants = await getAll()
  return { applicants: applicants }
}

export default ApplicantViewPage
