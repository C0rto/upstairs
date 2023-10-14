import React from 'react'
import styles from './categorylist.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <div className={styles.categories}>
        {/* Single Cat */}
        <Link
          href="/blog?cat=comedy"
          className={`${styles.category} ${styles.comedy}`}
        >
          <Image
            src={'/family.png'}
            height={30}
            width={30}
            alt="comedy"
            className={styles.image}
          />
          comedy
        </Link>
        {/* Single Cat */}
        <Link
          href="/blog?cat=thriller"
          className={`${styles.category} ${styles.thriller}`}
        >
          <Image
            src={'/thriller.png'}
            height={30}
            width={30}
            alt="thriller"
            className={styles.image}
          />
          thriller
        </Link>
        {/* Single Cat */}
        <Link
          href="/blog?cat=horror"
          className={`${styles.category} ${styles.horror}`}
        >
          <Image
            src={'/horror.png'}
            height={30}
            width={30}
            alt="horror"
            className={styles.image}
          />
          horror
        </Link>
        {/* Single Cat */}
        <Link
          href="/blog?cat=fantasy"
          className={`${styles.category} ${styles.retro}`}
        >
          <Image
            src={'/80s.png'}
            height={30}
            width={30}
            alt="fantasy"
            className={styles.image}
          />
          80s
        </Link>
        {/* Single Cat */}
        <Link
          href="/blog?cat=musical"
          className={`${styles.category} ${styles.musical}`}
        >
          <Image
            src={'/musical.png'}
            height={30}
            width={30}
            alt="musical"
            className={styles.image}
          />
          musical
        </Link>

        {/* Single Cat */}
        <Link
          href="/blog?cat=comedy"
          className={`${styles.category} ${styles.fantasy}`}
        >
          <Image
            src={'/disney.png'}
            height={30}
            width={30}
            alt="comedy"
            className={styles.image}
          />
          Scifi
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
