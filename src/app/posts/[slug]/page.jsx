// SINGLE PAGE <-----
import React from 'react'
import styles from './singlepage.module.css'
import Menu from '../../components/menu/Menu'
import Image from 'next/image'
import Comments from '../../components/comments/Comments'
import UserAvatar from '../../components/UX/user-avatar/UserAvatar'
import getData from '@/utils/getData'

// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//     cache: 'no-store',
//   })
//   if (!res.ok) {
//     throw new Error('Failed')
//   }
//   return res.json()
// }

const SinglePage = async ({ params }) => {
  const { slug } = params

  const data = await getData(`http://localhost:3000/api/posts/${slug}`)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <UserAvatar
            date={data?.CreatedAt}
            username={data?.user.name}
            userImg={data?.user.image}
          />
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} />
          <p
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
