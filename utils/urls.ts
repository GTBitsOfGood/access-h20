export default {
  baseUrl: process.env.BASE_URL ?? 'http://localhost:3000',
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
    }
  }
}
