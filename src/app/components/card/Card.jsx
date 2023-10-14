import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.css'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/pulp.jpg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11/10/2023</span>
          <span className={styles.category}>Thriller</span>
        </div>
        <Link href={`/`}>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            aliquam.
          </h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          perferendis libero qui, aliquid delectus asperiores dolore ex modi
          eveniet vero ipsa, quos, temporibus fugit recusandae! Hic maiores non
          consequatur vitae ducimus. Harum eos maiores alias doloribus sunt,
          dolorum amet magni...
        </p>
        <div className={styles.desc} />
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
