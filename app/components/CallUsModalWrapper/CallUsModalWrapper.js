// components/CallUsModalWrapper.js
'use client'

import React, { useState, useEffect } from 'react'
import CallUsModal from '../CAllUsModal/CallUsModal'

const CallUsModalWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true)
    }, 1000)

    return () => clearTimeout(timer) // очищаємо таймер при відході зі сторінки
  }, [])

  return (
    <CallUsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  )
}

export default CallUsModalWrapper
