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
  console.log("NOOOO");

  const appProps = await App.getInitialProps(appContext)

  const cookies =
    appContext.ctx.req != null ? appContext.ctx.req.headers.cookie : null

  const route = appContext.ctx.asPath

  return {
    ...appProps,
    cookies: cookies
  }
}

interface PropTypes {
  Component: any
  pageProps: object
  router: object
  cookies: string | null
}

export default MyApp
