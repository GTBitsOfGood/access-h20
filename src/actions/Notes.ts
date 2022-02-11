import fetch from 'isomorphic-unfetch'
import { TestFunctionTwo } from 'src/pages/api/notes/exampletwo'
import urls from 'utils/urls'

export const testFunction2 = async (): Promise<string> =>
  await fetch(urls.baseUrl + urls.api.notes.testfunctiontwo, {
    method: 'get',
    mode: 'same-origin',
    credentials: 'include'
  })
    .then(async (r) => await r.json())
    .then((json: TestFunctionTwo) => {
      if (json === null) {
        throw new Error('could not connect to API')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })
