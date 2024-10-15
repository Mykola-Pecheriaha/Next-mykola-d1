import Link from 'next/link'
import Image from 'next/image'
import styles from './Breast.module.css'

const Breast = () => {
  return (
    <div className={styles.breastContainer}>
      <div className={styles.image}>
        <Image
          src="/breast-surgery.jpg" // Зображення для пластики грудей (з папки public)
          alt="Breast Surgery"
          width={1350}
          height={1350}
          className={styles.breastImage}
        />
      </div>
      <div className={styles.info}>
        <h2>Пластика грудей</h2>
        <p>
          Для мене, як пластичного хірурга, це не просто операція – це втілення
          однієї мрії. Для мене дуже важливо, щоб ви отримали бажаний результат
          та, з професійної точки, максимально пропорційний вашому тілу розмір
          та форму грудей.
        </p>
        <ul>
          <li>
            <Link href="/operation/breast-augmentation">Збільшення грудей</Link>
          </li>
          <li>
            <Link href="/operation/breast-lift">Підтяжка грудей</Link>
          </li>
          <li>
            <Link href="/operation/gynecomastia">Видалення гінекомастії</Link>
          </li>
          <li>
            <Link href="/operation/removal-implants">
              Видалення та заміна грудних імплантів
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Breast
