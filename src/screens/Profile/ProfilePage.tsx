/* eslint-disable @typescript-eslint/no-misused-promises */

import React, { useState, useContext } from 'react'
import classes from './Profile.module.css'
import Router from 'next/router'
import { getCompany, updateCompany } from '../../actions/Company'
import { updateUser, getCurrentUser } from '../../actions/User'
import urls from 'utils/urls'
import ApplicantNavLink from 'src/components/ApplicantNavLink'
import { AddRemoveModal } from '../../components/AddRemoveModal/AddRemoveModal'
import { FormErrorModal } from '../../components/FormErrorModal/FormErrorModal'
import { CookieContext } from '../../contexts/CookieContext'

import {
  FormControl,
  FormLabel,
  TextField,
  Typography
} from '@material-ui/core'
import { NextPageContext } from 'next'

/*
const ProfilePage = ({ json }): JSX.Element => {
  const [company, setCompany] = useState(json)
*/
interface PropTypes {
  propsCompany: any
  isUtilityView: boolean
}

const ProfilePage = ({
  propsCompany,
  isUtilityView
}: PropTypes): JSX.Element => {
  // const [company, setCompany] = useState({
  //   name: 'a',
  //   email: 'a',
  //   number: 'a',
  //   address: 'a',
  //   city: 'a',
  //   state: 'a',
  //   zip: 'a'
  // })
  const [company, setCompany] = useState(propsCompany)

  const [admin, setAdmin] = useState({ password: '', confirmPassword: '' })
  const cookieContext = useContext(CookieContext)

  const [showAddRemoveModal, setShowAddRemoveModal] = useState(false)
  const [showErrorFormModal, setShowErrorModal] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [validateEmail, setValidateEmail] = useState(true)
  const [validatePhone, setValidatePhones] = useState(true)

  // Handles update information to the server when update button is clicked
  const handleUpdate = async (): Promise<void> => {
    setIsSubmitted(true)
    // check if the information send is valid for utility view
    if (isUtilityView) {
      if (
        company.name !== '' &&
        company.address !== '' &&
        company.city !== '' &&
        company.email !== '' &&
        company.number !== '' &&
        company.state !== '' &&
        company.zip !== '' &&
        validateEmail &&
        validatePhone
      ) {
        // if valid update the server
        setShowAddRemoveModal(true)
        const updatedCompany = await updateCompany(company)
        console.log(JSON.stringify(updatedCompany))
        setCompany(updatedCompany)
      } else {
        // if not, display error
        setShowErrorModal(true)
      }
    } else {
      // customer view check
      if (admin.password !== '' && admin.confirmPassword === admin.password) {
        setShowAddRemoveModal(true)
        const user = await getCurrentUser(cookieContext.cookie)
        await updateUser({ id: user.id, password: admin.password })
      } else {
        setShowErrorModal(true)
      }
    }
  }

  // check validation of email input through regular expression
  const validateRecipientEmail = (value: string): void => {
    setCompany({ ...company, email: value })
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i
    setValidateEmail(regex.test(value))
  }

  // check validation of phone number input through regular expression
  const validateRecipientPhone = (value: string): void => {
    setCompany({ ...company, number: value })
    const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    setValidatePhones(regex.test(value))
  }

  // Actual page rendered here
  return (
    <div>
      <ApplicantNavLink isUtilityView={isUtilityView} />

      <div className={classes.profileContent}>
        <Typography
          variant="button"
          className={classes.profileGrayText}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={async () => await Router.replace(urls.pages.index)}
        >
          {!isUtilityView && (
            <a
              className={classes.dashboard}
              href="/accessh2oView/accessh20applicants"
            >
              <b>Back to Dashboard</b>
            </a>
          )}
          {isUtilityView && (
            <a className={classes.dashboard} href="/utilityView/utilityapplicants">
              <b>Back to Dashboard</b>
            </a>
          )}
        </Typography>
        <Typography variant="h3">
          <b>Profile</b>
        </Typography>

        <div className={classes.profileForm}>
          <div className={classes.formTitleContainer}>
            {!isUtilityView && (
              <Typography variant="h4">
                <b>Access H20</b>
                <span className={classes.profileGrayText}>Admin</span>
              </Typography>
            )}
            {isUtilityView && (
              <Typography variant="h4">
                {console.log(company.name)}
                <b>{company.name}</b>
                <span className={classes.profileGrayText}>Utility Partner</span>
              </Typography>
            )}
          </div>

          <FormControl>
            {!isUtilityView && (
              <div className={classes.formLine}>
                <div className={classes.formElem}>
                  <FormLabel className={classes.formFont} htmlFor="city-input">
                    Change Password
                  </FormLabel>
                  <div className={classes.textElem}>
                    <TextField
                      id="city-input"
                      variant="outlined"
                      // placeholder="Roswell"
                      required={true}
                      value={admin.password}
                      error={
                        admin.password !== admin.confirmPassword && isSubmitted
                      }
                      helperText={
                        admin.password === '' && isSubmitted
                          ? 'This field is required.'
                          : ''
                      }
                      onChange={(e) =>
                        setAdmin({ ...admin, password: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className={classes.formElem}>
                  <FormLabel className={classes.formFont} htmlFor="city-input">
                    Confirm Password
                  </FormLabel>
                  <div className={classes.textElem}>
                    <TextField
                      id="city-input"
                      variant="outlined"
                      // placeholder="Roswell"
                      required={true}
                      value={admin.confirmPassword}
                      error={
                        admin.password !== admin.confirmPassword && isSubmitted
                      }
                      helperText={
                        admin.password !== admin.confirmPassword && isSubmitted
                          ? 'Password mismatch.'
                          : ''
                      }
                      onChange={(e) =>
                        setAdmin({ ...admin, confirmPassword: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
            )}
            {isUtilityView && (
              <div>
                <div className={classes.formElem}>
                  <FormLabel
                    className={classes.formFont}
                    htmlFor="company-input"
                  >
                    Company Name
                  </FormLabel>
                  <div className={classes.textElem}>
                    <TextField
                      fullWidth
                      id="company-input"
                      variant="outlined"
                      placeholder="AccessH2O"
                      required={true}
                      value={company.name}
                      error={company.name === '' && isSubmitted}
                      helperText={
                        company.name === '' && isSubmitted
                          ? 'This field is required.'
                          : ''
                      }
                      onChange={(e) =>
                        setCompany({ ...company, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className={classes.formLine}>
                  <div className={classes.formElem}>
                    <FormLabel
                      className={classes.formFont}
                      htmlFor="email-input"
                    >
                      Email Address
                    </FormLabel>
                    <div className={classes.textElem}>
                      <TextField
                        id="email-input"
                        variant="outlined"
                        placeholder="info@accessh2o.org"
                        required={true}
                        value={company.email}
                        error={!validateEmail && isSubmitted}
                        helperText={
                          !validateEmail && isSubmitted
                            ? 'The Email address you entered is not reconizable.'
                            : ''
                        }
                        onChange={(e) =>
                          validateRecipientEmail(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className={classes.formElem}>
                    <FormLabel
                      className={classes.formFont}
                      htmlFor="phone-input"
                    >
                      Phone Number
                    </FormLabel>
                    <div className={classes.textElem}>
                      <TextField
                        id="phone-input"
                        variant="outlined"
                        placeholder="(404) 381-1045"
                        required={true}
                        value={company.number}
                        error={!validatePhone && isSubmitted}
                        helperText={
                          !validatePhone && isSubmitted
                            ? 'The phone number you entered is not valid.'
                            : ''
                        }
                        onChange={(e) =>
                          validateRecipientPhone(e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.formElem}>
                  <FormLabel
                    className={classes.formFont}
                    htmlFor="property-input"
                  >
                    Property Address
                  </FormLabel>
                  <div className={classes.textElem}>
                    <TextField
                      fullWidth
                      id="property-input"
                      variant="outlined"
                      placeholder="885 Woodstock Rd. #430-312"
                      required={true}
                      value={company.address}
                      error={company.address === '' && isSubmitted}
                      helperText={
                        company.address === '' && isSubmitted
                          ? 'This field is required.'
                          : ''
                      }
                      onChange={(e) =>
                        setCompany({ ...company, address: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className={classes.formLine}>
                  <div className={classes.formElem}>
                    <FormLabel
                      className={classes.formFont}
                      htmlFor="city-input"
                    >
                      City
                    </FormLabel>
                    <div className={classes.textElem}>
                      <TextField
                        id="city-input"
                        variant="outlined"
                        placeholder="Roswell"
                        required={true}
                        value={company.city}
                        error={company.city === '' && isSubmitted}
                        helperText={
                          company.city === '' && isSubmitted
                            ? 'This field is required.'
                            : ''
                        }
                        onChange={(e) =>
                          setCompany({ ...company, city: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className={classes.formElem}>
                    <FormLabel
                      className={classes.formFont}
                      htmlFor="state-input"
                    >
                      State
                    </FormLabel>
                    <div className={classes.textElem}>
                      <TextField
                        id="state-input"
                        variant="outlined"
                        placeholder="Georgia"
                        value={company.state}
                        error={company.state === '' && isSubmitted}
                        helperText={
                          company.state === '' && isSubmitted
                            ? 'This field is required.'
                            : ''
                        }
                        onChange={(e) =>
                          setCompany({ ...company, state: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className={classes.formElem}>
                    <FormLabel className={classes.formFont} htmlFor="zip-input">
                      Zip
                    </FormLabel>
                    <div className={classes.textElem}>
                      <TextField
                        id="zip-input"
                        variant="outlined"
                        placeholder="30075"
                        error={company.zip === '' && isSubmitted}
                        helperText={
                          company.zip === '' && isSubmitted
                            ? 'This field is required.'
                            : ''
                        }
                        value={company.zip}
                        onChange={(e) =>
                          setCompany({ ...company, zip: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
              <button className={classes.button} onClick={handleUpdate}>
                Update
              </button>
          </FormControl>
          <AddRemoveModal
            name={'Your profile'}
            isSuccessful={true}
            modalAction={'updated'}
            shouldShowModal={showAddRemoveModal}
            onClose={() => setShowAddRemoveModal(false)}
          />
          <FormErrorModal
            shouldShowModal={showErrorFormModal}
            onClose={() => setShowErrorModal(false)}
          />
        </div>
      </div>
    </div>
  )
}

ProfilePage.getInitialProps = async ({ req }: NextPageContext) => {
  const user =
    req != null
      ? await getCurrentUser(req.headers?.cookie)
      : await getCurrentUser(null)

  let company = null

  if (user !== null && user.isUtilityCompany === true) {
    company = await getCompany(user.id)
  }

  return {
    propsCompany: company,
    isUtilityView: user != null ? user.isUtilityCompany : false
  }
}

export default ProfilePage
