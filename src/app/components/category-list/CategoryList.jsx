import React from 'react'
import styles from './categorylist.module.css'
import Link from 'next/link'
import Image from 'next/image'

import getData from '@/utils/getData'

// const getData = async () => {
//   const res = await fetch('http://localhost:3000/api/categories', {
//     cache: 'no-store',
//   })
//   if (!res.ok) {
//     throw new Error('Failed')
//   }
//   return res.json()
// }

const CategoryList = async () => {
  const data = await getData('http://localhost:3000/api/categories')

  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            className={`${styles.category} ${styles.main}`}
            key={item.id}
          >
            {item.img && (
              <Image
                src={item.img}
                height={20}
                width={20}
                alt={item.slug}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
