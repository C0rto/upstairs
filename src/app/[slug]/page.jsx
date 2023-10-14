// SINGLE PAGE <-----
import React from 'react'
import styles from './singlepage.module.css'
import Menu from '../components/menu/Menu'
import Image from 'next/image'
import Comments from '../components/comments/Comments'
import UserAvatar from '../components/UX/user-avatar/UserAvatar'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, fugiat.
          </h1>
          <UserAvatar username={'Paolo Bolizzi'} />
        </div>
        <div className={styles.imageContainer}>
          <Image src={'/pulp.jpg'} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} />
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            commodi. Dicta cupiditate, aspernatur aut eligendi ad nemo eaque
            asperiores rem delectus molestias laudantium quas quos? Fugit libero
            odio delectus voluptatem aperiam optio reprehenderit iure quia eum
            sunt quae hic ratione molestiae ipsa laboriosam dolores ad
            quibusdam, molestias impedit soluta. Ab eos, nam, dolore obcaecati
            magni delectus voluptas magnam, corrupti ex nisi eveniet deleniti
            quam pariatur reprehenderit mollitia fugit recusandae ipsa omnis
            suscipit expedita nulla? Cupiditate quia quo totam necessitatibus
            fugiat dolores ipsa illo iure, alias maiores tempora. Dolorum
            perferendis nostrum sunt ea facilis nulla labore, reprehenderit
            voluptatum, ab enim dicta aspernatur natus atque sint eos pariatur
            corrupti vero adipisci numquam cumque aliquam similique velit iste.
            Laborum amet consequuntur quaerat expedita? Sit fuga laboriosam
            accusamus libero ab placeat pariatur atque amet laborum asperiores
            magni eos ipsum ratione vel nisi ea minus et omnis voluptate nam,
            sequi fugiat mollitia molestiae? Earum dolor sed optio eveniet porro
            perferendis numquam velit repellat ratione qui inventore quaerat
            nulla saepe dolorum facere distinctio ut, suscipit est minima
            possimus quo incidunt accusamus ipsam. Quod tenetur blanditiis
            minima eveniet esse rerum ullam magnam placeat consequuntur
            cupiditate ratione ipsa quidem, vel repudiandae harum facilis!
            Veritatis pariatur facere iste quasi sequi est impedit facilis
            nesciunt! Deleniti, sunt doloremque! Provident, aut! Explicabo
            provident modi accusantium assumenda perferendis nesciunt iure velit
            deleniti delectus autem beatae, qui natus dolore molestiae facilis,
            laborum minus dolores! At ut eligendi sequi. Dolor consectetur eius
            molestiae temporibus ut, consequuntur sapiente laudantium
            perferendis asperiores exercitationem rem vel magni neque saepe,
            blanditiis nostrum suscipit necessitatibus, culpa dolore quod itaque
            ipsam quos! Veniam ea, ducimus similique aspernatur quis excepturi
            consequuntur aliquam asperiores dolorum dolorem nemo quia adipisci
            recusandae? Minus, modi consequatur dolorum sit praesentium velit
            est ducimus obcaecati aut eos aliquam ad cumque tempora non labore
            voluptates esse, voluptatibus ab.
          </p>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage
