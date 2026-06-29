import React, { useEffect, useRef, useState } from 'react'

import NavBar from '@/components/NavBar'
import { useBack } from '@/utils/iosBridge'
import { uploadSingleImage } from '@/utils/ossUpload'
import { useCurrentUserStore } from '@/stores/currentUser'
import { useUIStore } from '@/stores/ui'
import { useUserStore } from '@/stores/user'
import avatarIcon from '@/assets/avataricon.png'
import cameraIcon from '@/assets/cameraicon.png'

import './index.css'

export default function Edit() {
  const fileInputRef = useRef(null)
  const currentUser = useCurrentUserStore((s) => s.currentUser)
  const ui = useUIStore()
  const updateUser = useUserStore((s) => s.updateUser)
  const goBack = useBack()
  const [topBlockImage, setTopBlockImage] = useState(avatarIcon)
  const [name, setName] = useState('')
  const [aboutMe, setAboutMe] = useState('')
  const [avatarFile, setAvatarFile] = useState(null)

  useEffect(() => {
    if (!currentUser) return
    setName(currentUser.name || '')
    setAboutMe(currentUser.about || '')
    setTopBlockImage(currentUser.avatar || avatarIcon)
  }, [currentUser])

  function chooseAvatar() {
    fileInputRef.current?.click()
  }

  function onFileChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setAvatarFile(file)

    const reader = new FileReader()
    reader.onload = (ev) => {
      setTopBlockImage(String(ev.target?.result || ''))
    }
    reader.readAsDataURL(file)

    e.target.value = ''
  }

  async function saveProfile() {
    if (!name.trim()) {
      ui.showToast('Please enter name')
      return
    }
    if (!aboutMe.trim()) {
      ui.showToast('Please enter about me')
      return
    }
    if (ui.loading) return
    ui.showLoading()

    let avatarUrl = topBlockImage
    try {
      if (avatarFile) {
        avatarUrl = await uploadSingleImage(avatarFile, 'template_development')
      }

      const delay = avatarFile ? 0 : Math.floor(Math.random() * 1500) + 500
      setTimeout(() => {
        updateUser(currentUser.userId, {
          avatar: avatarUrl,
          name,
          about: aboutMe,
        })

        ui.hideLoading()
        goBack()
        ui.showToast('Profile updated')
      }, delay)
    } catch (e) {
      console.error(e)
      ui.hideLoading()
      ui.showToast('Updated failed, please check your network.')
    }
  }

  return (
    <div className="edit-page">
      <NavBar>
        <h1 className="edit-title">Edit</h1>
      </NavBar>
      <div className="edit-content">
        <div className="edit-top">
          <div
            className="edit-top-block"
            style={
              topBlockImage
                ? { backgroundImage: `url(${topBlockImage})` }
                : { background: 'rgba(255,255,255,0.16)' }
            }
            onClick={chooseAvatar}
            role="button"
            tabIndex={0}
          >
            <div className="edit-camera-corner" aria-hidden="true">
              <img
                src={cameraIcon}
                alt="camera"
                style={{ width: 'calc(100vw * 20 / 375)', height: 'calc(100vw * 20 / 375)' }}
              />
            </div>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={onFileChange}
        />

        <div className="edit-second">
          <div className="edit-section">
            <div className="edit-label">Name</div>
            <div className="edit-input-box">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Please enter"
              />
            </div>
          </div>
        </div>

        <div className="edit-third">
          <div className="edit-section">
            <div className="edit-label">About me</div>
            <div className="edit-input-box edit-about-me-box">
              <textarea
                value={aboutMe}
                onChange={(e) => setAboutMe(e.target.value)}
                placeholder="Please enter"
              />
            </div>
          </div>
        </div>

        <div className="edit-save-wrap">
          <button type="button" className="edit-save-btn" onClick={saveProfile}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
