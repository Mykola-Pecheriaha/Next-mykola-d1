import React from 'react'
import styles from './CallUsModal.module.css'

const CallUsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>Позвоніть нам</h3>
        <p>📞 +380 (123) 456-789</p>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  )
}

export default CallUsModal
