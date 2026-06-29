import React from 'react'
import BackButton from '@/components/BackButton/index.jsx'
import MoreButton from '@/components/MoreButton/index.jsx'
import './index.css'

export default function NavBar({ showMore = false, onMoreClick, children, style }) {
  return (
    <div className="nav-bar" style={style}>
      <BackButton />
      {children}
      {showMore ? <MoreButton onClick={onMoreClick} /> : <div className="nav-bar-placeholder" />}
    </div>
  )
}
