import React, { useMemo } from 'react'

import NavBar from '@/components/NavBar'
import Empty from '@/components/Empty.jsx'
import { useCurrentUserStore } from '@/stores/currentUser'
import { useUserStore } from '@/stores/user'
import { useUIStore } from '@/stores/ui'
import removeIcon from '@/assets/blckRemove.png'
import './index.css'

export default function Block() {
  const currentUser = useCurrentUserStore((s) => s.currentUser)
  const getUserById = useUserStore((s) => s.getUserById)
  const updateUser = useUserStore((s) => s.updateUser)
  const ui = useUIStore()

  const blocks = useMemo(() => {
    const list = currentUser?.blockList || []
    return list.map((userId) => getUserById(userId)).filter(Boolean)
  }, [currentUser?.blockList, getUserById])

  function removeBlock(userId) {
    const cur = currentUser
    if (!cur?.blockList) return
    if (ui.loading) return
    ui.showLoading()

    const next = cur.blockList.filter((id) => id !== userId)
    const delay = Math.floor(Math.random() * 1500) + 500
    setTimeout(() => {
      updateUser(cur.userId, { blockList: next })
      ui.hideLoading()
    }, delay)
  }

  return (
    <div className="block-page">
      <NavBar>
        <h1 className="block-title">Blocklist</h1>
      </NavBar>
      <div className="block-container">
        {blocks.length > 0 ? (
          <div className="block-list">
            {blocks.map((item) => (
              <div key={item.userId} className="block-item">
                <div className="block-left">
                  <div className="block-user-info">
                    <div className="block-avatar-box">
                      <div className="block-avatar-inner">
                        <div
                          className="block-avatar-fallback"
                          style={{
                            background:
                              item.avatar && item.avatar.startsWith('http')
                                ? `url(${item.avatar}) center/cover no-repeat`
                                : undefined,
                          }}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div className="block-user-name">{item.name}</div>
                  </div>
                  {/* <div className="block-user-intro">{item.about}</div> */}
                </div>

                <div
                  className="block-right"
                  onClick={() => removeBlock(item.userId)}
                  role="button"
                  tabIndex={0}
                >
                  <img src={removeIcon} alt="remove-icon" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="block-empty">
            <Empty />
          </div>
        )}
      </div>
    </div>
  )
}
