import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../UX/theme-toggle/ThemeToggle'
import AuthLinks from '../authlinks/AuthLinks'
import Logo from '../UX/logo/Logo'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
