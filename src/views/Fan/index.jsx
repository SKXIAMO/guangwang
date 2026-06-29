import React, { useMemo } from 'react'

import NavBar from '@/components/NavBar'
import Empty from '@/components/Empty.jsx'
import { useCurrentUserStore } from '@/stores/currentUser'
import { useUserStore } from '@/stores/user'
import { useUIStore } from '@/stores/ui'
import removeIcon from '@/assets/removeIcon.png'
import './index.css'

export default function Fan() {
  const currentUser = useCurrentUserStore((s) => s.currentUser)
  const getUserById = useUserStore((s) => s.getUserById)
  const updateUser = useUserStore((s) => s.updateUser)
  const ui = useUIStore()

  const fans = useMemo(() => {
    const list = currentUser?.fans || []
    return list.map((userId) => getUserById(userId)).filter(Boolean)
  }, [currentUser?.fans, getUserById])

  function addFollow(userId) {
    if (currentUser.follow?.includes(userId)) {
      ui.showToast('You have already followed this user.')
      return
    }

    if (ui.loading) return
    ui.showLoading()

    const currentUserId = currentUser.userId

    const currentUserFollow = currentUser.follow ? [...currentUser.follow] : []
    if (!currentUserFollow.includes(userId)) currentUserFollow.unshift(userId)

    const otherUser = getUserById(userId)
    const otherUserFans = otherUser?.fans ? [...otherUser.fans] : []
    if (!otherUserFans.includes(currentUserId)) otherUserFans.unshift(currentUserId)

    const delay = Math.floor(Math.random() * 1500) + 500
    setTimeout(() => {
      updateUser(currentUser.userId, { follow: currentUserFollow })
      updateUser(userId, { fans: otherUserFans })

      ui.hideLoading()
      ui.showToast('Followed successfully')
    }, delay)
  }

  return (
    <div className="fan-page">
      <NavBar>
        <h1 className="fan-title">Fans</h1>
      </NavBar>

      <div className="fan-container">
        {fans.length > 0 ? (
          <div className="fan-list">
            {fans.map((item) => (
              <div key={item.userId} className="fan-item">
                <div className="fan-left">
                  <div className="fan-user-info">
                    <div className="fan-avatar-box">
                      <div className="fan-avatar-inner">
                        <div
                          className="fan-avatar-fallback"
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
                    <div className="fan-user-name">{item.name}</div>
                  </div>
                  {/* <div className="fan-user-intro">{item.about}</div> */}
                </div>
                <div
                  className="fan-right"
                  onClick={() => addFollow(item.userId)}
                  role="button"
                  tabIndex={0}
                >
                  <img src={removeIcon} alt="remove-icon" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="fan-empty">
            <Empty />
          </div>
        )}
      </div>
    </div>
  )
}
