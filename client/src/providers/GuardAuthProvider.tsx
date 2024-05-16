import { jwtDecode } from 'jwt-decode'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type GuardAuthType = {
  isAuthenticated: boolean,
  login: (token: string) => void,
  logout: () => void
}

const GuardAuthContext = createContext<GuardAuthType | undefined>(undefined)

const GuardAuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      try {
        const decoded = jwtDecode(token)
        const currentTime = Date.now() / 1000

        if(decoded.exp > currentTime)
            setIsAuthenticated(true)
        else{
          navigate('/auth')
          localStorage.removeItem('token')
        }
      } catch (error) {
        console.error(error);
        navigate('/auth')
        localStorage.removeItem('token')
      }
    }
  }, [])

  const login = (token: string) => {
    localStorage.setItem('token', token)
    setIsAuthenticated(true)
    setTimeout(() => {
      navigate('/home')
    }, 1000)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    navigate('/auth')
  }

  return (
    <GuardAuthContext.Provider value={{isAuthenticated, login, logout}}>
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
