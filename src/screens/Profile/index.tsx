import { FormControl, FormLabel, TextField, FormHelperText, Button } from '@material-ui/core'
import React from 'react'
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.profileForm}>
      <FormControl>
        <div className={classes.formElem}>
          <FormLabel className={classes.formFont} htmlFor="company-input">Company Name</FormLabel>
          <div className={classes.textElem}>
            <TextField fullWidth id="company-input" variant="outlined" placeholder= "AccessH20"/>
          </div>
        </div>

        <div className={classes.formLine}>
          <div className={classes.formElem}>
            <FormLabel className={classes.formFont} htmlFor="email-input">Email Address</FormLabel>
            <div className={classes.textElem}>
              <TextField id="email-input" variant="outlined" placeholder= "info@accessh2o.org"/>
            </div>
          </div>
          <div className={classes.formElem}>
            <FormLabel className={classes.formFont} htmlFor="phone-input">Phone Number</FormLabel>
            <div className={classes.textElem}>
              <TextField id="phone-input" variant="outlined" placeholder= "(404)381-1045"/>
            </div>
          </div>
        </div>
        <div className={classes.formElem}>
          <FormLabel className={classes.formFont} htmlFor="property-input">Property Address</FormLabel>
          <div className={classes.textElem}>
            <TextField fullWidth id="property-input" variant="outlined" placeholder= "885 Woodstock Rd. #430-312"/>
          </div>
        </div>
        <div className={classes.formLine}>
          <div className={classes.formElem}>
            <FormLabel className={classes.formFont} htmlFor="city-input">City</FormLabel>
            <div className={classes.textElem}>
             <TextField id="city-input" variant="outlined" placeholder= "Roswell"/>
            </div>
          </div>
          <div className={classes.formElem}>
            <FormLabel className={classes.formFont} htmlFor="state-input">State</FormLabel>
            <div className={classes.textElem}>
              <TextField id="state-input" variant="outlined" placeholder= "Georgia"/>
            </div>
          </div>
          <div className={classes.formElem}>
            <FormLabel className={classes.formFont} htmlFor="zip-input">Zip</FormLabel>
            <div className={classes.textElem}>
             <TextField id="zip-input" variant="outlined" placeholder= "30075"/>
            </div>
          </div>
        </div>
        <div className={classes.formElem}>
          <FormLabel className={classes.formFont} htmlFor="notes-input">Notes (Optional)</FormLabel>
          <div className={classes.textElem}>
            <TextField id="notes-input" variant="outlined"/>
          </div>
        </div>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">Update</Button>
      </FormControl>
    </div>

  )
}

export default Profile
