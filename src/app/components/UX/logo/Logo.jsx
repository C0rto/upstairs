import React from 'react'
import styles from './logo.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={'/'} className={styles.logo}>
      <Image src="/logo.svg" alt="logo" height={50} width={50} />
      <h3 className={styles.logoTitle}>Upstairs</h3>
    </Link>
  )
}

export default Logo
