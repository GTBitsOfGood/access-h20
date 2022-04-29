import React from 'react'
import App, { AppContext } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import { getCurrentUser } from '../actions/User'
import urls from '../../utils/urls'
import RouteGuard from 'src/components/RouteGuard/RouteGuard'
import { CookieProvider } from 'src/contexts/CookieContext'

const MyApp = ({
  Component,
  pageProps,
  // currentUser = null
  cookies = null
}: PropTypes): JSX.Element => (
  <>
    <Head>
      <title>AccessH2O</title>
    </Head>
    <div>
      {/* <Header loggedIn={currentUser != null} currentRoute={router.asPath} /> */}
      <div>
        <CookieProvider>
          <RouteGuard cookies={cookies}>
            {/* <Component {...pageProps} currentUser={currentUser} /> */}
            <Component {...pageProps} />
          </RouteGuard>
        </CookieProvider>
      </div>
    </div>
  </>
)

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { res } = appContext.ctx

  const appProps = await App.getInitialProps(appContext)

  const cookies =
    appContext.ctx.req != null ? appContext.ctx.req.headers.cookie : null

  const route = appContext.ctx.asPath

  return {
    ...appProps,
    cookies: cookies
  }

  // return await getCurrentUser(cookies)
  //   // @ts-ignore
  //   .then((user) => {
  //     // console.log('cookies: ' + cookies)
  //     // if (route === '/login') {
  //     //   if (res != null) {
  //     //     res.writeHead(301, { Location: urls.pages.app.home })
  //     //     res.end()
  //     //   } else {
  //     //     return Router.replace(urls.pages.login)
  //     //   }
  //     // }
  //     return {
  //       ...appProps,
  //       currentUser: user
  //     }
  //   })
  //   // @ts-ignore
  //   .catch(() => {
  //     if (route?.startsWith('/test')) {
  //       if (res != null) {
  //         res.writeHead(301, { Location: urls.pages.index })
  //         res.end()
  //       } else {
  //         return Router.replace(urls.pages.index)
  //       }
  //     }

  //     return appProps
  //   })
}

interface PropTypes {
  Component: any
  pageProps: object
  router: object
  // currentUser: {
  //   id: string
  //   email: string
  // } | null
  cookies: string | null
}

export default MyApp
