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
    utilityapplicants: '/utilityapplicants',
    accessh20applicants: '/accessh20applicants',
    infosubmit: '/infosubmit',
    profile: '/profile',
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
      addClient: '/api/client/add',
      changeStatus: '/api/client/change-status'
    },
    notes: {
      testfunctiontwo: '/api/notes/exampletwo',
      add: '/api/notes/add'
    },
    info: {
      addInfo: '/api/InfoSubmission/add',
      getInfo: '/api/InfoSubmission/get-info',
      update: '/api/InfoSubmission/update'
    }
  }
}
