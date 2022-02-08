import React from 'react'
import ApplicantTable from '../../components/ApplicantTable'
import classes from './ApplicantView.module.css'
import urls from '../../../utils/urls'
import ApplicantNavLink from '../../components/ApplicantNavLink'

const ApplicantViewPage = (): JSX.Element => {
  return (
    <>
      <ApplicantNavLink />
      <h1 className={classes.header}>Dashboard</h1>
      <ApplicantTable
        isUtilityView={true}
        infoSubmissionEndpoint={urls.pages.infosubmit}
      />
    </>
  )
}

export default ApplicantViewPage
