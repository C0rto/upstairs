import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
import UserAvatar from '../UX/user-avatar/UserAvatar'

const Comments = () => {
  const status = true

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment" className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href={'/login'}>Login to Comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <UserAvatar username={'Luigi'} />
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            inventore omnis unde sapiente, quae, sint ea placeat repellendus
            quidem laudantium esse fuga illo eaque, a quo odio alias voluptate
            dolorem temporibus. Veniam amet autem mollitia ea modi vitae
            obcaecati fuga molestias atque minima.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comments
