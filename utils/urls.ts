export default {
  baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
  dbUrl: process.env.MONGO_DB ?? "mongodb://localhost:27017",
  pages: {
    index: "/",
    applicants: "/applicants",
    infosubmit: "/infosubmit",
    login: "/login",
    app: {
      home: "/app",
      editInfoSubmission: "/app/editInfoSubmission",
    },
  },
  api: {
    example: "/api/example",
    user: {
      signUp: "/api/user/sign-up",
      login: "/api/user/login",
      logout: "/api/user/logout",
      getCurrent: "/api/user/get-current",
    },
  },
};
