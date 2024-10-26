'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={styles.header}>
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

      {/* Бургер-кнопка */}
      <button className={styles.burgerButton} onClick={toggleMenu}>
        ☰
      </button>

      {/* Меню навігації */}
      <nav className={`${styles.nav} ${menuOpen ? styles.show : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/portfolio">Портфоліо</Link>
        <Link href="/consultation">Консультації</Link>
        <Link href="/manipulation">Маніпуляції</Link>
        <Link href="/operation">Операції</Link>
      </nav>
    </header>
  )
}

export default Header
