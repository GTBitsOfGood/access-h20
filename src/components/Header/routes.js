import urls from '../../../utils/urls'

const routes = [
  {
    name: 'Home',
    link: urls.pages.index,
    auth: false,
    atEnd: false
  },
  {
    name: 'Applicant View',
    link: urls.pages.applicants,
    auth: false,
    atEnd: false
  },
  {
    name: 'Info Submission',
    link: urls.pages.infosubmit,
    auth: false,
    atEnd: false
  },
  {
    name: 'Login',
    link: urls.pages.login,
    auth: false,
    atEnd: true
  },
  {
    name: 'App Home',
    link: urls.pages.app.home,
    auth: true
  }
]

export default routes
