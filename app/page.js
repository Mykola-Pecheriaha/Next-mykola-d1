import Image from 'next/image'
// import doctor from '../public/doctor.jpg'
import Link from 'next/link'
import styles from './page.module.css' // Використовуємо вже існуючий файл стилів

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.doctorProfile}>
        <div className={styles.info}>
          <h2>Лікар</h2>
          <h1>
            Пeчеряга Микола <br /> Миколайович
          </h1>
          <p>
            Практикуючий пластичний хірург <br /> з багаторічним досвідом
          </p>
          <ul>
            <li>​​Хірург вищої категорії</li>
            <li>​​29 років досвіду</li>
            <li>​​Більше 1000 проведених операцій</li>
            <li>​Член ВАПРЕХ і ОПРЕХ</li>​
          </ul>
          <Link href="/doctor-portfolio" className={styles.button}>
            Подробно
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            src="/doctor.jpg" // Шлях до зображення з папки public
            alt="Doctor"
            width={1350} // Ширина зображення
            height={1350} // Висота зображення
            className={styles.doctorImage} // Додаємо клас для стилів (опціонально)
          />
        </div>
      </section>
    </div>
  )
}
