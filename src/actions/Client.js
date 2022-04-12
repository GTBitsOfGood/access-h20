import fetch from 'isomorphic-unfetch'
import urls from '../../utils/urls'

export const changeStatus = async (client) =>
  fetch(urls.baseUrl + urls.api.client.changeStatus, {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(client)
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API')
      }
      if (!json.success) {
        throw new Error(json.message)
      }
      return json.payload
    })

export const addClient = async (client) =>
  fetch(urls.baseUrl + urls.api.client.addClient, {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(client)
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API')
      }
      if (!json.success) {
        throw new Error(json.message)
      }
      return json.payload
    })

export const getUtility = async () =>
  fetch(urls.baseUrl + urls.pages.utilityapplicants, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API')
      }
      if (!json.success) {
        throw new Error(json.message)
      }
      return json.payload
    })

export const getAll = async (cookies) => {
  const conditionals = {}

  if (cookies != null) {
    conditionals.headers = {
      cookie: cookies
    }
  }

  return fetch(urls.baseUrl + urls.api.client.getAll, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'include',
    ...conditionals
  }).then((response) => {
    if (response.status === 401) {
      return []
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

export const getClient = async (accountId) =>
  fetch(urls.baseUrl + urls.api.client.getClient + '?accountId=' + accountId, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API')
      }

      if (!json.success) {
        throw new Error(json.message)
      }
      return json.payload
    })

export const getUtilityCompany = async () =>
  fetch(urls.baseUrl + urls.api.company.getCompany, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API')
      }
      if (!json.success) {
        throw new Error(json.message)
      }
      return json.payload
    })

export const removeClient = async (accountId) =>
  fetch(
    urls.baseUrl + urls.api.client.removeClient + '?accountId=' + accountId,
    {
      method: 'GET'
    }
  )
    .then((response) => response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API')
      }
      if (!json.success) {
        throw new Error(json.message)
      }
      return json.payload
    })

export const getUtilityApplicants = async (utilityCompany) => {
  return fetch(urls.baseUrl + urls.api.client.getUtilityApplicants, {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(utilityCompany)
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
}
