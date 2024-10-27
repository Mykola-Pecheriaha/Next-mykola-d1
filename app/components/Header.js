'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/logo2.jpg"
          alt="Logo"
          width={40}
          height={40}
          className={styles.logoImage}
        />
        <strong>PlasticP</strong>
      </div>

      {/* Основна навігація */}
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/portfolio">Портфоліо</Link>
        <Link href="/consultation">Консультації</Link>
        <Link href="/manipulation">Маніпуляції</Link>
        <Link href="/operation">Операції</Link>
      </nav>

      {/* Бургер-меню, яке відкриває повний список */}
      <div className={styles.burger} onClick={toggleMenu}>
        ☰
      </div>

      {/* Випадаюче бургер-меню з усіма елементами */}
      {isMenuOpen && (
        <div className={styles.burgerMenu}>
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/portfolio" onClick={toggleMenu}>
            Портфоліо
          </Link>
          <Link href="/consultation" onClick={toggleMenu}>
            Консультації
          </Link>
          <Link href="/manipulation" onClick={toggleMenu}>
            Маніпуляції
          </Link>
          <Link href="/operation" onClick={toggleMenu}>
            Операції
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
