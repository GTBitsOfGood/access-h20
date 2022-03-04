import fetch from 'isomorphic-unfetch'
import urls from '../../utils/urls'

export const addInfo = async (client) => fetch(urls.baseUrl + urls.api.info.addInfo, {
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

export const getInfo = async (accountId) => fetch(urls.baseUrl + urls.api.info.getInfo + '?accountId=' + accountId, {
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

export const update = async (updatedCompany) => fetch(urls.baseUrl + urls.api.info.update, {
  method: 'POST',
  mode: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedCompany)
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
