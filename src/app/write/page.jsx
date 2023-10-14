'use client'

import React from 'react'
import styles from './write.module.css'
import { useState } from 'react'
import {
  AiOutlinePlus,
  AiFillPicture,
  AiFillEdit,
  AiFillVideoCamera,
} from 'react-icons/ai'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

const WritePage = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button
          className={styles.button}
          onClick={() => setOpen((prev) => !prev)}
        >
          <AiOutlinePlus size={36} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <AiFillEdit className={styles.icon} />
            </button>
            <button className={styles.addButton}>
              <AiFillPicture className={styles.icon} />
            </button>
            <button className={styles.addButton}>
              <AiFillVideoCamera className={styles.icon} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="tell your story"
          color="white"
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default WritePage