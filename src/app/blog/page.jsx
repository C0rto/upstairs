// BLOG PAGE <----
import React from 'react'
import styles from './blogpage.module.css'
import CardList from '../components/card-list/CardList'
import Menu from '../components/menu/Menu'

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Horror Movies</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage
