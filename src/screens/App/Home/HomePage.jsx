import PropTypes from 'prop-types'
import Router from 'next/router'
import { getCurrentUser, logout } from '../../../actions/User'
import urls from '../../../../utils/urls'
import { useContext } from 'react'
import { CookieContext } from 'src/contexts/CookieContext'
import { getAll } from '../../../actions/Client'

const handleLogout = () =>
  logout()
    .then(() => {
      return Router.replace(urls.pages.login)
    })
    .catch(() => window.alert('An error occurred while trying to logout!'))

const handleGetCurrent = async (cookies) => {
  const res = await getCurrentUser(cookies)
  console.log(res)
}

const handleGetClients = async () => {
  const applicants = await getAll()
  console.log('HomePage, applicants: ', applicants)
}

const HomePage = ({ currentUser }) => {
  const cookieContext = useContext(CookieContext)
  return (
    <div>
      {/* <h2>Welcome to our app, {currentUser.email}!</h2> */}
      <h3>
        This page can only be accessed by logged-in users, because _app.js
        reroutes users who are not logged-in away from this page.
      </h3>
      <button
        type="button"
        onClick={() => handleGetCurrent(cookieContext.cookie)}
      >
        Get Current User
      </button>
      <button type="button" onClick={() => handleGetClients()}>
        Get Clients
      </button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

// HomePage.propTypes = {
//   currentUser: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired
//   }).isRequired
// }

HomePage.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.string,
    email: PropTypes.string
  })
}

export default HomePage
