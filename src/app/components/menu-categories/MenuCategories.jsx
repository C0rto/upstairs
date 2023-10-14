import React from 'react'
import styles from './menucategories.module.css'
import Link from 'next/link'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.comedy}`}
      >
        Comedy
      </Link>
      <Link
        href="/blog"
        className={`${styles.categoryItem} ${styles.thriller}`}
      >
        Thriller
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.horror}`}>
        Horror
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.retro}`}>
        80s
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.musical}`}>
        Musical
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fantasy}`}>
        scifi
      </Link>
    </div>
  )
}

export default MenuCategories
