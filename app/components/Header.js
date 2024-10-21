import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <Image
          src="/logo2.jpg" // Шлях до зображення з папки public
          alt="Login"
          width={40}
          height={40}
          className={styles.logoImage}
        />
        <strong>PlasticP</strong>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/portfolio">Портфоліо</Link>
        <Link href="/consultation">Консультації</Link>
        <Link href="/manipulation">Маніпуляції</Link>
        <Link href="/operation">Оперції</Link>
      </nav>
    </header>
  )
}

export default Header
