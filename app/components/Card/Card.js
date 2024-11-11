// components/Card.js
import Link from 'next/link'
import Image from 'next/image'
import styles from './Card.module.css'

export default function Card({ href, title, imageUrl }) {
  return (
    <Link href={href} passHref>
      <div className={styles.card}>
        <Image
          src={imageUrl}
          alt={title}
          width={150}
          height={100}
          className={styles.cardImage}
        />
        <h4 className={styles.cardTitle}>{title}</h4>
      </div>
    </Link>
  )
}
