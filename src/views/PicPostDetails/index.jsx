import React, { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Swiper } from 'antd-mobile'

import ReportDialog from '@/components/ReportDialog/index.jsx'
import Empty from '@/components/Empty.jsx'
import NavBar from '@/components/NavBar'
import { usePostStore } from '@/stores/post'
import { useUserStore } from '@/stores/user'
import { useOtherStore } from '@/stores/other'
import { useCurrentUserStore } from '@/stores/currentUser'
import { useUIStore } from '@/stores/ui'
import { useCommentsStore } from '@/stores/comment'
import { useBack } from '@/utils/iosBridge'

import './index.css'
import likeImage from '@/assets/likepic.png'
import disLikeImage from '@/assets/dislikepic.png'
import commentMoreImage from '@/assets/postpiccommentreport.png'
import commentSendImage from '@/assets/commentsend.png'

export default function PicPostDetails() {
  const { postId: rawPostId } = useParams()
  const postId = String(rawPostId || '')
  const nav = useNavigate()
  const goBack = useBack()
  const ui = useUIStore()
  const post = usePostStore((s) => s.getPostById(postId))
  const updatePostById = usePostStore((s) => s.updatePostById)
  const getUserById = useUserStore((s) => s.getUserById)
  const updateUser = useUserStore((s) => s.updateUser)
  const getTagByIndex = useOtherStore((s) => s.getTagByIndex)
  const currentUser = useCurrentUserStore((s) => s.currentUser)
  const getCommentsById = useCommentsStore((s) => s.getCommentsById)
  const addComment = useCommentsStore((s) => s.addComment)

  const postUser = useMemo(() => (post ? getUserById(post.userId) : null), [getUserById, post])
  const images = useMemo(() => (post?.dynamicPic || []).filter(Boolean), [post])
  const postTag = useMemo(
    () => (post ? getTagByIndex(post.dynamicTitleType) : ''),
    [getTagByIndex, post],
  )

  const [commentInput, setCommentInput] = useState('')
  const [showPostReport, setShowPostReport] = useState(false)
  const [showCommentReport, setShowCommentReport] = useState(false)
  const [reportCommentUserId, setReportCommentUserId] = useState(null)

  const comments = getCommentsById(postId) || []
  const blockSet = new Set(currentUser?.blockList || [])
  const filteredComments = comments.filter((item) => !blockSet.has(item.userId))

  if (!post) {
    return (
      <div className="ppd-page">
        <NavBar />
        <div className="ppd-not-found">The post was not found.</div>
      </div>
    )
  }

  function goOtherHome(userId) {
    if (!userId) return
    nav(`/otherHome/${userId}`)
  }

  function toggleLike() {
    const picPostLikeIds = currentUser.picPostLikeIds ? [...currentUser.picPostLikeIds] : []
    const idx = picPostLikeIds.indexOf(postId)
    if (idx === -1) {
      picPostLikeIds.push(postId)
      updatePostById(postId, { dynamicLikeCount: (post.dynamicLikeCount || 0) + 1 })
    } else {
      picPostLikeIds.splice(idx, 1)
      updatePostById(postId, { dynamicLikeCount: (post.dynamicLikeCount || 0) - 1 })
    }
    console.log(picPostLikeIds)
    updateUser(currentUser.userId, { picPostLikeIds })
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

  function handleCommentReport(userId) {
    setReportCommentUserId(userId)
    setShowCommentReport(true)
  }

  function commentReportSelect(value) {
    setShowCommentReport(false)
    const userIdToBlock = reportCommentUserId
    if (!userIdToBlock) return

    if (value === 0) {
      nav('/report')
      return
    }
    if (value === 1) {
      if (ui.loading) return
      ui.showLoading()

      const blockList = currentUser.blockList ? [...currentUser.blockList] : []
      if (!blockList.includes(userIdToBlock)) {
        blockList.unshift(userIdToBlock)
        updateUser(currentUser.userId, { blockList })
      }

      const delay = Math.floor(Math.random() * 1500) + 500
      setTimeout(() => {
        ui.hideLoading()
        ui.showToast('Blocking successful')
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

  const liked = (currentUser.picPostLikeIds || []).includes(postId)
  const likeCount = post.dynamicLikeCount || 0

  return (
    <div className="ppd-page">
      <NavBar
        showMore={post.userId !== currentUser.userId}
        onMoreClick={() => setShowPostReport(true)}
      ></NavBar>
      <div className="ppd-page-content">
        <div className="ppd-swipe-wrapper">
          {images.length ? (
            <Swiper
              loop={false}
              indicator={(total, current) => (
                <div className="ppd-indicator-wrapper">
                  {Array.from({ length: total }).map((_, i) => (
                    <span key={i} className={`ppd-indicator ${i === current ? 'active' : ''}`} />
                  ))}
                </div>
              )}
            >
              {images.map((src, idx) => (
                <Swiper.Item key={idx}>
                  <div className="ppd-swipe-item">
                    <img src={src} className="ppd-swipe-img" alt="" />
                  </div>
                </Swiper.Item>
              ))}
            </Swiper>
          ) : (
            <div className="ppd-swipe-empty" />
          )}
        </div>

        <div className="ppd-post-content">
          <div className="ppd-post-main">
            <div className="ppd-user-box">
              <div className="ppd-user-side">
                <div
                  className="ppd-avatar"
                  onClick={() => goOtherHome(postUser?.userId)}
                  role="button"
                  tabIndex={0}
                >
                  <div
                    className="ppd-avatar-img"
                    style={{
                      backgroundImage: postUser?.avatar ? `url(${postUser.avatar})` : undefined,
                    }}
                  />
                </div>
                <div
                  className="ppd-user-name"
                  onClick={() => goOtherHome(postUser?.userId)}
                  role="button"
                  tabIndex={0}
                >
                  {postUser?.name}
                </div>
              </div>
              <div className="ppd-user-meta">
                <div className="ppd-post-desc">{post.dynamicDesc}</div>
                <div className="ppd-tag-box">
                  <div className="ppd-tag-text"># {postTag}</div>
                </div>
              </div>
            </div>
            <div className="ppd-like-box" onClick={toggleLike} role="button" tabIndex={0}>
              <div className="ppd-like-wrapper">
                <img
                  src={liked ? likeImage : disLikeImage}
                  alt="like"
                  className="ppd-like-icon-img"
                />
              </div>
              <div className="ppd-like-count">{likeCount}</div>
            </div>
          </div>
        </div>

        <div className="ppd-comments-box">
          <div className="ppd-comments-title-text">Comments</div>
        </div>

        <div className="ppd-comments-list">
          {comments.length ? (
            filteredComments.map((comment) => (
              <div key={comment.commentId} className="ppd-comment-item">
                <div className="ppd-comment-list-top">
                  <div
                    className="ppd-comment-list-user"
                    onClick={() => goOtherHome(comment.userId)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="ppd-comment-avatar">
                      <div
                        className="ppd-comment-avatar-img"
                        style={{
                          backgroundImage: (() => {
                            const u = getUserById(comment.userId)
                            return u?.avatar ? `url(${u.avatar})` : undefined
                          })(),
                        }}
                      />
                    </div>
                    <div className="ppd-comment-user-name">{getUserById(comment.userId)?.name}</div>
                  </div>

                  {comment.userId !== currentUser.userId ? (
                    <button
                      type="button"
                      className="ppd-comments-more"
                      onClick={() => handleCommentReport(comment.userId)}
                    >
                      <img src={commentMoreImage} alt="more" />
                    </button>
                  ) : null}
                </div>
                <div className="ppd-comment-list-bottom">{comment.content}</div>
              </div>
            ))
          ) : (
            <div className="ppd-empty-wrap">
              <Empty />
            </div>
          )}
        </div>

        <div className="ppd-input-box">
          <input
            type="text"
            placeholder="Say something..."
            className="ppd-input-field"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button type="button" className="ppd-send-btn" onClick={sendComment}>
            <img src={commentSendImage} alt="send" />
          </button>
        </div>
      </div>

      <ReportDialog
        open={showPostReport}
        onClose={() => setShowPostReport(false)}
        onSelect={postReportSelect}
      />
      <ReportDialog
        open={showCommentReport}
        onClose={() => setShowCommentReport(false)}
        onSelect={commentReportSelect}
      />
    </div>
  )
}
