'use client'
import React, { useState } from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import UserAvatar from '../UX/user-avatar/UserAvatar'
import { useSession } from 'next-auth/react'

import useSWR from 'swr'

const fetcher = async (url) => {
  const response = await fetch(url)
  const data = await response.json()

  if (!response.ok) {
    const error = new Error(data.message)
    throw error
  }
  return data
}

const Comments = ({ postSlug }) => {
  const { status } = useSession()

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  )

  console.log(status)

  const [desc, setDesc] = useState('')

  const handleSubmit = async () => {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ desc, postSlug }),
    })
    mutate()
    setDesc('')
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment"
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href={'/login'}>
          <div className={styles.login}>Login to Comment</div>
        </Link>
      )}

      <div className={styles.comments}>
        {isLoading
          ? 'Loading...'
          : data?.map((comment) => (
              <div className={styles.comment} key={comment.id}>
                <div className={styles.user}>
                  <UserAvatar
                    username={comment.user?.name}
                    userImg={comment?.user?.image}
                    date={comment?.createdAt}
                  />
                </div>
                <p className={styles.desc}>{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Comments
