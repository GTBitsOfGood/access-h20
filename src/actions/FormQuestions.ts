import fetch from 'isomorphic-unfetch'
import { eligibilityQuestion } from 'server/models/EligibilityQuestion'
import { documentQuestion } from 'server/models/DocumentQuestion'
import { otherQuestion } from 'server/models/OtherQuestion'
import urls from 'utils/urls'
import { Types } from 'mongoose'

export const addEligibilityQuestion = async (question: eligibilityQuestion): Promise<eligibilityQuestion> =>
  await fetch(urls.baseUrl + urls.api.formQuestions.addEligibilityQuestion, {
    method: 'POST',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: question.title,
      question: question.question
    })
  })
    .then(async (response) => await response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })

export const addDocumentQuestion = async (question: documentQuestion): Promise<documentQuestion> =>
  await fetch(urls.baseUrl + urls.api.formQuestions.addDocumentQuestion, {
    method: 'POST',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: question.title,
      description: question.description
    })
  })
    .then(async (response) => await response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })

export const addOtherQuestion = async (question: otherQuestion): Promise<otherQuestion> =>
  await fetch(urls.baseUrl + urls.api.formQuestions.addOtherQuestion, {
    method: 'POST',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      question: question.question
    })
  })
    .then(async (response) => await response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })

export const getEligibilityQuestions = async (): Promise<eligibilityQuestion[]> =>
  await fetch(urls.baseUrl + urls.api.formQuestions.getEligibilityQuestions, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'include'
  })
    .then(async (response) => await response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })

export const getDocumentQuestions = async (): Promise<documentQuestion[]> =>
  await fetch(urls.baseUrl + urls.api.formQuestions.getDocumentQuestions, {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'include'
  })
    .then(async (response) => await response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })

export const getOtherQuestions = async (): Promise<otherQuestion[]> =>
  await fetch(urls.baseUrl + urls.api.formQuestions.getOtherQuestions, {
    method: 'POST',
    mode: 'same-origin',
    credentials: 'include'
  })
    .then(async (response) => await response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })

export const editEligibilityQuestion = async (questionId: Types.ObjectId, question: eligibilityQuestion): Promise<eligibilityQuestion> =>
  await fetch(urls.baseUrl + urls.api.formQuestions.editEligibilityQuestion, {
    method: 'PUT',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      questionId,
      question
    })
  })
    .then(async (response) => await response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })

export const editDocumentQuestion = async (questionId: Types.ObjectId, question: documentQuestion): Promise<documentQuestion> =>
  await fetch(urls.baseUrl + urls.api.formQuestions.editDocumentQuestion, {
    method: 'PUT',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      questionId,
      question
    })
  })
    .then(async (response) => await response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })

export const editOtherQuestion = async (questionId: Types.ObjectId, question: otherQuestion): Promise<otherQuestion> =>
  await fetch(urls.baseUrl + urls.api.formQuestions.editOtherQuestion, {
    method: 'PUT',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      questionId,
      question
    })
  })
    .then(async (response) => await response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })

export const removeEligibilityQuestion = async (questionId: Types.ObjectId): Promise<void> =>
  await fetch(urls.baseUrl + urls.api.formQuestions.removeEligibilityQuestion, {
    method: 'DELETE',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _id: questionId
    })
  })
    .then(async (response) => await response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })

export const removeDocumentQuestion = async (questionId: Types.ObjectId): Promise<void> =>
  await fetch(urls.baseUrl + urls.api.formQuestions.removeDocumentQuestion, {
    method: 'DELETE',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _id: questionId
    })
  })
    .then(async (response) => await response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })

export const removeOtherQuestion = async (questionId: Types.ObjectId): Promise<void> =>
  await fetch(urls.baseUrl + urls.api.formQuestions.removeOtherQuestion, {
    method: 'DELETE',
    mode: 'same-origin',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _id: questionId
    })
  })
    .then(async (response) => await response.json())
    .then((json) => {
      if (json == null) {
        throw new Error('Could not connect to API!')
      } else if (json.success === false) {
        throw new Error(json.message)
      }
      if (json.payload === undefined) {
        return ''
      }
      return json.payload
    })
