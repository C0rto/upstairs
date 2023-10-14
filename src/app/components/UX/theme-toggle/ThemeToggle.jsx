'use client'

import React, { useContext } from 'react'
import styles from './themetoggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'
import { WiDaySunny, WiMoonFull } from 'react-icons/wi'
import { BiSun, BiMoon } from 'react-icons/bi'

const ThemeToggle = () => {
  const { mode, toggle } = useContext(ThemeContext)

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        mode === 'dark'
          ? { backgroundColor: '#f8f8f8' }
          : { backgroundColor: '#0f172a' }
      }
    >
      <BiSun style={{ marginLeft: 5 }} size={12} className={styles.sun} />

      <div
        className={
          mode === 'dark'
            ? `${styles.circle} ${styles.dark}`
            : `${styles.circle} ${styles.light}`
        }
      ></div>
      <BiMoon style={{ marginRight: 5 }} size={12} className={styles.moon} />
    </div>
  )
}

export default ThemeToggle
