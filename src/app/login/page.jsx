'use client'

import React from 'react'
import styles from './loginpage.module.css'
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa6'
import { useSession, signIn } from 'next-auth/react'

const LoginPage = () => {
  const { data, status } = useSession()

  console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>
          Sign in with Google
          <FaGoogle />
        </div>
        <div className={styles.socialButton}>
          Sign in with Github
          <FaGithub />
        </div>
        <div className={styles.socialButton}>
          Sign in with Facebook
          <FaFacebook />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
