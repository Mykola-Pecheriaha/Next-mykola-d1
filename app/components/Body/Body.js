import Link from 'next/link'
import Image from 'next/image'

import styles from './Body.module.css'

const Body = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.info}>
        <h2>Пластика тіла</h2>
        <p>
          Пластична хірургія тіла включає різні види процедур, що допомагають
          коригувати контури тіла, покращити зовнішній вигляд та підвищити
          впевненість.
        </p>
        <ul>
          <li>
            <Link href="/operation/abdominoplasty">Абдомінопластика</Link>
          </li>

          <li>
            <Link href="/operation/liposuction">Ліпосакція</Link>
          </li>
        </ul>
      </div>
      <div className={styles.image}>
        <Image
          src="/bodi1.jpg" // Зображення для пластики грудей (з папки public)
          alt="Breast Surgery"
          width={1350}
          height={1350}
          className={styles.bodyImage}
        />
      </div>
    </div>
  )
}

export default Body
