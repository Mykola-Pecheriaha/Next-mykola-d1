import styles from './Footer.module.css'
import contacts from '../../data/contacts.json'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <nav className={styles.nav}>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </div>
      <div className={styles.column}>
        <div className={styles.contactInfo}>
          <p>Phone: {contacts.phone}</p>
          <p>
            Email: <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </p>
          <p>Address: {contacts.address}</p>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.socials}>
          <a
            href={contacts.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href={contacts.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href={contacts.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </a>
          <a
            href={contacts.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Mykola. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
