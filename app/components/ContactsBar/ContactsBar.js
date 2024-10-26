// components/ContactsBar/ContactsBar.js

'use client' // Додаємо для використання станів у Next.js (потрібно в app-папці)

import { useState } from 'react'
import styles from './ContactsBar.module.css'

export default function ContactsBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={styles.contactsContainer}>
      {/* Бургер-меню */}
      <button className={styles.burgerButton} onClick={toggleMenu}>
        ☰
      </button>

      {/* Контактна стрічка */}
      <div className={`${styles.contactsBar} ${isMenuOpen ? styles.show : ''}`}>
        <p>
          Телефон: <a href="tel:+38(050) 75 75 411">+38(050) 75 75 411</a>
        </p>
        <p>
          Email: <a href="mailto:Pecheryag@gmail.com">Pecheryag@gmail.com</a>
        </p>
        <p>
          <a
            href="https://goo.gl/maps/youraddress"
            target="_blank"
            rel="noopener noreferrer"
          >
            м.Чернівці. вул.Героїв Майдану 226. (вхід з вул.Ровенська)
          </a>
        </p>
        <a
          href="https://www.facebook.com/profile.php?id=100003098763675"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://telegram.me/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>
    </div>
  )
}
