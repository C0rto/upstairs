'use client'

import { createContext, useEffect } from 'react'
import { useState } from 'react'
import choseMode from '@/utils/choseMode'

export const ThemeContext = createContext()

// taking the time
const hour = choseMode()

const getFromLocalStorage = () => {
  // the component starts as server so there is no window and no property of localStorage at beginning, so when the transition to a client side component is completed use the localStorage method on window
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem('mode')
    return value || hour
  }
}

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => getFromLocalStorage())

  const toggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    localStorage.setItem('mode', mode)
  }, [mode])

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
