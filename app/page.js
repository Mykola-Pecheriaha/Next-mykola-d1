import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css' // Використовуємо вже існуючий файл стилів
import Breast from './components/Breast/Breast'
import Body from './components/Body/Body'
import GeneralSurg from './components/GeneralSurgery/GeneralSurgery'

export default function Home() {
  return (
    <div className={styles.breastContainer}>
      {/* Секція титульна */}
      <section className={styles.doctorProfile}>
        <div className={styles.info}>
          <h2>Лікар</h2>
          <h1>
            Печеряга Микола <br /> Миколайович
          </h1>
          <p>
            Практикуючий пластичний хірург <br /> з багаторічним досвідом
          </p>
          <ul>
            <li>​​Хірург вищої категорії</li>
            <li>​​29 років досвіду</li>
            <li>​​Більше 1200 проведених операцій</li>
            <li>​Член ВАПРЕХ і ОПРЕХ</li>​
          </ul>
          <Link href="/portfolio" className={styles.button}>
            Подробно
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            src="/doctor.jpg" // Шлях до зображення з папки public
            alt="Doctor"
            width={1350}
            height={1350}
            className={styles.doctorImage}
          />
        </div>
      </section>

      {/* Секція пластики грудей */}
      <section className={styles.breastSurgery}>
        <Breast /> {/* Додаємо компонент Breast */}
      </section>

      {/* секція - пластика тіла */}

      <section className={styles.bodySurgery}>
        <Body />
      </section>

      {/* секція - загальна хірургія */}

      <section className={styles.bodySurgery}>
        <GeneralSurg />
      </section>
    </div>
  )
}
