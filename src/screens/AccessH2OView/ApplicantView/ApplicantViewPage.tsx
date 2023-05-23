import React, { useEffect, useState } from 'react'
import ApplicantTable from '../../../components/ApplicantTable'
import classes from './ApplicantView.module.css'
import urls from '../../../../utils/urls'
import ApplicantNavLink from '../../../components/ApplicantNavLink'
import { getAll } from '../../../actions/Client'
import { Box, CircularProgress } from '@mui/material'

const ApplicantViewPage = (): JSX.Element => {
  useEffect(() => {
    const fetchApplicants = async (): Promise<void> => {
      const applicants = await getAll()
      setApplicants(applicants)
    }
    void fetchApplicants().then().catch()
  }, [])

  const [applicants, setApplicants] = useState(null)

  return (
    <>
      <ApplicantNavLink isUtilityView={false} />
      <div className={classes.root}>
        <h1 className={classes.header1}>Dashboard</h1>
        {applicants !== null
          ? (
            <ApplicantTable
              isUtilityView={false}
              infoSubmissionEndpoint={urls.pages.accessh2oView.infosubmit}
              applicants={applicants}
            />
            )
          : (
            <Box sx={{ mx: 'auto', my: '32px' }}>
              <CircularProgress size={40} disableShrink />
            </Box>
            )}
        <h1 className={classes.header2}></h1>
      </div>
    </>
  )
}

export default ApplicantViewPage
