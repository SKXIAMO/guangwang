import React from 'react'
import emptyImage from '@/assets/empty.png'

export default function Empty({ text = 'No Data' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src={emptyImage}
        alt="empty"
        style={{
          width: 'calc(100vw * 335 / 375)',
          height: 'calc(100vw * 218 / 375)',
        }}
      />
      <div
        style={{
          fontFamily: 'Archivo, sans-serif',
          fontSize: 'calc(100vw * 15 / 375)',
          fontWeight: 400,
          lineHeight: 'calc(100vw * 18 / 375)',
          color: 'rgba(255, 255, 255, 1)',
        }}
      >
        {text}
      </div>
    </div>
  )
}
