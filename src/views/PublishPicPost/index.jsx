import React, { useMemo, useRef, useState } from 'react'
import NavBar from '@/components/NavBar'
import { useOtherStore } from '@/stores/other'
import { useUIStore } from '@/stores/ui'
import { usePostStore } from '@/stores/post'
import { useCurrentUserStore } from '@/stores/currentUser'
import { uploadMultipleImages } from '@/utils/ossUpload.js'
import { useBack } from '@/utils/iosBridge'
import uploadIcon from '@/assets/uploadpic.png'
import { useNavigate } from 'react-router-dom'
import './index.css'
export default function PublishPicPost() {
  const other = useOtherStore((s) => s.other)
  const ui = useUIStore()
  const addPost = usePostStore((s) => s.addPost)
  const posts = usePostStore((s) => s.posts)
  const currentUser = useCurrentUserStore((s) => s.currentUser)
  const nav = useNavigate()
  const maxImages = 5
  const fileInputRef = useRef(null)

  const [text, setText] = useState('')
  const [selectedTheme, setSelectedTheme] = useState(0)
  const [files, setFiles] = useState([])

  const themes = useMemo(() => other?.postTheme || [], [other])

  function handleAddImage(e) {
    const picked = Array.from(e.target.files || [])
    const remaining = maxImages - files.length
    const toAdd = picked.slice(0, remaining).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))
    setFiles((prev) => [...prev, ...toAdd])
    e.target.value = ''
  }

  function handleRemoveImage(index) {
    setFiles((prev) => {
      const next = [...prev]
      const removed = next.splice(index, 1)[0]
      if (removed?.preview) URL.revokeObjectURL(removed.preview)
      return next
    })
  }

  async function handleRelease() {
    if (!text.trim()) {
      ui.showToast('Please fill in the post text.')
      return
    }
    if (!files.length) {
      ui.showToast('Please select at least one image.')
      return
    }

    if (ui.loading) return
    ui.showLoading()

    try {
      const urls = await uploadMultipleImages(
        files.map((x) => x.file),
        'template_development',
      )
      let newDynamicID = 'd' + String((posts || []).length + 1)
      const newPost = {
        dynamicId: newDynamicID,
        userId: currentUser.userId,
        dynamicType: 0,
        dynamicDesc: text,
        dynamicTitleType: selectedTheme,
        dynamicPic: urls,
        dynamicVideo: '',
        dynamicLikeCount: 0,
        dynamicCommentCount: 0,
      }
      addPost(newPost)
      nav(`/picPostDetails/${newDynamicID}`)
      ui.showToast('Post released successfully')
    } catch (err) {
      console.error('upload failed', err)
      ui.showToast('Upload failed, please check your network.')
    } finally {
      ui.hideLoading()
    }
  }

  return (
    <div className="page">
      <NavBar />
      <div className="content">
        <div className="textarea-box">
          <textarea
            placeholder="Please enter"
            className="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="text-count">{text.length}/150</div>
        </div>

        <div className="section-title">Topic</div>

        <div className="theme-list">
          {themes.map((theme, index) => (
            <div
              key={index}
              className={`theme-item ${selectedTheme === index ? 'active' : ''}`}
              onClick={() => setSelectedTheme(index)}
            >
              {theme}
            </div>
          ))}
        </div>

        <div className="section-title">Upload（Pic）</div>

        <div className="upload-list">
          {/* 上传按钮 */}
          {files.length < maxImages && (
            <label className="upload-item upload-btn">
              <input type="file" hidden multiple onChange={handleAddImage} />
              <img src={uploadIcon} />
            </label>
          )}

          {/* 图片 */}
          {files.map((x, index) => (
            <div className="upload-item" key={index}>
              <div className="upload-preview" style={{ backgroundImage: `url(${x.preview})` }} />
              <button className="remove-btn" onClick={() => handleRemoveImage(index)}>
                ×
              </button>
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}></div>
        <div className="release-btn" onClick={handleRelease}>
          Release
        </div>
      </div>
    </div>
  )
}
