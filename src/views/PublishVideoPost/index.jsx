import React, { useRef, useState } from 'react'
import { useUIStore } from '@/stores/ui'
import { usePostStore } from '@/stores/post'
import { useCurrentUserStore } from '@/stores/currentUser'
import { uploadSingleImage, uploadVideo } from '@/utils/ossUpload'
import { useBack } from '@/utils/iosBridge'
import NavBar from '@/components/NavBar'
import uploadIcon from '@/assets/uploadvid.png'
import { useNavigate } from 'react-router-dom'
import './index.css'

export default function PublishVideoPost() {
  const ui = useUIStore()
  const addPost = usePostStore((s) => s.addPost)
  const posts = usePostStore((s) => s.posts)
  const currentUser = useCurrentUserStore((s) => s.currentUser)
  const nav = useNavigate()
  const fileInputRef = useRef(null)

  const [text, setText] = useState('')
  const [uploadedVideo, setUploadedVideo] = useState(null)
  const [videoFirstFrame, setVideoFirstFrame] = useState('')
  const getVideoInfo = async (videoUrl) => {
    return new Promise((resolve) => {
      let video = document.createElement('video')

      video.src = videoUrl
      video.currentTime = 0.1
      video.preload = 'metadata'

      video.addEventListener('loadeddata', async () => {
        let canvas = document.createElement('canvas'),
          width = video.videoWidth,
          height = video.videoHeight

        canvas.width = width
        canvas.height = height

        await new Promise((r) => setTimeout(r, 100))

        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

        const thumb = canvas.toDataURL('image/jpeg')

        canvas.width = 0
        canvas.height = 0
        video.src = ''
        video.load()
        video.remove()
        video = null
        canvas = null

        resolve(thumb)
      })
    })
  }

  const handleAddVideo = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setUploadedVideo(file)

    const videoUrl = URL.createObjectURL(file)

    console.log(videoUrl)

    const thumb = await getVideoInfo(videoUrl)
    setVideoFirstFrame(thumb)

    e.target.value = ''
  }

  function handleRemoveVideo() {
    setUploadedVideo(null)
    setVideoFirstFrame('')
  }

  async function handleRelease() {
    if (!text.trim()) return ui.showToast('Please fill in the post text.')
    if (!uploadedVideo) return ui.showToast('Please select a video.')

    if (ui.loading) return
    ui.showLoading()

    try {
      const videoUrl = await uploadVideo(uploadedVideo, 'template_development')
      const imageBlob = await (await fetch(videoFirstFrame)).blob()
      const imageFile = new File([imageBlob], 'first_frame.png', { type: 'image/png' })
      const imageUrl = await uploadSingleImage(imageFile, 'template_development')
      let newDynamicID = 'd' + String((posts || []).length + 1)
      addPost({
        dynamicId: newDynamicID,
        userId: currentUser.userId,
        dynamicType: 1,
        dynamicDesc: text,
        dynamicTitleType: 0,
        dynamicPic: [imageUrl],
        dynamicVideo: videoUrl,
        dynamicLikeCount: 0,
        dynamicCommentCount: 0,
      })
      nav(`/videoPostDetails/${newDynamicID}`)
      ui.showToast('Post released successfully')
    } catch {
      ui.showToast('Upload failed, please check your network.')
    } finally {
      ui.hideLoading()
    }
  }

  return (
    <div className="publish">
      <NavBar />
      <div className="publish-scroll">
        <div className="publish-text-box">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={150}
            placeholder="Please enter"
          />
          <div className="publish-count">{text.length}/150</div>
        </div>

        <div className="publish-title">Upload（video）</div>

        <div className="publish-upload">
          {!uploadedVideo ? (
            <label className="upload-box">
              <input
                ref={fileInputRef}
                hidden
                type="file"
                accept="video/*"
                onChange={handleAddVideo}
              />
              <img src={uploadIcon} alt="add" className="upload-icon" />
            </label>
          ) : (
            <div className="upload-box">
              <img src={videoFirstFrame} alt="" className="preview" />
              <button className="remove-btn" onClick={handleRemoveVideo}>
                ×
              </button>
            </div>
          )}
        </div>

        <div className="publish-btn" onClick={handleRelease}>
          Release
        </div>
      </div>
    </div>
  )
}
