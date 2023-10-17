import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.css'

const Card = ({ id, title, desc, catSlug, slug, img, CreatedAt }) => {
  return (
    <div className={styles.container} key={id}>
      {img && (
        <div className={styles.imageContainer}>
          <Image src={img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{CreatedAt.substring(0, 10)}</span>
          <span className={styles.category}>- {catSlug}</span>
        </div>
        <Link href={`/posts/${slug}`}>
          <h1>{title}</h1>
        </Link>
        <p>{desc.slice(0, 900) + '...'}</p>
        <div className={styles.desc} />
        <Link href={`/posts/${slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
