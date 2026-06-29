import React, { useState } from 'react'
import CoinNotDialog from '@/components/CoinNotDialog/index.jsx'
import { useNavigate } from 'react-router-dom'
import { useCurrentUserStore } from '@/stores/currentUser'
import { useUserStore } from '@/stores/user'
import { useUIStore } from '@/stores/ui'
import NavBar from '@/components/NavBar'
import aiusermodel from '@/assets/aiusermodel.png'
import aichatmodel from '@/assets/aichatmodel.png'
import coinIcon from '@/assets/coin.png'
import aiChatForward from '@/assets/aiChatForward.png'
import './index.css'

export default function AiDetails() {
  const nav = useNavigate()
  const ui = useUIStore()
  const currentUser = useCurrentUserStore((s) => s.currentUser)
  const updateUser = useUserStore((s) => s.updateUser)
  const needCoinCount = 200
  const [showCoinNot, setShowCoinNot] = useState(false)

  function handlePurchaseClick() {
    if ((currentUser.coins || 0) >= needCoinCount) {
      if (ui.loading) return
      ui.showLoading()

      const currentCoins = (currentUser.coins || 0) - needCoinCount
      updateUser(currentUser.userId, { coins: currentCoins })

      const delay = Math.floor(Math.random() * 1500) + 500
      setTimeout(() => {
        ui.hideLoading()
        nav('/aiChat')
      }, delay)
    } else {
      setShowCoinNot(true)
    }
  }

  return (
    <div className="ai-container">
      <NavBar />
      {/* <div className="ai-chat-img" style={{ backgroundImage: `url(${aichatmodel})` }} /> */}
      <div className="ai-user-img" style={{ backgroundImage: `url(${aiusermodel})` }} />
      {/* <div className="ai-text-title">
        AI Photo
        <br />
        Inspiration
      </div> */}
      <div className="ai-content">
        <div className="ai-title">Eiway AI</div>
        <div className="ai-card">
          <div className="ai-desc">
            Hi! I’m Eiway AI, your friendly fitness companion here to chat about all things movement
            and strength. Whether you love full-body workouts, upper-body gains, lower-body burns,
            or anything in between, I’m here to share tips, plan sessions, and keep your fitness
            journey fun and motivating. Ready to crush your goals and build your best self together?
            Let’s move and grow stronger every day!
          </div>

          <div className="ai-btn" onClick={handlePurchaseClick}>
            <div className="ai-btn-left">
              <div className="ai-coin" style={{ backgroundImage: `url(${coinIcon})` }} />
              <span>{needCoinCount} Coins</span>
            </div>

            <div className="ai-btn-right">
              <p>Chat</p>
              {/* <div
                className="ai-chat-forward"
                style={{ backgroundImage: `url(${aiChatForward})` }}
              /> */}
            </div>
          </div>
        </div>
      </div>

      {showCoinNot && (
        <div
          className="ai-dialog"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowCoinNot(false)
          }}
        >
          <CoinNotDialog
            onRecharge={() => {
              setShowCoinNot(false)
              nav('/coins')
            }}
          />
        </div>
      )}
    </div>
  )
}
