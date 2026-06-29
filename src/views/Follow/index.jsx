import React, { useMemo } from 'react'

import NavBar from '@/components/NavBar'
import Empty from '@/components/Empty.jsx'
import { useCurrentUserStore } from '@/stores/currentUser'
import { useUserStore } from '@/stores/user'
import { useUIStore } from '@/stores/ui'
import removeIcon from '@/assets/removeIcon.png'
import './index.css'

export default function Follow() {
  const currentUser = useCurrentUserStore((s) => s.currentUser)
  const getUserById = useUserStore((s) => s.getUserById)
  const updateUser = useUserStore((s) => s.updateUser)
  const ui = useUIStore()

  const follows = useMemo(() => {
    const list = currentUser?.follow || []
    return list.map((userId) => getUserById(userId)).filter(Boolean)
  }, [currentUser?.follow, getUserById])

  function cancelFollow(userId) {
    if (ui.loading) return
    ui.showLoading()

    const currentUserId = currentUser.userId

    const currentUserFollow = currentUser.follow ? [...currentUser.follow] : []
    const idx = currentUserFollow.indexOf(userId)
    if (idx !== -1) currentUserFollow.splice(idx, 1)

    const otherUser = getUserById(userId)
    const otherUserFans = otherUser?.fans ? [...otherUser.fans] : []
    const idx2 = otherUserFans.indexOf(currentUserId)
    if (idx2 !== -1) otherUserFans.splice(idx2, 1)

    const delay = Math.floor(Math.random() * 1500) + 500
    setTimeout(() => {
      updateUser(currentUser.userId, { follow: currentUserFollow })
      updateUser(userId, { fans: otherUserFans })

      ui.hideLoading()
      ui.showToast('Unfollow successfully')
    }, delay)
  }

  return (
    <div className="follow-page">
      <NavBar>
        <h1 className="follow-title">Follow</h1>
      </NavBar>

      <div className="follow-container">
        {follows.length > 0 ? (
          <div className="follow-list">
            {follows.map((item) => (
              <div key={item.userId} className="follow-item">
                <div className="follow-left">
                  <div className="follow-user-info">
                    <div className="follow-avatar-box">
                      <div className="follow-avatar-inner">
                        <div
                          className="follow-avatar-fallback"
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
                    <div className="follow-user-name">{item.name}</div>
                  </div>
                  {/* <div className="follow-user-intro">{item.about}</div> */}
                </div>

                <div
                  className="follow-right"
                  onClick={() => cancelFollow(item.userId)}
                  role="button"
                  tabIndex={0}
                >
                  <img src={removeIcon} alt="remove-icon" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="follow-empty">
            <Empty />
          </div>
        )}
      </div>
    </div>
  )
}
