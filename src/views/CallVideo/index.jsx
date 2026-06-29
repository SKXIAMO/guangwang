import React, { useEffect, useState } from 'react'
import { useUserStore } from '@/stores/user'
import hangupIcon from '@/assets/hangupicon.png'
import './index.css'

export default function VideoCall({ userId, onHangup }) {
  const getUserById = useUserStore((s) => s.getUserById)
  const userInfo = getUserById(userId)

  const [callingText, setCallingText] = useState('Calling')
  const [displayTime, setDisplayTime] = useState(formatDisplayTime())

  useEffect(() => {
    let dotCount = 0

    const timer = setInterval(() => {
      dotCount = (dotCount + 1) % 4
      setCallingText('Calling' + '.'.repeat(dotCount))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayTime(formatDisplayTime())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  function handleHangup() {
    onHangup?.()
  }

  return (
    <div
      className="video-call"
      style={{
        backgroundImage: userInfo?.avatar ? `url(${userInfo.avatar})` : undefined,
      }}
    >
      <div className="video-call-overlay" />

      <div className="video-call-content">
        <div className="call-info">
          <div className="user-name">{userInfo?.name}</div>
          <div className="calling-text">{callingText}</div>
        </div>

        <button type="button" className="hangup-btn" onClick={handleHangup}>
          <img src={hangupIcon} alt="hangup" />
        </button>
      </div>
    </div>
  )
}

function formatDisplayTime() {
  const now = new Date()
  const hours = now.getHours()
  const minutes = String(now.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}
