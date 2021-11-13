import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { ApplicantStatus, ApplicantStatusColor } from '../../types/Applicant'
import { Checkbox } from '@mui/material'
import { getClient } from '../../../server/mongodb/actions/Client'
import Error from 'next/error'
import { Client } from '../../../server/models/Client'

interface Applicant {
  name: string
  utilityCompany: string
  accountId: string
  propertyAddress: string
  applied: Date
  status: ApplicantStatus
}

const setStatusColor = (status: ApplicantStatus): string => {
  return ApplicantStatusColor[status]
}

const back = '<   Back to Dashboard'

interface PropTypes {
  applicantId: string
}

const InfoSubmissionPage = ({ applicantId }: PropTypes): JSX.Element => {
  const [client, setClient] = useState<Client>()
  const [isLoading, setIsLoading] = useState(true)
  const [responses, setResponses] = useState<{[id: string]: boolean}>({})

  const setResponse = (key: string, value: any): void => {
    setResponses({ ...responses, [key]: value })
  }

  getClient(applicantId).then((result) => setClient(result)).finally(() => setIsLoading(false))

  if (isLoading) {
    return <h1>Loading...</h1>
  } else if (client === null || client === undefined) {
    return <Error statusCode={404}>Applicant with the ID { applicantId } could not be found.</Error>
  }

  return (
    <div style={{ padding: '25px', border: '75px solid #CFEBFD' }}>
      <div>
        <a href="./"
           style={{ fontWeight: 'normal', color: '#9A9A9A', textDecoration: 'none', fontFamily: 'Roboto' }}>{back}</a>
        <h1>{client.name}</h1>
        <div>
          <div style={{ display: 'flex', width: '500px', height: '35px' }}>
            <div style={{ flex: '150px' }}>
              <h4>Status</h4>
            </div>
            <div style={{ flex: '100px' }}>
              <h4>Account ID</h4>
            </div>
            <div style={{ flex: '100px' }}>
              <h4>Address</h4>
            </div>
          </div>
          <div style={{ display: 'flex', width: '500px' }}>
            <div style={{ flex: '150px' }}>
              <h4 style={{
                fontWeight: 'normal',
                backgroundColor: setStatusColor(client.status),
                width: '85%',
                textAlign: 'center',
                borderRadius: '8px'
              }}>{client.status}</h4>
            </div>
            <div style={{ flex: '100px' }}>
              <h4 style={{ fontWeight: 'normal' }}>{client.accountId}</h4>
            </div>
            <div style={{ flex: '100px' }}>
              <h4 style={{ fontWeight: 'normal' }}>{client.address}</h4>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ width: '100%', border: '1px solid #DADADA' }}/>

      <div style={{ display: 'flex', width: '500px', height: '35px' }}>
        <div style={{ flex: '150px' }}>
          <h3>Notes</h3>
        </div>
        <div style={{ flex: '150px' }}>
          <a style={{
            fontWeight: 'normal',
            color: '#4DBAEA',
            textDecoration: 'none',
            fontFamily: 'Roboto',
            padding: '15px'
          }}>+ Add Note</a>
        </div>
      </div>

      <hr style={{ width: '100%', border: '1px solid #DADADA', marginTop: '30px', marginBottom: '30px' }}/>

      <h3>Eligibility</h3>
      {
        client.eligibilityStatuses?.map((question) => {
          return (
            <div style={{ display: 'flex', width: '1000px' }}>
              <div style={{ flex: '50px' }}>
                <Checkbox checked={responses[question.id]} onChange={() => setResponse(question.id, !responses[question.id])}/>
              </div>
              <div style={{ flex: '700px' }}>
                <p style={{ fontWeight: 'bold' }}>question.title</p>
                <p style={{ fontWeight: 'lighter' }}>question.question</p>
              </div>
            </div>
          )
        })
      }

      <h3>Document Submission</h3>
      {
        client.documents?.map((question) => {
          return (
            <div style={{ display: 'flex', width: '300px', justifyContent: 'space-between' }}>
              <Button variant="contained" component="label" style={{ flex: '50px', width: '75px', height: '50px' }}>
                Upload
                <input id={question.id} type="file" hidden onChange={(e) => {
                  if (e.target.files === null || e.target.files.length < 1) {
                    alert('Please upload a valid file.')
                    return
                  }

                  setResponse(question.id, e.target.files[0])
                }}/>
              </Button>
              <p style={{ flex: '50px', padding: '10px' }}>question.title</p>
            </div>
          )
        })
      }

      <h3>Other</h3>
      {
        client.otherQuestions?.map((question) => {
          return (
            <div>
              <p>Is there any additional information we should know about the account?</p>
              <TextField id={question.id} onChange={(e) => setResponse(question.id, e.target.value)}/>
            </div>
          )
        })
      }

      <Button type="button" onClick={(() => console.log(responses))}>
        Save
      </Button>
    </div>

  )
}

export default InfoSubmissionPage
