'use client'
// WRITE PAGE
import React from 'react'
import styles from './write.module.css'
import { useState, useEffect } from 'react'
import {
  AiOutlinePlus,
  AiFillPicture,
  AiFillEdit,
  AiFillVideoCamera,
} from 'react-icons/ai'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'
import { app } from '@/utils/firebase'

const storage = getStorage(app)

const WritePage = () => {
  const [open, setOpen] = useState(false)
  // states from text
  const [file, setFile] = useState(null)
  const [value, setValue] = useState('')
  const [media, setMedia] = useState('')
  const [title, setTitle] = useState('')
  const [catSlug, setCatSlug] = useState('')
  // constants
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name
      const storageRef = ref(storage, name)

      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL)
          })
        }
      )
    }
    file && upload()
  }, [file])

  if (status === 'loading') {
    return <div className="styles.loading">Loading...</div>
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')

  const handleSubmit = async () => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || 'comedy', //If not selected, choose the general category
      }),
    })

    if (res.status === 200) {
      const data = await res.json()
      router.push(`/posts/${data.slug}`)
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Category"
        className={styles.inputCat}
        onChange={(e) => setCatSlug(e.target.value)}
        value={catSlug}
      />
      <div className={styles.editor}>
        <button
          className={styles.button}
          onClick={() => setOpen((prev) => !prev)}
        >
          <AiOutlinePlus size={36} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: 'none' }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <AiFillPicture className={styles.icon} size={26} />
              </label>
            </button>
            <button className={styles.addButton}>
              <AiFillEdit className={styles.icon} size={26} />
            </button>
            <button className={styles.addButton}>
              <AiFillVideoCamera className={styles.icon} size={26} />
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
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  )
}

export default WritePage
