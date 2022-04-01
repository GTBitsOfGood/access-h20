import { useState, createContext, ReactNode, ReactElement } from 'react'

export interface CookieContextType {
  cookie: any
  updateCookie: (cookie: string) => void
}

export const CookieContext = createContext<CookieContextType>({
  cookie: '',
  updateCookie: () => {}
})

interface Props {
  children: ReactNode
}

export const CookieProvider = ({ children }: Props): ReactElement => {
  const [cookie, setCookie] = useState('')

  const updateCookie = (ck: string): void => setCookie(ck)

  const value = {
    cookie: cookie,
    updateCookie: updateCookie
  }

  return (
    <CookieContext.Provider value={value}>{children}</CookieContext.Provider>
  )
}

// export const useAuth = (): CookieContextType =>
//   useContext<CookieContextType>(CookieContext)
