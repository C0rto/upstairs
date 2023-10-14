'use client'

import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({ children }) => {
  const { mode } = useContext(ThemeContext)
  // use this state to wait the component client
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    return <div className={mode}>{children}</div>
  }
}

export default ThemeProvider
