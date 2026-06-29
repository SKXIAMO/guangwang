import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Popup } from 'antd-mobile'
import { useNavigate, useParams } from 'react-router-dom'

import ReportDialog from '@/components/ReportDialog/index.jsx'
import Empty from '@/components/Empty.jsx'
import NavBar from '@/components/NavBar'
import { usePostStore } from '@/stores/post'
import { useUserStore } from '@/stores/user'
import { useCurrentUserStore } from '@/stores/currentUser'
import { useUIStore } from '@/stores/ui'
import { useCommentsStore } from '@/stores/comment'
import { useBack } from '@/utils/iosBridge'

import './index.css'
import playIcon from '@/assets/videopluse.png'
import followIcon from '@/assets/follow.png'
import likeImage from '@/assets/likepic.png'
import disLikeImage from '@/assets/dislikepic.png'
import commentIcon from '@/assets/chaticon.png'
import commentSendImage from '@/assets/commentsend.png'

export default function VideoPostDetails() {
  const { postId: rawPostId } = useParams()
  const postId = String(rawPostId || '')
  const nav = useNavigate()
  const goBack = useBack()
  const post = usePostStore((s) => s.getPostById(postId))
  const updatePostById = usePostStore((s) => s.updatePostById)
  const getUserById = useUserStore((s) => s.getUserById)
  const updateUser = useUserStore((s) => s.updateUser)
  const currentUser = useCurrentUserStore((s) => s.currentUser)
  const ui = useUIStore()
  const getCommentsById = useCommentsStore((s) => s.getCommentsById)
  const addComment = useCommentsStore((s) => s.addComment)

  const postUser = useMemo(() => (post ? getUserById(post.userId) : null), [getUserById, post])

  const videoRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [showPostReport, setShowPostReport] = useState(false)
  const [showComment, setShowComment] = useState(false)

  const [commentInput, setCommentInput] = useState('')
  const comments = getCommentsById(postId) || []
  const blockSet = new Set(currentUser?.blockList || [])
  const filteredComments = comments.filter((item) => !blockSet.has(item.userId))
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play()
      .then(() => setIsPaused(false))
      .catch(() => setIsPaused(true))
    return () => {
      try {
        v.pause()
      } catch {
        // ignore
      }
    }
  }, [postId])

  if (!post) {
    return (
      <div className="vpd-page">
        <NavBar />
        <div className="vpd-not-found">The post was not found.</div>
      </div>
    )
  }

  function togglePlay() {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setIsPaused(false)
    } else {
      v.pause()
      setIsPaused(true)
    }
  }

  function goOtherHome(userId) {
    if (!userId) return
    nav(`/otherHome/${userId}`)
  }

  function handleFollow() {
    const currentUserId = currentUser.userId
    const postUserId = post.userId

    const currentUserFollow = currentUser.follow ? [...currentUser.follow] : []
    if (!currentUserFollow.includes(postUserId)) currentUserFollow.unshift(postUserId)

    const postUserFans = postUser?.fans ? [...postUser.fans] : []
    if (!postUserFans.includes(currentUserId)) postUserFans.unshift(currentUserId)

    updateUser(currentUserId, { follow: currentUserFollow })
    updateUser(postUserId, { fans: postUserFans })
    ui.showToast('Followed successfully')
  }

  function toggleLike() {
    const videoPostLikeIds = currentUser.videoPostLikeIds ? [...currentUser.videoPostLikeIds] : []
    const idx = videoPostLikeIds.indexOf(post.dynamicId)
    if (idx === -1) {
      videoPostLikeIds.push(post.dynamicId)
      updatePostById(postId, { dynamicLikeCount: (post.dynamicLikeCount || 0) + 1 })
    } else {
      videoPostLikeIds.splice(idx, 1)
      updatePostById(postId, { dynamicLikeCount: (post.dynamicLikeCount || 0) - 1 })
    }
    updateUser(currentUser.userId, { videoPostLikeIds })
  }

  function postReportSelect(value) {
    setShowPostReport(false)
    if (value === 0) {
      nav('/report')
      return
    }
    if (value === 1) {
      if (ui.loading) return
      ui.showLoading()

      const postUserId = post.userId
      const blockList = currentUser.blockList ? [...currentUser.blockList] : []
      if (postUserId && !blockList.includes(postUserId)) {
        blockList.unshift(postUserId)
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

  function sendComment() {
    const content = commentInput.trim()
    if (!content) return
    const newComment = {
      commentId: String((useCommentsStore.getState().comment || []).length + 1),
      dynamicId: String(postId),
      userId: currentUser.userId,
      content,
    }
    addComment(newComment)
    updatePostById(postId, { dynamicCommentCount: (post.dynamicCommentCount || 0) + 1 })
    setCommentInput('')
  }

  const liked = (currentUser.videoPostLikeIds || []).includes(post.dynamicId)
  const likeCount = post.dynamicLikeCount || 0

  return (
    <div className="vpd-page">
      <NavBar
        showMore={post.userId !== currentUser.userId}
        onMoreClick={() => setShowPostReport(true)}
      >
        <div className="vpd-title">
          <div className="vpd-avatar-wrap">
            <div
              className="vpd-avatar"
              onClick={() => goOtherHome(post.userId)}
              role="button"
              tabIndex={0}
            >
              <div
                className="vpd-avatar-img"
                style={{
                  backgroundImage: postUser?.avatar ? `url(${postUser.avatar})` : undefined,
                }}
              />
            </div>
          </div>
          <div
            className="vpd-username"
            onClick={() => goOtherHome(post.userId)}
            role="button"
            tabIndex={0}
          >
            {postUser?.name}
          </div>
        </div>
      </NavBar>
      <video
        ref={videoRef}
        className="vpd-video"
        src={post.dynamicVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onClick={togglePlay}
      />

      {isPaused ? (
        <div className="vpd-center-icon" onClick={togglePlay} role="button" tabIndex={0}>
          <img src={playIcon} alt="play" />
        </div>
      ) : null}

      <div className="vpd-bottom-shadow" />

      <div className="vpd-content">
        <div className="vpd-bottom-info">
          <div className="vpd-user-left">
            {/* <div className="vpd-avatar-wrap">
              <div
                className="vpd-avatar"
                onClick={() => goOtherHome(post.userId)}
                role="button"
                tabIndex={0}
              >
                <div
                  className="vpd-avatar-img"
                  style={{
                    backgroundImage: postUser?.avatar ? `url(${postUser.avatar})` : undefined,
                  }}
                />
              </div>
              {post.userId !== currentUser.userId &&
              !(currentUser.follow || []).includes(post.userId) ? (
                <div className="vpd-follow" onClick={handleFollow} role="button" tabIndex={0}>
                  <img src={followIcon} alt="follow" />
                </div>
              ) : null}
            </div> */}

            <div className="vpd-user-text">
              {/* <div
                className="vpd-username"
                onClick={() => goOtherHome(post.userId)}
                role="button"
                tabIndex={0}
              >
                {postUser?.name}
              </div> */}
              <div className="vpd-desc">{post.dynamicDesc}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="vpd-action-buttons">
        <div className="vpd-action-wrapper">
          {/* <div className="vpd-action-item-bg"></div> */}
          <div className="vpd-action-button" onClick={toggleLike} role="button" tabIndex={0}>
            <img src={liked ? likeImage : disLikeImage} alt="like" />
            <span>{likeCount}</span>
          </div>
        </div>
        <div className="vpd-action-wrapper">
          {/* <div className="vpd-action-item-bg"></div> */}
          <div
            className="vpd-action-button"
            onClick={() => setShowComment(true)}
            role="button"
            tabIndex={0}
          >
            <img src={commentIcon} alt="comment" />
            <span>{post.dynamicCommentCount || 0}</span>
          </div>
        </div>
      </div>

      <Popup
        visible={showComment}
        onMaskClick={() => setShowComment(false)}
        bodyStyle={{
          height: '60vh',
          borderRadius: '24px 24px 0px 0px',
          background: 'rgba(24, 24, 24, 1)',
        }}
      >
        <div className="vpd-comment-sheet">
          <div className="vpd-comments-title-text">Comments</div>
          {/* <div className="vpd-comments-box"> */}
          {/* <div className="vpd-comments-line" /> */}
          {/* <div className="vpd-comments-line" /> */}
          {/* </div> */}
          <div className="vpd-comment-list">
            {comments.length ? (
              filteredComments.map((c) => (
                <div key={c.commentId} className="vpd-comment-item">
                  <div className="vpdcomment-item-head">
                    <div className="vpd-avatar-wrap">
                      <div
                        className="vpd-avatar"
                        onClick={() => goOtherHome(post.userId)}
                        role="button"
                        tabIndex={0}
                      >
                        <div
                          className="vpd-avatar-img"
                          style={{
                            backgroundImage: postUser?.avatar
                              ? `url(${postUser.avatar})`
                              : undefined,
                          }}
                        />
                      </div>
                    </div>
                    <div className="vpd-comment-name">{getUserById(c.userId)?.name}</div>
                  </div>
                  <div className="vpd-comment-content">{c.content}</div>
                </div>
              ))
            ) : (
              <Empty />
            )}
          </div>
          <div className="vpd-comment-input">
            <input
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Say something"
            />
            <button type="button" onClick={sendComment}>
              <img src={commentSendImage} alt="send" />
            </button>
          </div>
        </div>
      </Popup>

      <ReportDialog
        open={showPostReport}
        onClose={() => setShowPostReport(false)}
        onSelect={postReportSelect}
      />
    </div>
  )
}
