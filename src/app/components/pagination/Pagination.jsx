'use client'
import React from 'react'
import styles from './pagination.module.css'
import { useRouter } from 'next/router'

const Pagination = ({ page, hasPrev, hasNext }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        // onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        // onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
