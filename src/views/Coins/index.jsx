import React, { useMemo, useState } from 'react'

import NavBar from '@/components/NavBar'
import { useOtherStore } from '@/stores/other'
import { useCurrentUserStore } from '@/stores/currentUser'
import { sendPaymentToIOS } from '@/utils/iosBridge'
// import coinsBg from '@/assets/coinsbgc.png'
import './index.css'
import coinIcon from '@/assets/coin.png'

export default function Coins() {
  const other = useOtherStore((s) => s.other)
  const coins = useCurrentUserStore((s) => s.currentUser?.coins ?? 0)

  const [selectedIndex, setSelectedIndex] = useState(-1)

  const list = useMemo(() => other?.coinsSetting || [], [other])

  function handleSelect(index) {
    setSelectedIndex(index)
    const nextItem = list[index]
    if (!nextItem) return

    const payKey = nextItem.key
    sendPaymentToIOS(payKey)
  }

  return (
    <div className="coins-page">
      <NavBar>
        <span className="coins-title">My diamonds</span>
      </NavBar>

      <div className="coins-box">
        <img className="coins-icon-img" src={coinIcon} alt="coin" />
        <div className="coins-box-content">
          <div className="coins-box-header">Wallet Balance:</div>
          <span className="coins-number">{coins}</span>
        </div>
      </div>

      <div className="coins-list-wrap">
        <div className="coins-list">
          {list.map((item, index) => {
            const selected = selectedIndex === index
            return (
              <div
                key={index}
                className={`coins-item ${selected ? 'coins-item-selected' : ''}`}
                onClick={() => handleSelect(index)}
                role="button"
                tabIndex={0}
              >
                <div className="coins-item-top">
                  <img className="coins-item-icon-img" src={coinIcon} alt="coin" />
                  <span className={`coins-count ${selected ? 'coins-count-selected' : ''}`}>
                    {item.cions}
                  </span>
                </div>

                <div className={`coins-price ${selected ? 'coins-price-selected' : ''}`}>
                  {item.money.toFixed(2)}$
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
