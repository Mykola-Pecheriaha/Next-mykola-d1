// components/Operation.js
import styles from './Oper.module.css'
import Card from '../Card/Card'
import Link from 'next/link'

export default function Oper() {
  const breastOperations = [
    {
      href: '/operation/breast-augmentation',
      title: 'Збільшення грудей',
      imageUrl: '/Augmentation.jpg',
    },
    // {
    //   href: '/operation/breast-lift',
    //   title: 'Підтяжка грудей',
    //   imageUrl: '/images/breast-lift.jpg',
    // },
    {
      href: '/operation/gynecomastia',
      title: 'Видалення гінекомастії',
      imageUrl: '/ginecomas1.jpg',
    },
    {
      href: '/operation/removal-implants',
      title: 'Видалення та заміна грудних імплантів',
      imageUrl: '/removalInfo23.jpg',
    },
  ]

  const bodyOperations = [
    {
      href: '/operation/abdominoplasty',
      title: 'Абдомінопластика',
      imageUrl: '/abdomino.png',
    },
    {
      href: '/operation/liposuction',
      title: 'Ліпоскульптури тіла',
      imageUrl: '/bodiContur4.jpg',
    },
  ]

  const generalSurgery = [
    {
      href: '/operation/herniotomy',
      title: 'Грижесічення',
      imageUrl: '/Tors.jpg',
    },
    {
      href: '/operation/carpalis-syndrom',
      title: 'Карпальний синдром',
      imageUrl: '/carp4.jpg',
    },
  ]

  return (
    <div className={styles.operContainer}>
      <h1 className={styles.mainTitle}>Операції</h1>

      <h3 className={styles.sectionTitle}>Операції на молочні залозі</h3>
      <div className={styles.cardContainer}>
        {breastOperations.map((operation) => (
          <Card
            key={operation.href}
            href={operation.href}
            title={operation.title}
            imageUrl={operation.imageUrl}
          />
        ))}
      </div>

      <h3 className={styles.sectionTitle}>Корекція тулуба</h3>
      <div className={styles.cardContainer}>
        {bodyOperations.map((operation) => (
          <Card
            key={operation.href}
            href={operation.href}
            title={operation.title}
            imageUrl={operation.imageUrl}
          />
        ))}
      </div>

      <h3 className={styles.sectionTitle}>Загальна хірургія</h3>
      <div className={styles.cardContainer}>
        {generalSurgery.map((operation) => (
          <Card
            key={operation.href}
            href={operation.href}
            title={operation.title}
            imageUrl={operation.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
