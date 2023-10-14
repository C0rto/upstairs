import React from 'react'
import Image from 'next/image'
import styles from './useravatar.module.css'

const UserAvatar = ({ username, userImg, date }) => {
  return (
    <div className={styles.user}>
      <div className={styles.userImageContainer}>
        <Image src={'/p1.jpeg'} alt="" fill className={styles.avatar} />
      </div>

      <div className={styles.userTextContainer}>
        <span className={styles.username}>{username}</span>
        <span className={styles.date}>01.01.2024</span>
      </div>
    </div>
  )
}

export default UserAvatar
