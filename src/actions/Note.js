import fetch from 'isomorphic-unfetch'
import urls from '../../utils/urls'

export const addNote = async (Note) => fetch(urls.baseUrl + urls.api.notes.add, {
  method: 'POST',
  mode: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(Note)
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

export const getNote = async (accountId) => fetch(urls.baseUrl + urls.api.notes.getNote + '?accountId=' + accountId, {
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
