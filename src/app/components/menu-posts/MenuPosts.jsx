import React from 'react'
import styles from './menuposts.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/pulp.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.comedy}`}>comedy</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/pulp.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.thriller}`}>
            thriller
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/pulp.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.musical}`}>
            musical
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/pulp.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.retro}`}>80s</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MenuPosts
