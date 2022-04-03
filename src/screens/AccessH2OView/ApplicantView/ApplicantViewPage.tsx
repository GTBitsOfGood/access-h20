import React from 'react'
import ApplicantTable from '../../../components/ApplicantTable'
import classes from './ApplicantView.module.css'
import urls from '../../../../utils/urls'
import ApplicantNavLink from '../../../components/ApplicantNavLink'
import { Applicant } from 'src/types/Applicant'
import { getAll } from '../../../actions/Client'
import { NextPageContext } from 'next'

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
          infoSubmissionEndpoint={urls.pages.infosubmit}
          applicants={applicants}
        />
        <h1 className={classes.header2}></h1>
      </div>
    </>
  )
}

ApplicantViewPage.getInitialProps = async ({ req }: NextPageContext) => {
  const applicants =
    req != null ? await getAll(req.headers?.cookie) : await getAll()
  // console.log('ApplicantViewPage, applicants: ', applicants)
  return { applicants: applicants }
}

export default ApplicantViewPage
