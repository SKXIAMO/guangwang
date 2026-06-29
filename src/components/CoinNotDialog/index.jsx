import React from 'react'
import coinCry from '@/assets/coincry.png'
// import coinDialogLeftZs from '@/assets/coinDialogLeftZs.png'
// import coinDialogRightZs from '@/assets/coinDialogRightZs.png'
import './index.css'

export default function CoinNotDialog({ onRecharge }) {
  return (
    <div className="dialog-wrapper">
      <div className="coin-dialog" style={{}}>
        {/* <img src={coinDialogLeftZs} alt="coinDialogLeftZs" className="coin-left-zs" />
      <img src={coinDialogRightZs} alt="coinDialogRightZs" className="coin-right-zs" /> */}
        <img src={coinCry} alt="coin cry" className="coin-cry" />
        <h1 className="coin-title">Sorry</h1>
        <p className="coin-desc">your current balance is insufficient</p>
        <button type="button" className="coin-dialog-btn" onClick={onRecharge}>
          Recharge
        </button>
      </div>
    </div>
  )
}
