import React from 'react'
import './home.css'
import bg from '@/assets/bg.webp'

export default function Home() {
  return (
    <div className="home-page">
      <img className="home-bg-img" src={bg} alt="" />

      <div className="home-email-box">
        <div className="home-email">zhoudonghua1963@icloud.com</div>
      </div>
    </div>
  )
}
