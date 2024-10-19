import Link from 'next/link'
import Image from 'next/image'

import styles from './GeneralSurgery.module.css'

const GeneralSurgery = () => {
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.image}>
        <Image
          src="/gernio.jpg" // Зображення для пластики грудей (з папки public)
          alt="Breast Surgery"
          width={1350}
          height={1350}
          className={styles.bodyImage}
        />
      </div>
      <div className={styles.info}>
        <h2>Загальна хірургія</h2>
        <p>
          Пластична хірургія тіла включає різні види процедур, що допомагають
          коригувати контури тіла, покращити зовнішній вигляд та підвищити
          впевненість.
        </p>
        <ul>
          <li>
            <Link href="/operation/herniotomy">Операції при грижах</Link>
          </li>

          <li>
            <Link href="/operation/liposuction">Ліпосакція</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default GeneralSurgery
