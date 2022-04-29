import urls from '../../../utils/urls'

const routes = [
  {
    name: 'Home',
    link: urls.pages.index,
    auth: false,
    atEnd: false
  },
  {
    name: 'AccessH20 View',
    link: urls.pages.accessh2oView.applicants,
    auth: false,
    atEnd: false
  },
  {
    name: 'Utility View',
    link: urls.pages.utilityView.applicants,
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
