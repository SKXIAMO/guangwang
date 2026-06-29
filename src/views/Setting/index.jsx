import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import { useUIStore } from '@/stores/ui'
import { useUserStore } from '@/stores/user'
import { useCurrentUserStore } from '@/stores/currentUser'
import { sendLogoutToIOS } from '@/utils/iosBridge'

import './index.css'

export default function Setting() {
  const nav = useNavigate()
  const ui = useUIStore()
  const updateUser = useUserStore((s) => s.updateUser)
  const currentUser = useCurrentUserStore((s) => s.currentUser)

  const options = useMemo(
    () => [
      { text: 'Privacy Policy', path: '/privacyPolicy' },
      { text: 'User Agreement', path: '/userAgreement' },
      { text: 'Blacklist', path: '/block' },
      // { text: 'Wallet', path: '/coins' },
      // { text: 'Edit personal information', path: '/edit' },
    ],
    [],
  )

  function handleAction(isDelete) {
    if (ui.loading) return
    ui.showLoading()

    if (isDelete) {
      updateUser(currentUser.userId, { isdelete: 1 })
    }

    const delay = Math.floor(Math.random() * 1500) + 500
    setTimeout(() => {
      ui.hideLoading()
      sendLogoutToIOS(isDelete)
    }, delay)
  }

  return (
    <div className="setting-page">
      <NavBar>
        <h1 className="setting-title">Setting</h1>
      </NavBar>
      <main className="setting-options-list">
        {options.map((option, index) => (
          <div
            key={index}
            className="setting-option"
            onClick={() => nav(option.path)}
            role="button"
            tabIndex={0}
          >
            <span className="setting-option-text">{option.text}</span>
            <div className="setting-option-right">
              <div className="setting-arrow-placeholder" />
            </div>
          </div>
        ))}
      </main>

      <div className="setting-footer">
        <button className="setting-btn setting-delete-btn" onClick={() => handleAction(true)}>
          Delete account
        </button>
        <button className="setting-btn setting-logout-btn" onClick={() => handleAction(false)}>
          Log out
        </button>
      </div>
    </div>
  )
}
