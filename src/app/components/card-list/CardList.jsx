import React from 'react'
import styles from './cardlist.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'
import getData from '@/utils/getData'

// const getData = async (page, cat) => {
//   const res = await fetch(
//     `http://localhost:3000/api/posts?page=${page}&cat=${cat || ''}`,
//     {
//       cache: 'no-store',
//     }
//   )
//   if (!res.ok) {
//     throw new Error('Failed')
//   }
//   return res.json()
// }

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ''}`
  )

  const POST_PER_PAGE = 2

  const hasPrev = POST_PER_PAGE * (page - 1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}></div>
      {posts?.map((item) => {
        return <Card {...item} key={item.id} />
      })}
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList
