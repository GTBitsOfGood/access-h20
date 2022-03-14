import { useState, useEffect, useContext } from 'react'
import Router, { useRouter } from 'next/router'
import { CookieContext } from 'src/contexts/CookieContext'
import urls from '../../../utils/urls'

function RouteGuard({ children, cookies }) {
  const router = useRouter()
  const cookieContext = useContext(CookieContext)

  cookieContext.updateCookie(cookies)
  console.log('cookies: ' + cookies + ', path: ' + router.asPath)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    authCheck(router.asPath, cookies)

    const hideContent = () => setAuthorized(false)
    router.events.on('routeChangeStart', hideContent)
    router.events.on('routeChangeComplete', authCheck)

    return () => {
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }
  }, [])

  function authCheck(url, cks) {
    const publicPaths = [urls.pages.login]
    const path = url.split('?')[0]

    // console.log('returnUrl param:', router.asPath)

    if (cks === null && !publicPaths.includes(path)) {
      setAuthorized(false)
      router.replace({
        pathname: urls.pages.login,
        query: { returnUrl: router.pathname }
      })
      console.log('Hello world 2')
    } else {
      setAuthorized(true)
    }
  }

  return authorized && children
}

RouteGuard.getInitialProps = async ({ children, cookies }) => {
  Router.reload()
  return { children, cookies }
}

export default RouteGuard
