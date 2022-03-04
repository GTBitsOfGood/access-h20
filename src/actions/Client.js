import fetch from 'isomorphic-unfetch'
import urls from '../../utils/urls'

export const changeStatus = async (client) => fetch(urls.baseUrl + urls.api.client.changeStatus, {
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

export const addClient = async (client) => fetch(urls.baseUrl + urls.api.client.addClient, {
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

export const getAll = async () => fetch(urls.baseUrl + urls.api.client.getAll, {
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

export const getClient = async (accountId) => fetch(urls.baseUrl + urls.api.client.getClient + '?accountId=' + accountId, {
  method: 'GET'
}).then((response) => response.json()).then((json) => {
  if (json == null) {
    throw new Error('Could not connect to API')
  }

  if (!json.success) {
    throw new Error(json.message)
  }
  return json.payload
})
