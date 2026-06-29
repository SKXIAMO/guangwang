import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/views/Home/index.jsx'))
const Setting = lazy(() => import('@/views/Setting/index.jsx'))
const PrivacyPolicy = lazy(() => import('@/views/PrivacyPolicy/index.jsx'))
const UserAgreement = lazy(() => import('@/views/UserAgreement/index.jsx'))
const Block = lazy(() => import('@/views/Block/index.jsx'))
const Coins = lazy(() => import('@/views/Coins/index.jsx'))
const Edit = lazy(() => import('@/views/Edit/index.jsx'))
const Follow = lazy(() => import('@/views/Follow/index.jsx'))
const Fan = lazy(() => import('@/views/Fan/index.jsx'))
const Report = lazy(() => import('@/views/Report/index.jsx'))
const OtherHome = lazy(() => import('@/views/OtherHome/index.jsx'))
const PicPostDetails = lazy(() => import('@/views/PicPostDetails/index.jsx'))
const Chat = lazy(() => import('@/views/Chat/index.jsx'))
const VideoPostDetails = lazy(() => import('@/views/VideoPostDetails/index.jsx'))
const PublishPicPost = lazy(() => import('@/views/PublishPicPost/index.jsx'))
const PublishVideoPost = lazy(() => import('@/views/PublishVideoPost/index.jsx'))
const AiDetails = lazy(() => import('@/views/AiDetails/index.jsx'))
const AiChat = lazy(() => import('@/views/AiChat/index.jsx'))
export const routes = [
  { path: '/', element: <Home /> },

  { path: '/picPostDetails/:postId', element: <PicPostDetails /> },
  { path: '/videoPostDetails/:postId', element: <VideoPostDetails /> },
  { path: '/publishPicPost', element: <PublishPicPost /> },
  { path: '/publishVideoPost', element: <PublishVideoPost /> },

  { path: '/chat/:chatId', element: <Chat /> },
  { path: '/otherHome/:userId', element: <OtherHome /> },
  { path: '/report', element: <Report /> },

  { path: '/aiDetails', element: <AiDetails /> },
  { path: '/aiChat', element: <AiChat /> },

  { path: '/setting', element: <Setting /> },
  { path: '/edit', element: <Edit /> },
  { path: '/follow', element: <Follow /> },
  { path: '/fan', element: <Fan /> },
  { path: '/block', element: <Block /> },
  { path: '/coins', element: <Coins /> },
  { path: '/userAgreement', element: <UserAgreement /> },
  { path: '/privacyPolicy', element: <PrivacyPolicy /> },

  { path: '*', element: <Navigate to="/" replace /> },
]
