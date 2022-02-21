export default {
  baseUrl: process.env.BASE_URL ?? 'http://localhost:3000',
  dbUrl: process.env.MONGO_DB ?? 'mongodb://localhost:27017',
  pages: {
    index: '/',
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
    }
  }
}
