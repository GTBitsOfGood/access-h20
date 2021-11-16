import * as React from 'react'
import Button from '@material-ui/core/Button'
import classes from './AccountCreationModal.module.css'
import TextField from '@material-ui/core/TextField'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { IconButton, InputAdornment } from '@material-ui/core'

interface PropTypes {
  shouldShowModal: boolean
  onClose: () => void
}

export const AccountCreationModal = ({ shouldShowModal, onClose }: PropTypes): JSX.Element => {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <Modal open={shouldShowModal} onClose={onClose} className={classes.modal}>
        <div className={classes.modalwrapper}>
          <div className={classes.modalheader}>
            <h3>Account Creation</h3>
            <span onClick={onClose} className={classes.closemodalbtn}>
              &times;
            </span>
          </div>
          <div className={classes.modalcontent}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              InputProps={{className: classes.modalInput}}
            />
            <TextField
              id="utility-company"
              label="Utility Company"
              variant="outlined"
              size="small"
              InputProps={{className: classes.modalInput}}
            />
            <TextField
              id="password"
              label="Password"
              type={values.showPassword ? 'text' : 'password'}
              variant="outlined"
              size="small"
              InputProps={{
                className: classes.modalInput,
                endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }}
            />
          </div>
          <div className={classes.modalfooter}>
            <Button onClick={onClose} className={classes.submit} style={{backgroundColor: "#4DBAEA"}}>
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
