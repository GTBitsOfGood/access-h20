import fetch from 'isomorphic-unfetch'
import urls from '../../utils/urls'

export const addCompany = async (company) => fetch(urls.baseUrl + urls.api.company.addCompany, {
  method: 'POST',
  mode: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(company)
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

export const getCompany = async (accountId) => fetch(urls.baseUrl + urls.api.company.getCompany + '?accountId=' + accountId, {
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

export const update = async (updatedCompany) => fetch(urls.baseUrl + urls.api.company.update, {
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
