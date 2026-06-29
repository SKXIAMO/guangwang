import React from 'react'
import './home.css'
import bg from '@/assets/bg.webp'

export default function Home() {
  return (
    <div className="home-page">
      <img className="home-bg-img" src={bg} alt="" />

      <div className="home-email-box">
        <div className="home-email">639293382@qq.com</div>
      </div>
    </div>
  )
}
