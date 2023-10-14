'use client'

import React from 'react'
import styles from './authlinks.module.css'
import Link from 'next/link'
import { useState } from 'react'

const AuthLinks = () => {
  const loggedIn = false

  const [open, setOpen] = useState(false)

  return (
    <>
      {loggedIn ? (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      ) : (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      )}
      <div className={styles.burger} onClick={() => setOpen((prev) => !prev)}>
        <div className={styles.line}> </div>
        <div className={styles.line}> </div>
        <div className={styles.line}> </div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {loggedIn ? (
            <>
              <Link href="/">Write</Link>
              <span className={styles.logoutStyle}>Logout</span>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
