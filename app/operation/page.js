import Link from 'next/link'

export default function Operation() {
  return (
    <div>
      <h1>Операції</h1>
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
        <li>
          <Link href="/operation/abdominoplasty">Абдомінопластика</Link>
        </li>
        <li>
          <Link href="/operation/liposuction">
            Корекція контурів тіла - ліпоскульптури тіла
          </Link>
        </li>
      </ul>
    </div>
  )
}
