import { jwtDecode } from 'jwt-decode'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logout, selectToken } from '../../app/slicers/userSlice'

type GuardType = {
  isAuthentication: boolean,
  logOut: () => void
}

const GuardAuthContext = createContext<GuardType | undefined>(undefined)

const GuardAuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isAuthentication, setIsAuthentication] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const token = useAppSelector(selectToken)
  
  useEffect(() => {
    if(token){
      try {
        const decoded = jwtDecode(token)
        const currentTime = Date.now() / 1000

        if(decoded.exp > currentTime)
          setIsAuthentication(true)
        else{
          setIsAuthentication(false)
          dispatch(logout())
        }
      } catch (error) {
        setIsAuthentication(false)
        dispatch(logout())
      }
    } 
  }, [token])

  const logOut = () => {
    setIsAuthentication(false)
    dispatch(logout())
  }

  return (
    <GuardAuthContext.Provider value={{ isAuthentication, logOut }}>
      {children}
    </GuardAuthContext.Provider>
  )
}
const useGuardAuth = () => {
  const context = useContext(GuardAuthContext)
  if(context === undefined)
    throw new Error('useGuardAuth must be used within a GuardAuthProvider')

  return context
}

export { GuardAuthProvider, useGuardAuth }
