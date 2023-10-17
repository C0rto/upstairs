// BLOG PAGE <----
import React from 'react'
import styles from './blogpage.module.css'
import CardList from '../components/card-list/CardList'
import Menu from '../components/menu/Menu'

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1
  const { cat } = searchParams

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Movies</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage
