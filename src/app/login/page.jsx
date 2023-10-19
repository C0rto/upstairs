'use client'

// LOGIN PAGE
import styles from './loginpage.module.css'
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa6'
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const LoginPage = () => {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [status])

  if (status === 'loading') {
    return <div className="styles.loading">Loading...</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.socialButton}
          onClick={() => {
            signIn('google')
          }}
        >
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
