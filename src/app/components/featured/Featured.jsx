import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Tarantino is back!</b> new Movie inspired by
        drug pigeon
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/pulp.jpg" alt="movie" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum,
            repellendus.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            at perspiciatis similique minima quis adipisci amet cum ullam
            sapiente aliquid debitis sequi mollitia praesentium saepe iste nam
            sint placeat nisi sit eius culpa. Iste enim maiores distinctio
            perspiciatis, deleniti dolores sint illum, esse aperiam amet debitis
            velit tempora nisi facilis doloribus dolore. Facere vitae illo sunt
            quod quia blanditiis enim? Sequi facere eum eveniet dignissimos
            delectus dolor aliquid adipisci unde maiores exercitationem nisi
            dolorum ullam fuga beatae provident, minima eius laudantium eaque
            nemo quasi sunt! Dolorum, debitis enim id facere culpa commodi,
            voluptate, magni aliquid quia laudantium explicabo nobis ducimus
            repudiandae magnam accusamus voluptatem mollitia aliquam cum
            veritatis asperiores. Id maiores numquam officia.laudantium eaque
            nemo quasi sunt! Dolorum, debitis enim id facere culpa commodi,
            voluptate, magni aliquid quia laudantium explicabo nobis ducimus
            repudiandae magnam accusamus voluptatem mollitia aliquam cum
            veritatis asperiores. Id maiores numquam officia.laudantium eaque
            nemo quasi sunt! Dolorum, debitis enim id facere culpa commodi,
            voluptate, magni aliquid quia laudantium explicabo nobis ducimus
            repudiandae magnam accusamus voluptatem mollitia aliquam cum
            veritatis asperiores. Id maiores numquam officia.laudantium eaque
            nemo quasi sunt! Dolorum, debitis enim id facere culpa commodi,
            voluptate, magni aliquid quia laudantium explicabo nobis ducimus
            repudiandae magnam accusamus voluptatem mollitia aliquam cum
            veritatis asperiores. Id maiores numquam officia.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
