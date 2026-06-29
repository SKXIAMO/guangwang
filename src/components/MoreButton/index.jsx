import React from 'react'
import './index.css'

export default function MoreButton({ onClick, className = '', style }) {
  return (
    <button
      type="button"
      className={`more-button ${className}`}
      style={style}
      onClick={onClick}
      aria-label="More"
    >
      <span
        className="more-button-icon"
        aria-hidden="true"
      />
    </button>
  )
}