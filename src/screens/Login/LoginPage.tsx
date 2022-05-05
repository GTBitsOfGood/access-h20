/* eslint-disable @typescript-eslint/no-misused-promises, @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-floating-promises */

import React, { useEffect, useState, useContext } from 'react'
import Router from 'next/router'
import { login, getCurrentUser } from '../../actions/User'
import urls from '../../../utils/urls'
import classes from './LoginPage.module.css'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import { OutlinedInput } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { CookieContext } from '../../contexts/CookieContext'

const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const cookieContext = useContext(CookieContext)

  const handleClickShowPassword = (): void => setShowPassword(!showPassword)
  const handleMouseDownPassword = (): void => setShowPassword(!showPassword)

  const redirect = (): void => {
    if (cookieContext.cookie) {
      getCurrentUser(cookieContext.cookie).then((user) => {
        if (user) {
          if (!user.isUtilityCompany) {
            Router.push(urls.pages.accessh2oView.applicants)
          } else {
            Router.push(urls.pages.utilityView.applicants)
          }
        }
      })
    }
  }

  useEffect(() => {
    redirect()
  }, [])

  const handleSubmit = (event: { preventDefault: () => void }): any => {
    event.preventDefault()

    // if (isRegistering) {
    //   return await signUp(email, password)
    //     .then(async () => await Router.replace(urls.pages.index))
    //     .catch((error) => window.alert(error.message))
    // }

    return (
      login(email, password)
        .then(() => window.location.reload())
        .catch((error) => window.alert(error.message))
    )
  }

  return (
    <div className={classes.root}>
      <div className={classes.logo} />
      <form className={classes.form} onSubmit={handleSubmit}>
        <h2 className={classes.welcomeText}>Welcome!</h2>
        <h3 className={classes.infoText}>
            Login to an existing account.
        </h3>
        <div className={classes.inputContainer}>
          <label htmlFor="email" className={classes.inputLabel}>
            Email
          </label>
          <TextField
            className={classes.input}
            required
            variant="outlined"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className={classes.inputContainer}>
          <label htmlFor="password" className={classes.inputLabel}>
            Password
          </label>
          <OutlinedInput
            className={classes.input}
            required
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <button className={classes.bttn} type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage
