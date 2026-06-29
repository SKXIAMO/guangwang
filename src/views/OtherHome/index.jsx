import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import ReportDialog from '@/components/ReportDialog/index.jsx'
import Empty from '@/components/Empty.jsx'

import { useUserStore } from '@/stores/user'
import { usePostStore } from '@/stores/post'
import { useCurrentUserStore } from '@/stores/currentUser'
import { useUIStore } from '@/stores/ui'
import { useChatsStore } from '@/stores/chat'
import { useBack } from '@/utils/iosBridge'

import './index.css'
import chatIcon from '@/assets/chaticon.png'
import playIcon from '@/assets/videopluse.png'
function formatCount(value) {
  const count = Number(value) || 0
  if (count < 1000) return String(count)

  const compact = new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: count >= 10000 ? 1 : 0,
  }).format(count)

  return compact.replace('K', 'k').replace('M', 'm')
}

export default function OtherHome() {
  const { userId: rawUserId } = useParams()
  const userId = String(rawUserId || '')
  const nav = useNavigate()
  const goBack = useBack()
  const getUserById = useUserStore((s) => s.getUserById)
  const updateUser = useUserStore((s) => s.updateUser)
  const getPostsByUserId = usePostStore((s) => s.getPostsByUserId)
  const currentUser = useCurrentUserStore((s) => s.currentUser)
  const ui = useUIStore()
  const chatStore = useChatsStore()

  const profile = useMemo(() => getUserById(userId) || {}, [getUserById, userId])
  const userPosts = useMemo(() => getPostsByUserId(userId) || [], [getPostsByUserId, userId])

  const [showReport, setShowReport] = useState(false)

  function reportSelect(value) {
    setShowReport(false)
    if (value === 0) {
      nav('/report')
      return
    }
    if (value === 1) {
      if (ui.loading) return
      ui.showLoading()

      const blockList = currentUser.blockList || []
      if (!blockList.includes(userId)) {
        blockList.unshift(userId)
        updateUser(currentUser.userId, { blockList })
      }

      const delay = Math.floor(Math.random() * 1500) + 500
      setTimeout(() => {
        ui.hideLoading()
        ui.showToast('Blocking successful')
        goBack()
      }, delay)
    }
  }

  function handleFollow() {
    const currentUserId = currentUser.userId
    const targetUserId = userId

    const currentUserFollow = currentUser.follow ? [...currentUser.follow] : []
    const postUserFans = profile.fans ? [...profile.fans] : []

    const isFollowed = currentUserFollow.includes(targetUserId)

    if (isFollowed) {
      const newFollow = currentUserFollow.filter((id) => id !== targetUserId)
      const newFans = postUserFans.filter((id) => id !== currentUserId)

      updateUser(currentUserId, { follow: newFollow })
      updateUser(targetUserId, { fans: newFans })

      ui.showToast('Unfollowed')
    } else {
      currentUserFollow.unshift(targetUserId)
      postUserFans.unshift(currentUserId)

      updateUser(currentUserId, { follow: currentUserFollow })
      updateUser(targetUserId, { fans: postUserFans })

      ui.showToast('Followed successfully')
    }
  }

  function handleChat() {
    if (ui.loading) return
    ui.showLoading()
    const currentUserId = currentUser.userId

    const existChat = (chatStore.chat || []).find((chat) => {
      const ids = chat.chatUserIds || []
      return ids.includes(currentUserId) && ids.includes(userId)
    })

    let chatId
    if (existChat) {
      chatId = existChat.chatId
    } else {
      const newChat = {
        chatId: String((chatStore.chat || []).length + 1),
        chatUserIds: [currentUserId, userId],
        lastSendContent: '',
        lastSendTime: new Date().toISOString(),
        unreadMsgCount: 0,
        lastSendUserId: currentUserId,
      }
      chatStore.addChat?.(newChat)
      chatId = newChat.chatId
    }
    ui.hideLoading()
    nav(`/chat/${chatId}`)
  }

  function toPostDetail(dynamicId, dynamicType) {
    if (dynamicType == 0) nav(`/picPostDetails/${dynamicId}`)
    if (dynamicType == 1) nav(`/videoPostDetails/${dynamicId}`)
  }

  const canFollow =
    userId && userId !== currentUser.userId && !(currentUser.follow || []).includes(userId)
  const followingCount = (profile.follow || []).length || 0
  const fansCount = (profile.fans || []).length || 0
  const aboutText = profile.about?.trim() || ''

  return (
    <div className="other-home-page">
      <NavBar showMore={userId !== currentUser.userId} onMoreClick={() => setShowReport(true)} />
      <div className="other-home-scroll">
        <div className="other-home-hero">
          <div className="other-home-top">
            <div
              className="other-home-avatar"
              style={{
                ['--avatar-url']: profile.avatar ? `url(${profile.avatar})` : 'none',
              }}
            >
              {canFollow ? (
                <div
                  className="other-home-avatar-plus"
                  onClick={handleFollow}
                  role="button"
                  tabIndex={0}
                >
                  +
                </div>
              ) : null}
            </div>

            <div className="other-home-stats">
              <div className="other-home-stat">
                <div className="n">{formatCount(followingCount)}</div>
                <div className="l">Following</div>
              </div>
              <div className="other-home-stat">
                <div className="n">{formatCount(fansCount)}</div>
                <div className="l">Fans</div>
              </div>
            </div>
          </div>

          <div className="other-home-nd">
            <div className="other-home-name">{profile.name}</div>
            {userId !== currentUser.userId ? (
              <div className="other-home-actions">
                <div
                  className="other-home-chat-btn"
                  onClick={handleChat}
                  role="button"
                  tabIndex={0}
                >
                  <img src={chatIcon} alt="chat" />
                  <span className="other-home-chat-text">Chat</span>
                </div>
              </div>
            ) : (
              <div className="other-home-actions other-home-actions-empty" />
            )}
          </div>

          <div className="other-home-bio">
            <span>{aboutText}</span>
          </div>
        </div>

        <div className="other-home-post-title">Works</div>
        <div className="other-home-post-list">
          {userPosts.length > 0 ? (
            userPosts.map((post) => (
              <div
                key={post.dynamicId}
                className="other-home-post-item"
                onClick={() => toPostDetail(post.dynamicId, post.dynamicType)}
                role="button"
                tabIndex={0}
              >
                <div
                  className="other-home-post-image"
                  style={{
                    backgroundImage: post.dynamicPic?.[0]
                      ? `url(${post.dynamicPic[0]})`
                      : undefined,
                  }}
                >
                  {post.dynamicType === 1 ? (
                    <div className="vpd-center-icon" tabIndex={0}>
                      <img src={playIcon} alt="play" />{' '}
                    </div>
                  ) : null}
                </div>
              </div>
            ))
          ) : (
            <Empty />
          )}
        </div>
      </div>

      <ReportDialog
        open={showReport}
        onClose={() => setShowReport(false)}
        onSelect={reportSelect}
      />
    </div>
  )
}
