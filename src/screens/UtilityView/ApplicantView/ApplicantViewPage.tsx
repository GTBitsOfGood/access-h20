import React from 'react'
import ApplicantTable from '../../../components/ApplicantTable'
import classes from './ApplicantView.module.css'
import urls from '../../../../utils/urls'
import ApplicantNavLink from '../../../components/ApplicantNavLink'
import { NextPageContext } from 'next'
import { Applicant } from 'src/types/Applicant'
import { getCurrentUser } from 'src/actions/User'
import { getUtilityApplicants } from 'src/actions/Client'

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
          infoSubmissionEndpoint={urls.pages.utilityView.infosubmit}
        />
        <h1 className={classes.header2}></h1>
      </div>
    </>
  )
}

ApplicantViewPage.getInitialProps = async ({ req }: NextPageContext) => {
  const user =
    req != null
      ? await getCurrentUser(req.headers?.cookie)
      : await getCurrentUser(null)

  // throw new Error(JSON.stringify(user))
  // throw new Error(user.id)
  const applicants = await getUtilityApplicants(user.id)
  // console.log('ApplicantViewPage, applicants: ', applicants)
  return { applicants: applicants }
}

export default ApplicantViewPage
