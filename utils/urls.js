function getBaseURL () {
  // if backend
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  // if client-side
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }
  return 'http://localhost:3000'
}

export default {
  baseUrl: getBaseURL(),
  dbUrl: process.env.MONGO_DB ?? 'mongodb://localhost:27017',
  pages: {
    index: '/',
    applicants: '/applicants',
    infosubmit: '/infosubmit',
    editform: '/editform',
    login: '/login',
    app: {
      home: '/app'
    }
  },
  api: {
    example: '/api/example',
    user: {
      signUp: '/api/user/sign-up',
      update: '/api/user/update',
      login: '/api/user/login',
      logout: '/api/user/logout',
      getCurrent: '/api/user/get-current'
    },
    company: {
      addCompany: '/api/company/add',
      getCompany: '/api/company/get-company',
      update: '/api/company/update'
    },
    client: {
      getClient: '/api/client/get-client',
      getAll: '/api/client/get-all',
      addClient: '/api/client/add'
    },
    notes: {
      testfunctiontwo: '/api/notes/exampletwo'
    },
    formQuestions: {
      addEligibilityQuestion: '/api/form/addEligibilityQuestion',
      addDocumentQuestion: '/api/form/addDocumentQuestion',
      addOtherQuestion: '/api/form/addOtherQuestion',
      getEligibilityQuestions: '/api/form/getEligibilityQuestions',
      getDocumentQuestions: '/api/form/getDocumentQuestions',
      getOtherQuestions: '/api/form/getOtherQuestions',
      editEligibilityQuestion: '/api/form/editEligibilityQuestion',
      editDocumentQuestion: '/api/form/editDocumentQuestion',
      editOtherQuestion: '/api/form/editOtherQuestion',
      removeEligibilityQuestion: '/api/form/removeEligibilityQuestion',
      removeDocumentQuestion: '/api/form/removeDocumentQuestion',
      removeOtherQuestion: '/api/form/removeOtherQuestion'
    }
  }
}
