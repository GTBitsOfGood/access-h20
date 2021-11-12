import React, { useState } from 'react'
import classes from './Profile.module.css'
import Router from 'next/router'
import Image from 'next/image'
import urls from 'utils/urls'

import Stack from '@mui/material/Stack'
import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography
} from '@material-ui/core'

const Profile = (): JSX.Element => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')
  const [notes, setNotes] = useState('')

  return (
    <div>
      <div className={classes.profileHeader}>
        <Image width="75" height="75" src="/static/access-h20-logo.jpg" />
        <Stack direction="row" spacing={3}>
          <Button size="small">Add Utility Partner</Button>
          <Button size="small">Edit Form</Button>
          <span className={classes.profilePic}></span>
        </Stack>
      </div>

      <div className={classes.profileContent}>
        <Typography
          variant="button"
          className={classes.profileGrayText}
          onClick={async () => await Router.replace(urls.pages.index)}
        >
          <b className={classes.textHover}>
            &lsaquo; Back to Dashboard
          </b>
        </Typography>
        <Typography variant="h3">
          <b>Profile</b>
        </Typography>

        <div className={classes.profileForm}>
          <div className={classes.formTitleContainer}>
            <Typography variant="h4">
              <b>Access H20</b>
              <span className={classes.profileGrayText}>
                Admin
              </span>
            </Typography>
          </div>

          <FormControl>
            <div className={classes.formElem}>
              <FormLabel
                className={classes.formFont}
                htmlFor="company-input"
              >
                Company Name
              </FormLabel>
              <div className={classes.textElem}>
                <TextField
                  fullWidth id="company-input"
                  variant="outlined"
                  placeholder="AccessH20"
                  onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setNumber(e.target.value)}
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
                  onChange={(e) => setAddress(e.target.value)}
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
                  onChange={(e) => setCity(e.target.value)}
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
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
              </div>
              <div className={classes.formElem}>
                <FormLabel
                  className={classes.formFont}
                  htmlFor="zip-input"
                >
                  Zip
                </FormLabel>
                <div className={classes.textElem}>
                <TextField
                  id="zip-input"
                  variant="outlined"
                  placeholder="30075"
                  onChange={(e) => setZip(e.target.value)}
                />
                </div>
              </div>
            </div>
            <div className={classes.formElem}>
              <FormLabel
                className={classes.formFont}
                htmlFor="notes-input"
              >
                Notes (Optional)
              </FormLabel>
              <div className={classes.textElem}>
                <TextField
                  fullWidth
                  multiline
                  minRows={3}
                  id="notes-input"
                  variant="outlined"
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>
            </div>

            <Stack
              className={classes.formSubmitContainer}
              direction="row-reverse"
              alignItems="flex-end"
              spacing={2}
            >
              <Button variant="contained">Update</Button>
              <Button variant="text">Cancel</Button>
            </Stack>
          </FormControl>
        </div>
      </div>
    </div>
  )
}

export default Profile
