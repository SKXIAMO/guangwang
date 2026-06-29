import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { SpinLoading } from 'antd-mobile'
import 'ress'
import { routes } from '@/router.jsx'
import { useUIStore } from '@/stores/uiStore.js'

function LoadingMask() {
  return (
    <div className="loading-mask">
      <div className="loading-box">
        <SpinLoading style={{ '--size': '32px', '--color': '#fff' }} />
      </div>
    </div>
  )
}

function GlobalToast({ message }) {
  return <div className="global-toast">{message}</div>
}

export default function App() {
  const element = useRoutes(routes)
  const loading = useUIStore((s) => s.loading)
  const toastMessage = useUIStore((s) => s.toastMessage)

  return (
    <div>
      <Suspense fallback={null}>{element}</Suspense>
      {loading ? <LoadingMask /> : null}
      {toastMessage ? <GlobalToast message={toastMessage} /> : null}
    </div>
  )
}
