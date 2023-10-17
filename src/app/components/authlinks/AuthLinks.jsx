'use client'

import React from 'react'
import styles from './authlinks.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'

const AuthLinks = () => {
  const { data } = useSession()
  const [open, setOpen] = useState(false)

  return (
    <>
      {data?.user ? (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
            Logout
          </span>
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
          {data?.user ? (
            <>
              <Link href="/">Write</Link>
              <span className={styles.logoutStyle} onClick={signOut}>
                Logout
              </span>
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
