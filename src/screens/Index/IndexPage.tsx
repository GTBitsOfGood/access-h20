import React from 'react'
import Header from '../../components/Header'
import { useRouter } from 'next/router'

const IndexPage = (props: { currentUser: any }): JSX.Element => {
  const router = useRouter()

  return (
    <Header loggedIn={props.currentUser != null} currentRoute={router.asPath} />
  )
}

export default IndexPage
