import React from 'react'
import { useBack } from '@/utils/iosBridge'
import './index.css'

export default function BackButton({ className = '', style }) {
  const goBack = useBack()
  return (
    <button
      type="button"
      className={`back-button ${className}`}
      style={style}
      onClick={goBack}
      aria-label="Back"
    >
      <span className="back-button-icon" aria-hidden="true" />
    </button>
  )
}
