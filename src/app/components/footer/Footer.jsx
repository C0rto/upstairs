import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="upstairs" width={50} height={50} />
          <h1 className={styles.logoText}>Upstairs</h1>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className={styles.icons}>
          <FaFacebookF size={20} />
          <FaInstagram size={20} />
          <FaYoutube size={20} />
          <FaTiktok size={20} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Comedy</Link>
          <Link href="/">Thriller</Link>
          <Link href="/">Horror</Link>
          <Link href="/">Retro</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer