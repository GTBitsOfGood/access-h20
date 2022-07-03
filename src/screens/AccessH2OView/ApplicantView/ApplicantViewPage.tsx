import React from 'react'
import ApplicantTable from '../../../components/ApplicantTable'
import classes from './ApplicantView.module.css'
import urls from '../../../../utils/urls'
import ApplicantNavLink from '../../../components/ApplicantNavLink'
import { Applicant } from 'src/types/Applicant'

const ApplicantViewPage = ({
  applicants
}: {
  applicants: Applicant[]
}): JSX.Element => {
  return (
    <>
      <ApplicantNavLink
        isUtilityView={false}
      />
      <div className={classes.root}>
        <h1 className={classes.header1}>Dashboard</h1>
        <ApplicantTable
          isUtilityView={false}
          infoSubmissionEndpoint={urls.pages.accessh2oView.infosubmit}
        />
        <h1 className={classes.header2}></h1>
      </div>
    </>
  )
}

export default ApplicantViewPage
