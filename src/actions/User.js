import fetch from 'isomorphic-unfetch'
import urls from '../../utils/urls'
// import { useAuth } from '../contexts/AuthContext'

// const authContext = useAuth()

export const signUp = (email, password, utilityCompanyName) =>
  fetch(urls.baseUrl + urls.api.user.signUp, {
    method: 'post',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
      utilityCompanyName
    })
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (!json.success) {
        throw new Error(json.message)
      }

      // authContext.updateToken(json.payload)
      return json.payload
    })

export const updateUser = (updatedUser) =>
  fetch(urls.baseUrl + urls.api.user.update, {
    method: 'put',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUser)
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (!json.success) {
        throw new Error(json.message)
      }
      return json.payload
    })

export const login = (email, password) =>
  fetch(urls.baseUrl + urls.api.user.login, {
    method: 'POST',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (!json.success) {
        throw new Error(json.message)
      }

      // authContext.updateToken(json.payload)
      return json.payload
    })

export const logout = () =>
  fetch(urls.baseUrl + urls.api.user.logout, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'include'
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      }

      // authContext.updateToken('')
      return json.success
    })

export const getCurrentUser = (cookies) => {
  const conditionals = {}

  if (cookies != null) {
    conditionals.headers = {
      cookie: cookies
    }
  }

  return fetch(urls.baseUrl + urls.api.user.getCurrent, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'include',
    ...conditionals
  }).then((response) => {
    if (response.status === 401) {
      return null
    }
    return response.json().then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API')
      }
      if (!json.success) {
        throw new Error(json.message)
      }
      return json.payload
    })
  })
}
